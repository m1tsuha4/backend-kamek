const UserIotDevice = require("../models/userIotDevice");  
  
class UserIotDeviceService {  
  static async create(data) {  
    return await UserIotDevice.create(data);  
  }  
  
  static async getAll() {  
    return await UserIotDevice.findAll({
      where: {
        is_deleted: false
      }
    });  
  }  
  
  static async getById(id) {  
    return await UserIotDevice.findOne({
      where: {
        user_iot_device_id: id,
        is_deleted: false
      }
    });  
  }  
  
  static async update(id, data) {  
    const userIotDevice = await UserIotDevice.findByPk(id);  
    if (!userIotDevice) return null;  
  
    Object.assign(userIotDevice, data);  
    await userIotDevice.save();  
  
    return userIotDevice;  
  }  
  
  static async delete(id) {  
    const userIotDevice = await UserIotDevice.findByPk(id);  
    if (!userIotDevice) return null;  
    await userIotDevice.update({ is_deleted: true });  
    return true;  
  }  
}  
  
module.exports = UserIotDeviceService;  
