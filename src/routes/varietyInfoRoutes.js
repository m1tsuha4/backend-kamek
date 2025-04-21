const express = require('express');  
const router = express.Router();  
const VarietyInfoController = require('../controllers/varietyInfoController');  

router.post('/variety-info', VarietyInfoController.create);  
router.get('/variety-info', VarietyInfoController.getAll);  
router.get('/variety-info/:id', VarietyInfoController.getById);  
router.put('/variety-info/:id', VarietyInfoController.update);  
router.delete('/variety-info/:id', VarietyInfoController.delete);  
  
module.exports = router;  
