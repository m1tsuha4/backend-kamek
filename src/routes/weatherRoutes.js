const express = require('express');  
const router = express.Router();  
const WeatherController = require('../controllers/weatherController');  

router.post('/weather', WeatherController.create);  
router.get('/weather', WeatherController.getAll);  
router.get('/weather-home', WeatherController.getById);  
router.put('/weather/:id', WeatherController.update);  
router.delete('/weather/:id', WeatherController.delete);  
  
module.exports = router;  
