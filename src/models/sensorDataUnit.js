const { DataTypes } = require("sequelize");  
const sequelize = require("../config/database");  
  
const SensorDataUnit = sequelize.define("sensor_data_unit", {  
  sensor_data_unit_id: {  
    type: DataTypes.INTEGER,  
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  }, 
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},{
  timestamps: false
});  
  
module.exports = SensorDataUnit;  
