const express = require('express');  
const router = express.Router();  
const SensorDataUnitController = require('../controllers/sensorDataUnitController');  

router.post('/sensor-data-unit', SensorDataUnitController.create);  
router.get('/sensor-data-unit', SensorDataUnitController.getAll);  
router.get('/sensor-data-unit/:id', SensorDataUnitController.getById);  
router.put('/sensor-data-unit/:id', SensorDataUnitController.update);  
router.delete('/sensor-data-unit/:id', SensorDataUnitController.delete);  
  
module.exports = router;  
