const News = require("../models/news");  
const axios = require("axios");
const puppeteer = require('puppeteer');
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

class NewsService { 
  static NewsType = Object.freeze({
    COCOA: "COCOA",
    PLANT_DISEASE : "Plant Disease",
    AGRICULTURE : "Agriculture",
    AGRICULTURE_TECHNOLOGY : "Agriculture Technology"
  });

  static getNewsType(type){
    switch(type){
      case 0 : return this.NewsType.COCOA; 
      case 1 : return this.NewsType.PLANT_DISEASE;
      case 2 : return this.NewsType.AGRICULTURE;
      case 3 : return this.NewsType.AGRICULTURE_TECHNOLOGY;
      default : return this.NewsType.CACAO;
    }
  }

  static newsCache = new Map();
  
  
  static async create(data) {  
    return await News.create(data);  
  }  
  
  static async getAll(query = "", type = 0) {  
    try {
      const newsType = this.getNewsType(type);

      const cachedNews = this.newsCache[newsType];

      let newss;
      if(cachedNews == null){
        newss = await this.fetchNews(newsType);
        this.newsCache[newsType] = newss;
      }else{
        newss = cachedNews;
      }

      if(typeof query !== "string"){
        return null;
      }
    
      const lowerCasedQuery = query.toLowerCase();
      const filteredNews = newss.filter(item => {
          return item.headline.toLowerCase().includes(lowerCasedQuery);
      });
      
      return filteredNews;
  } catch (error) {
      console.error(error);
      return null;
    }
  }  
  
  static async getById(id, type) {  
    try{

      const newsType = this.getNewsType(type);
      const cachedNews = this.newsCache[newsType];

      let newss;
      if(!cachedNews){
        newss = await this.getAll("", type);
      }else{
        newss = cachedNews;
      }

      console.log(newss);

      const newsItem = newss.find(item => item.id == id);

      if (!newsItem) {
        return null;
      }

      const description = await this.getNewsFullDescription(newsItem.url)

      return {
        ...newsItem,
        description: description
      };
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

  static async fetchNews(newsType) {  
    try {
      const apiKey = process.env.NEWSID; 
      const query = newsType;

    const response = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&apiKey=${apiKey}&searchIn=title`);
    
    const articles = response.data.articles.slice(0, 10); // Limit 10 news

    // Cache the news
    const newsCache = articles.map((item, index) => ({
        id: index + 1,
        image_url: item.urlToImage || "",
        headline: item.title,
        url : item.url,
        date: new Date(item.publishedAt).toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }),
        description: item.description || "No description available."
    }));

    return newsCache;
  } catch (error) {
      console.error("Error fetching news:", error);
      return null;
    }
  } 

  static async getNewsFullDescription(newsUrl) {
    const browser = await puppeteer.launch({ headless: 'new' }); // modern headless mode
    const page = await browser.newPage();
  
    try {
      await page.goto(newsUrl, { waitUntil: 'networkidle2', timeout: 30000 });
  
      // Optional: Follow iframe or meta-refresh redirects (if needed)
      const html = await page.content();
      const dom = new JSDOM(html, { url: newsUrl });
      const reader = new Readability(dom.window.document);
      const article = reader.parse();
  
      await browser.close();
      return article.textContent;
    } catch (err) {
      await browser.close();
      return null;
    }
  }
}  
  
module.exports = NewsService;  
