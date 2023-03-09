const crypto = require('crypto')
const models= require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config')



exports.signup = async (req,res) => {
    const body = req.body
    if (!body || !body.email ){
        res.send({
            Success: false
        })
        return 0
    }

    const exists = await models.user.findAll({
        where: {
            email: {
                [models.Sequelize.Op.eq]: body.email
            }
        }
    })
    let salt;
    let password;
    let user = null;
    if (!exists.length){
        salt = await crypto.randomBytes(12).toString('hex').slice(0,12);
        if (body.password) {
            password = await crypto.createHmac('sha256',salt).update(body.password).digest('hex');
            if(body.email && body.firstname && body.lastname){
                user = await models.user.create({
                    firstname: body.firstname,
                    lastname: body.lastname,
                    email: body.email,
                    password: password,
                    salt: salt
                })
            }
        }else{
            res.send({
                Success: false,
                Password: null
            })
            return 0
        }
    }

    res.json({user})
    res.send()
    
}

exports.authorize = async (req, res) => {
    let decoded = null
    if (req.cookies.authcookie){
        try {
            decoded = await jwt.verify(req.cookies.authcookie, config.jwtsecret)
        }catch (error) {
        }
    }
    else {
    }
    return decoded
}

exports.login = async (req,res) => {
    const body = req.body
    if (!body || !body.email ){
        res.send({
            Success: false,
            Email: null
        })
        return 0
    }
    let password;
    const exists = await models.user.findAll({
        attributes: ['id','password',  'salt'],
        where: {
            email: {
                [models.Sequelize.Op.eq]: body.email
            }
        }
    })
    let user = null;
    if (exists.length){
        if (body.password) {
            password = await crypto.createHmac('sha256',exists[0].salt).update(body.password).digest('hex');
            if (password == exists[0].password){
                user = exists[0].id
                const token = jwt.sign({user},config.jwtsecret,{expiresIn: '7d'})
                res.cookie('authcookie', token,{httpOnly:true})
            }
        }else{
            res.send({
                Success: false,
                Password: null
            })
            return 0
        }
    }

    res.json({user})
    res.send()
    
}