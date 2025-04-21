const VarietyInfo = require("../models/varietyInfo");  
  
class VarietyInfoService {  
  static async create(data) {  
    return await VarietyInfo.create(data);  
  }  
  
  static async getAll() {  
    return await VarietyInfo.findAll({
      where: {
        is_deleted: false
      }
    });  
  }  
  
  static async getById(id) {  
    return await VarietyInfo.findOne({
      where: {
        variety_info_id: id,
        is_deleted: false
      }
    });  
  }  
  
  static async update(id, data) {  
    const varietyInfo = await VarietyInfo.findByPk(id);  
    if (!varietyInfo) return null;  
  
    Object.assign(varietyInfo, data);  
    await varietyInfo.save();  
  
    return varietyInfo;  
  }  
  
  static async delete(id) {  
    const varietyInfo = await VarietyInfo.findByPk(id);  
    if (!varietyInfo) return null;  
    await varietyInfo.update({ is_deleted: true });  
    return true;  
  }  
}  
  
module.exports = VarietyInfoService;  
