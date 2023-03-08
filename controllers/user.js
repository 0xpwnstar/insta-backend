const crypto = require('crypto')
const models= require('../models')



exports.signup = async (req,res) => {
    console.log(models.models.user,models.user)
    // res.json({users})
    res.send("Ok")
}