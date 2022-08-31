const express = require('express').Router()
const router = express
const {Login} = require('./authController')

router.post('/login', Login.authUser)
router.post('/register', Login.createUser)


module.exports = router