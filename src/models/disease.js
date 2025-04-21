const { DataTypes } = require("sequelize");  
const sequelize = require("../config/database");  
  
const Disease = sequelize.define("disease", {  
  disease_id: {  
    type: DataTypes.INTEGER,  
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  symptom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cause: {
    type: DataTypes.STRING,
    allowNull: false
  },
  seed_condition: {
    type: DataTypes.STRING,
    allowNull: false
  },
  default_solution: {
    type: DataTypes.STRING,
    allowNull: false
  },
  default_prevention: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},{
  timestamps: false
});  
  
module.exports = Disease;  
