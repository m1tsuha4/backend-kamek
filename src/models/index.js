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

// AnalysisHistory Relations
User.hasMany(AnalysisHistory, { foreignKey: 'user_id' });
AnalysisHistory.belongsTo(User, { foreignKey: 'user_id' });

Disease.hasMany(AnalysisHistory, { foreignKey: 'disease_id' });
AnalysisHistory.belongsTo(Disease, { foreignKey: 'disease_id' });

VarietyInfo.hasMany(AnalysisHistory, { foreignKey: 'variety_info_id' });
AnalysisHistory.belongsTo(VarietyInfo, { foreignKey: 'variety_info_id' });

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
