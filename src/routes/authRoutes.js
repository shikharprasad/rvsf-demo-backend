const express = require('express')

const router = express.Router()
const {authMiddleware} = require('../middleware/authMiddleware')

const {registerUser , login, me} = require('../controllers/authController')

router.post('/register',registerUser)
router.post('/login', login)
router.get('/me',authMiddleware,me)
module.exports = router