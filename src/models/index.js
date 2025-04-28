const sequelize = require('../config/database');

const User = require('./user');
const Disease = require('./disease');
const VarietyInfo = require('./varietyInfo');
const AnalysisHistory = require('./analysisHistory');
const UserIotDevice = require('./userIotDevice');
const SensorData = require('./sensorData');
const SensorDataUnit = require('./sensorDataUnit');
const IotDevice = require('./iotDevice');
const ShopItem = require('./shopItem');

module.exports = {
    sequelize,
    User,
    Disease,
    VarietyInfo,
    AnalysisHistory,
    UserIotDevice,
    SensorData,
    SensorDataUnit,
    IotDevice,
    ShopItem
};
