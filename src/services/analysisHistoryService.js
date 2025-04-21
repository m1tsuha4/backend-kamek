const AnalysisHistory = require("../models/analysisHistory");  
  
class AnalysisHistoryService {  
  static async create(data) {  
    return await AnalysisHistory.create(data);  
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
