const crypto = require('crypto')
const User = require('../models/user')



exports.signup = async (req,res) => {
    console.log(User)
    // res.json({users})
    res.send("Ok")
}