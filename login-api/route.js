const express = require('express').Router()
const router = express
const authController = require('./authController')

router.post('/login', authController.authUser)
router.post('/register', authController.createUser)


module.exports = router