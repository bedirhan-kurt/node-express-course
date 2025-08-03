const jwt = require('jsonwebtoken')
const { CustomAPIError } = require('../errors/customAPIError')

const registerUser = (req, res) => {
    const {username, password} = req.body

    if (!username || !password) {
        throw new CustomAPIError('Bad Request', 400)
    }

    const userId = Math.random().toString(36).substr(2, 9);


    // try to keep payload small, better experience for user
    // just for demo, in production use long, complex and unguessable string value!!!!!!!!
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})

    res.status(200).json({ msg: 'User created with token:', token })
}

const getUserInfo = (req, res) => {

}

module.exports = {
    registerUser,
    getUserInfo
}