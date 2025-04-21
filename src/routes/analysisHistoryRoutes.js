const express = require('express');  
const router = express.Router();  
const AnalysisHistoryController = require('../controllers/analysisHistoryController');  

router.post('/analysis-history', AnalysisHistoryController.create);  
router.get('/analysis-history', AnalysisHistoryController.getAll);  
router.get('/analysis-history/:id', AnalysisHistoryController.getById);  
router.put('/analysis-history/:id', AnalysisHistoryController.update);  
router.delete('/analysis-history/:id', AnalysisHistoryController.delete);  
  
module.exports = router;  
