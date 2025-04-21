const SensorData = require("../models/sensorData");  
  
class SensorDataService {  
  static async create(data) {  
    return await SensorData.create(data);  
  }  
  
  static async getAll() {  
    return await SensorData.findAll({
      where: {
        is_deleted: false
      }
    });  
  }  
  
  static async getById(id) {  
    return await SensorData.findOne({
      where: {
        sensor_data_id: id,
        is_deleted: false
      }
    });  
  }  
  
  static async update(id, data) {  
    const sensorData = await SensorData.findByPk(id);  
    if (!sensorData) return null;  
  
    Object.assign(sensorData, data);  
    await sensorData.save();  
  
    return sensorData;  
  }  
  
  static async delete(id) {  
    const sensorData = await SensorData.findByPk(id);  
    if (!sensorData) return null;  
    await sensorData.update({ is_deleted: true });  
    return true;  
  }  
}  
  
module.exports = SensorDataService;  
