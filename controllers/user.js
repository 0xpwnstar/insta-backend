const crypto = require('crypto')
const models= require('../models')



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
    console.log(!exists)
    if (!exists){
        console.log("here")
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
                console.log(password, user, salt)
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