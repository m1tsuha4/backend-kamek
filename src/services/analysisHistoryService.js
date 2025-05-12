const AnalysisHistory = require("../models/analysisHistory");  

const parseCsvToArray = (str) => {
  if (!str) return [];
  return str.split(',').map(item => item.trim());
};

class AnalysisHistoryService {  
  static async create(data) {  
    try {
      // return data;
      const diseaseIds = parseCsvToArray(data.detected_diseases_ids).map(Number);
      const varietyIds = parseCsvToArray(data.variety_ids).map(Number);
      const damagePercentages = parseCsvToArray(data.damage_percentage).map(Number);
      const bbCoordinatesBottomLeft = parseCsvToArray(data.bb_coordinates_bottomLeft).map(Number);
      const bbCoordinatesBottomRight = parseCsvToArray(data.bb_coordinates_bottomRight).map(Number);
      const bbCoordinatesTopLeft = parseCsvToArray(data.bb_coordinates_topLeft).map(Number);
      const bbCoordinatesTopRight = parseCsvToArray(data.bb_coordinates_topRight).map(Number);

      if (diseaseIds.length !== varietyIds.length || diseaseIds.length !== damagePercentages.length) {
        return null;
      }

      const savedAnalyses = [];
    for (let i = 0; i < diseaseIds.length; i++) {
      const newAnalysis = await AnalysisHistory.create({
        user_id: data.user_id,
        disease_ids: diseaseIds[i],
        variety_info_ids: varietyIds[i],
        session_name: data.session_name,
        session_image: data.session_image,
        date: new Date(),
        damage_percentage: damagePercentages[i],
        damage_level: Math.ceil(damagePercentages[i] * 100),
        damage_information: `Damage level ${Math.ceil(damagePercentages[i] * 100)}%`,
        solution: "Treatment recommendation...",
        prevention: "Prevention tip...",
        bb_coordinates_bottomLeft: bbCoordinatesBottomLeft[i],
        bb_coordinates_bottomRight: bbCoordinatesBottomRight[i],
        bb_coordinates_topLeft: bbCoordinatesTopLeft[i],
        bb_coordinates_topRight: bbCoordinatesTopRight[i],
      });

      savedAnalyses.push(newAnalysis);
    }
    } catch (error) {
      console.error("Error creating analysis:", error);
      return null;
    }
  }  
  
  static async getAll() {  
    return await AnalysisHistory.findAll({
      where: {
        is_deleted: false
      }
    });  
  }  
  
  static async getById(id) {  
    return await AnalysisHistory.findOne({
      where: {
        analysis_history_id: id,
        is_deleted: false
      }
    });  
  }  
  
  static async update(id, data) {  
    const analysisHistory = await AnalysisHistory.findByPk(id);  
    if (!analysisHistory) return null;  
  
    Object.assign(analysisHistory, data);  
    await analysisHistory.save();  
  
    return analysisHistory;  
  }  
  
  static async delete(id) {  
    const analysisHistory = await AnalysisHistory.findByPk(id);  
    if (!analysisHistory) return null;  
    await analysisHistory.update({ is_deleted: true });  
    return true;  
  }  
}  
  
module.exports = AnalysisHistoryService;  
