const express = require('express');  
const router = express.Router();  
const NewsController = require('../controllers/newsController');  

router.post('/news', NewsController.create);  
router.get('/news', NewsController.getAll);
router.get('/news/:id', NewsController.getById);  
router.put('/news/:id', NewsController.update);  
router.delete('/news/:id', NewsController.delete);  
  
module.exports = router;  
