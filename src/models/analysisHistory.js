const { DataTypes } = require("sequelize");  
const sequelize = require("../config/database");  
const User = require("./user");
const Disease = require("./disease");
const VarietyInfo = require("./varietyInfo");
  
const AnalysisHistory = sequelize.define("analysis_history", {  
  analysis_history_id: {  
    type: DataTypes.INTEGER,  
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  }, 
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id'
    }
  },
  disease_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Disease,
      key: 'disease_id'
    }
  },
  variety_info_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: VarietyInfo,
      key: 'variety_info_id'
    }
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  session_name: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  session_image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  damage_level: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  damage_percentage: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  damage_information: {
    type: DataTypes.STRING,
    allowNull: false
  },
  solution: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prevention: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bb_coordinate: {
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
  
module.exports = AnalysisHistory;  
