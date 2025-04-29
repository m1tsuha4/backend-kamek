const Weather = require("../models/weather");  
const axios = require('axios');
require('dotenv').config();

class WeatherService {  
  static async create(data) {  
    return await Weather.create(data);  
  }  
  
  static async getAll(lat, lon) {  
    try {
      const apiKey = process.env.APPID ;
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);
        const data = response.data;

        const dailyData = {};

        data.list.forEach(item => {
            const date = item.dt_txt.split(' ')[0];

            if (!dailyData[date]) {
                dailyData[date] = {
                    max_temperature: item.main.temp_max,
                    min_temperature: item.main.temp_min,
                    humidity: item.main.humidity,
                    wind_velocity: item.wind.speed,
                    rainfall: item.rain ? item.rain['3h'] || 0 : 0,
                    type_id: item.weather[0].id
                };
            } else {
                dailyData[date].max_temperature = Math.max(dailyData[date].max_temperature, item.main.temp_max);
                dailyData[date].min_temperature = Math.min(dailyData[date].min_temperature, item.main.temp_min);
            }
        });
        const dataObject = Object.entries(dailyData).map(([date, value]) => ({
          date,
          ...value
        }))
        return dataObject;

  } catch (error) {
      console.error("Error fetching 10 day weather forecast:", error);
      return null;
    }
  }  
  
  static async getById(lat, lon) {  
    try {
      const apiKey = process.env.APPID ; 
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      const response = await axios.get(url);
      const data = response.data;
      // console.log(data);
      const customWeather = {
          max_temperature: data.main.temp_max,
          min_temperature: data.main.temp_min,
          current_temperature: data.main.temp,
          humidity: data.main.humidity,
          wind_velocity: data.wind.speed,
          rainfall: data.rain ? (data.rain['1h'] || 0) : 0,
          type_id: data.weather[0].id
      };
      return customWeather;
  } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }  
  }  
  
  static async update(id, data) {  
    const weather = await Weather.findByPk(id);  
    if (!weather) return null;  
  
    Object.assign(weather, data);  
    await weather.save();  
  
    return weather;  
  }  
  
  static async delete(id) {  
    const weather = await Weather.findByPk(id);  
    if (!weather) return null;  
    await weather.update({ is_deleted: true });  
    return true;  
  }  
}  
  
module.exports = WeatherService;  
