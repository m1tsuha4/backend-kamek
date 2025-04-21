const express = require('express');  
const router = express.Router();  
const UserController = require('../controllers/userController');  

router.post('/user', UserController.create);  
router.get('/user', UserController.getAll);  
router.get('/user/:id', UserController.getById);  
router.put('/user/:id', UserController.update);  
router.delete('/user/:id', UserController.delete);  
  
module.exports = router;  
