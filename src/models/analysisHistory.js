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
    allowNull: true
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
    allowNull: true
  },
  damage_percentage: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  damage_information: {
    type: DataTypes.STRING,
    allowNull: true
  },
  solution: {
    type: DataTypes.STRING,
    allowNull: true
  },
  prevention: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bb_coordinates_topLeft: {
    type: DataTypes.INTEGER, 
    allowNull: true,
  },
  bb_coordinates_topRight: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  bb_coordinates_bottomLeft: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  bb_coordinates_bottomRight: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},{
  timestamps: false
});  
  
module.exports = AnalysisHistory;  
