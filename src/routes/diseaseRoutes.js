const express = require('express');  
const router = express.Router();  
const DiseaseController = require('../controllers/diseaseController');  

router.post('/disease', DiseaseController.create);  
router.get('/disease', DiseaseController.getAll);  
router.get('/disease/:id', DiseaseController.getById);  
router.put('/disease/:id', DiseaseController.update);  
router.delete('/disease/:id', DiseaseController.delete);  
  
module.exports = router;  
