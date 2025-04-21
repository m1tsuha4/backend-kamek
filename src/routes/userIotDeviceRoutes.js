const express = require('express');  
const router = express.Router();  
const UserIotDeviceController = require('../controllers/userIotDeviceController');  

router.post('/user-iot-device', UserIotDeviceController.create);  
router.get('/user-iot-device', UserIotDeviceController.getAll);  
router.get('/user-iot-device/:id', UserIotDeviceController.getById);  
router.put('/user-iot-device/:id', UserIotDeviceController.update);  
router.delete('/user-iot-device/:id', UserIotDeviceController.delete);  
  
module.exports = router;  
