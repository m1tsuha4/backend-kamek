const IotDevice = require("../models/iotDevice");  
  
class IotDeviceService {  
  static async create(data) {  
    return await IotDevice.create(data);  
  }  
  
  static async getAll() {  
    return await IotDevice.findAll({
      where: {
        is_deleted: false
      }
    });  
  }  
  
  static async getById(id) {  
    return await IotDevice.findOne({
      where: {
        iot_device_id: id,
        is_deleted: false
      }
    });  
  }  
  
  static async update(id, data) {  
    const iotDevice = await IotDevice.findByPk(id);  
    if (!iotDevice) return null;  
  
    Object.assign(iotDevice, data);  
    await iotDevice.save();  
  
    return iotDevice;  
  }  
  
  static async delete(id) {  
    const iotDevice = await IotDevice.findByPk(id);  
    if (!iotDevice) return null;  
    await iotDevice.update({ is_deleted: true });  
    return true;  
  }  
}  
  
module.exports = IotDeviceService;  
