const express = require('express');
const user_router = express.Router()
const userController = require('../controllers/users.controller')


//get Artist All Songs
user_router.get('/users',userController.getAllUsers)

//get All Songs
user_router.post('/register', userController.postRegister)

//post Song
user_router.post('/login', userController.postLogin)

user_router.post('/admin/login', userController.AdminPostLogin)

module.exports = user_router
