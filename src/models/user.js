const { DataTypes } = require("sequelize");  
const sequelize = require("../config/database");  
  
const User = sequelize.define("user", {  
  user_id: {  
    type: DataTypes.INTEGER,  
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  }, 
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profile_image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  no_hp: {
    type: DataTypes.STRING,
    allowNull: true
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},{
  timestamps: false
});  
  
module.exports = User;  
