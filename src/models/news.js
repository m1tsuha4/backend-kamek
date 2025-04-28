const { DataTypes } = require("sequelize");  
const sequelize = require("../config/database");  
  
const News = sequelize.define("news", {  
  news_id: {  
    type: DataTypes.INTEGER,  
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  }, 
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},{
  timestamps: false
});  
  
module.exports = News;  
