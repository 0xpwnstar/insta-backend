const crypto = require('crypto')
const models = require('../models')



exports.signup = async (req,res) => {
    const users = await models.User.findAll()
    res.json({users})
    res.send()
}