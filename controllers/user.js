const crypto = require('crypto')
const models= require('../models')



exports.signup = async (req,res) => {
    console.log(models)
    // res.json({users})
    res.send("Ok")
}