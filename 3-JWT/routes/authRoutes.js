const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/auth')

const {registerUser, getUserInfo} = require('../controllers/authControllers')

router.route('/register').post(registerUser)
router.route('/userinfo').get(authMiddleware, getUserInfo)

module.exports = router