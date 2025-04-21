const Disease = require("../models/disease");  
  
class DiseaseService {  
  static async create(data) {  
    return await Disease.create(data);  
  }  
  
  static async getAll() {  
    return await Disease.findAll({
      where: {
        is_deleted: false
      }
    });  
  }  
  
  static async getById(id) {  
    return await Disease.findOne({
      where: {
        disease_id: id,
        is_deleted: false
      }
    });  
  }  
  
  static async update(id, data) {  
    const disease = await Disease.findByPk(id);  
    if (!disease) return null;  
  
    Object.assign(disease, data);  
    await disease.save();  
  
    return disease;  
  }  
  
  static async delete(id) {  
    const disease = await Disease.findByPk(id);  
    if (!disease) return null;  
    await disease.update({ is_deleted: true });  
    return true;  
  }  
}  
  
module.exports = DiseaseService;  
