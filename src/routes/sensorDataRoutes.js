const express = require('express');  
const router = express.Router();  
const SensorDataController = require('../controllers/sensorDataController');  

router.post('/sensor-data', SensorDataController.create);  
router.get('/sensor-data', SensorDataController.getAll);  
router.get('/sensor-data/:id', SensorDataController.getById);  
router.put('/sensor-data/:id', SensorDataController.update);  
router.delete('/sensor-data/:id', SensorDataController.delete);  
  
module.exports = router;  
