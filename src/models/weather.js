const { DataTypes } = require("sequelize");  
const sequelize = require("../config/database");  
  
const Weather = sequelize.define("weather", {  
  weather_id: {  
    type: DataTypes.INTEGER,  
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  }, 
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},{
  timestamps: false
});  
  
module.exports = Weather;  
