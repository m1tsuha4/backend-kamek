const News = require("../models/news");  
const axios = require("axios");

class NewsService { 
  static newsCache = []; 
  static async create(data) {  
    return await News.create(data);  
  }  
  
  static async getAll(type = 0) {  
    try {
      const news = await this.fetchNews(type);
      this.newsCache = news;
      return news;
  } catch (error) {
      console.error(error);
      return null;
    }
  }  
  
  static async getById(id) {  
    try{
      const newsItem = this.newsCache.find(item => item.id == id);

      if (!newsItem) {
        return null;
      }

      return newsItem;
    } catch (error) {
      console.error(error);
      return null;
    }
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

  static async fetchNews(type = 0) {  
    try {
      const apiKey = process.env.NEWSID; 
      let query = '';

      switch (type) {
        case 1: query = 'plant disease'; break;
        case 2: query = 'agriculture'; break;
        case 3: query = 'agriculture technology'; break;
        default: query = 'agriculture OR plant disease OR agriculture technology'; break;
    }

    const response = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&apiKey=${apiKey}`);
    
    const articles = response.data.articles.slice(0, 10); // Limit 10 news

    // Cache the news
    const newsCache = articles.map((item, index) => ({
        id: index + 1,
        image_url: item.urlToImage || "",
        headline: item.title,
        date: new Date(item.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        description: item.description || "No description available."
    }));

    return newsCache;
  } catch (error) {
      console.error("Error fetching news:", error);
      return null;
    }
  } 
}  
  
module.exports = NewsService;  
