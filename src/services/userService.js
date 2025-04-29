const User = require("../models/user");  
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
  
class UserService {  
  static async create(data) {  
    const user = await User.create(data);
    return this.generateToken(user.user_id, user.no_hp, user.name);
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
      },
      attributes: {
        exclude: ['password', 'is_deleted']
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
    let user = await User.findOne({
      where: {
        no_hp: data.no_hp
      }
    })

    if (!user) {
      return null;
    }

    let valid = await bcrypt.compare(data.password, user.password);
    if (!valid) {
      return null;
    }
    return this.generateToken(user.user_id, user.no_hp, user.name);
  }
  static async generateToken(userId, userNohp, userName) {
    const payload = {
        userId: userId,
        noHp: userNohp,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

    const response = {
        user_id: userId,
        user_name: userName,
        token: token
    };

    return response;
  }
}  
  
module.exports = UserService;  
