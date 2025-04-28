const News = require("../models/news");  
  
class NewsService {  
  static async create(data) {  
    return await News.create(data);  
  }  
  
  static async getAll() {  
    return await News.findAll({
      where: {
        is_deleted: false
      }
    });  
  }  
  
  static async getById(id) {  
    return await News.findOne({
      where: {
        news_id: id,
        is_deleted: false
      }
    });  
  }  
  
  static async update(id, data) {  
    const news = await News.findByPk(id);  
    if (!news) return null;  
  
    Object.assign(news, data);  
    await news.save();  
  
    return news;  
  }  
  
  static async delete(id) {  
    const news = await News.findByPk(id);  
    if (!news) return null;  
    await news.update({ is_deleted: true });  
    return true;  
  }  
}  
  
module.exports = NewsService;  
