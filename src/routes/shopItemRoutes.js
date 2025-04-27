const express = require('express');  
const router = express.Router();  
const ShopItemController = require('../controllers/shopItemController');  

router.post('/shop-item', ShopItemController.create);  
router.get('/shop-item', ShopItemController.getAll);  
router.get('/shop-item/:id', ShopItemController.getById);  
router.put('/shop-item/:id', ShopItemController.update);  
router.delete('/shop-item/:id', ShopItemController.delete);  
  
module.exports = router;  
