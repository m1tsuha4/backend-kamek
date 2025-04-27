const ShopItem = require("../models/shopItem");  
  
class ShopItemService {  
  static async create(data) {  
    return await ShopItem.create(data);  
  }  
  
  static async getAll() {  
    return await ShopItem.findAll({
      where: {
        is_deleted: false
      }
    });  
  }  
  
  static async getById(id) {  
    return await ShopItem.findOne({
      where: {
        shop_item_id: id,
        is_deleted: false
      }
    });  
  }  
  
  static async update(id, data) {  
    const shopItem = await ShopItem.findByPk(id);  
    if (!shopItem) return null;  
  
    Object.assign(shopItem, data);  
    await shopItem.save();  
  
    return shopItem;  
  }  
  
  static async delete(id) {  
    const shopItem = await ShopItem.findByPk(id);  
    if (!shopItem) return null;  
    await shopItem.update({ is_deleted: true });  
    return true;  
  }  
}  
  
module.exports = ShopItemService;  
