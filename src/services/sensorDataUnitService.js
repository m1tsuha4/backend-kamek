const SensorDataUnit = require("../models/sensorDataUnit");  
  
class SensorDataUnitService {  
  static async create(data) {  
    return await SensorDataUnit.create(data);  
  }  
  
  static async getAll() {  
    return await SensorDataUnit.findAll({
      where: {
        is_deleted: false
      }
    });  
  }  
  
  static async getById(id) {  
    return await SensorDataUnit.findOne({
      where: {
        sensor_data_unit_id: id,
        is_deleted: false
      }
    });  
  }  
  
  static async update(id, data) {  
    const sensorDataUnit = await SensorDataUnit.findByPk(id);  
    if (!sensorDataUnit) return null;  
  
    Object.assign(sensorDataUnit, data);  
    await sensorDataUnit.save();  
  
    return sensorDataUnit;  
  }  
  
  static async delete(id) {  
    const sensorDataUnit = await SensorDataUnit.findByPk(id);  
    if (!sensorDataUnit) return null;  
    await sensorDataUnit.update({ is_deleted: true });  
    return true;  
  }  
}  
  
module.exports = SensorDataUnitService;  
