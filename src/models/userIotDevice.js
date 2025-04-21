const { DataTypes } = require("sequelize");  
const sequelize = require("../config/database");  
const User = require("./user");
const IotDevice = require("./iotDevice");
  
const UserIotDevice = sequelize.define("user_iot_device", {  
  user_iot_device_id: {  
    type: DataTypes.INTEGER,  
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  }, 
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id'
    }
  },
  iot_device_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: IotDevice,
      key: 'iot_device_id'
    }
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},{
  timestamps: false
});  
  
module.exports = UserIotDevice;  
