const { DataTypes } = require("sequelize");  
const sequelize = require("../config/database");  
const IotDevice = require("./iotDevice");
const SensorDataUnit = require("./sensorDataUnit");
  
const SensorData = sequelize.define("sensor_data", {  
  sensor_data_id: {  
    type: DataTypes.INTEGER,  
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  }, 
  iot_device_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: IotDevice,
      key: 'iot_device_id'
    }
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  temperature_value: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  humidity_value: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  light_intensity_value: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  temperature_unit_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: SensorDataUnit,
      key: 'sensor_data_unit_id'
    }
  },
  humidity_unit_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: SensorDataUnit,
      key: 'sensor_data_unit_id'
    }
  },
  light_intensity_unit_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: SensorDataUnit,
      key: 'sensor_data_unit_id'
    }
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},{
  timestamps: false
});  
  
module.exports = SensorData;  
