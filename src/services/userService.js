const User = require("../models/user");  
  
class UserService {  
  static async create(data) {  
    return await User.create(data);  
  }  
  
  static async getAll() {  
    return await User.findAll({
      where: {
        is_deleted: false
      }
    });  
  }  
  
  static async getById(id) {  
    return await User.findOne({
      where: {
        user_id: id,
        is_deleted: false
      }
    });  
  }  
  
  static async update(id, data) {  
    const user = await User.findByPk(id);  
    if (!user) return null;  
  
    Object.assign(user, data);  
    await user.save();  
  
    return user;  
  }  
  
  static async delete(id) {  
    const user = await User.findByPk(id);  
    if (!user) return null;  
    await user.update({ is_deleted: true });  
    return true;  
  }  

  static async login(data) {
    return await User.findOne({
      where: {
        email: data.email,
        password: data.password,
        is_deleted: false
      }
    });
  }
}  
  
module.exports = {UserService};  
