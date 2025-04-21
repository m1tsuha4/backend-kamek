const express = require('express');  
const router = express.Router();  
const IotDeviceController = require('../controllers/iotDeviceController');  

router.post('/iot-device', IotDeviceController.create);  
router.get('/iot-device', IotDeviceController.getAll);  
router.get('/iot-device/:id', IotDeviceController.getById);  
router.put('/iot-device/:id', IotDeviceController.update);  
router.delete('/iot-device/:id', IotDeviceController.delete);  
  
module.exports = router;  
