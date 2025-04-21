const { DataTypes } = require("sequelize");  
const sequelize = require("../config/database");  
  
const VarietyInfo = sequelize.define("variety_info", {  
  variety_info_id: {  
    type: DataTypes.INTEGER,  
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  }, 
  variety: {
    type: DataTypes.STRING,
    allowNull: false
  },
  max_price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},{
  timestamps: false
});  
  
module.exports = VarietyInfo;  
