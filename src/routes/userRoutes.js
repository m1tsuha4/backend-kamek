const express = require('express');  
const router = express.Router();  
const {UserController, upload} = require('../controllers/userController');  

router.get('/user', UserController.getAll);  
router.get('/user/:id', UserController.getById);  
router.put('/user/:id', upload.single("profile_image"), UserController.update);  
router.delete('/user/:id', UserController.delete);  
  
module.exports = router;  
