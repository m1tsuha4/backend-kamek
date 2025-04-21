const { DataTypes } = require("sequelize");  
const sequelize = require("../config/database");  
  
const IotDevice = sequelize.define("iot_device", {  
  iot_device_id: {  
    type: DataTypes.INTEGER,  
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  }, 
  key: {
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
  
module.exports = IotDevice;  
