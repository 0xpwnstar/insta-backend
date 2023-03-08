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
    if (!exists){
        salt = crypto.randomBytes(12).toString('hex').slice(0,12);
        if (body.password) {
            password = crypto.createHmac('sha256',salt).update(body.password).digest('hex');
        }else{
            res.send({
                Success: false,
                Password: null
            })
            return 0
        }
    }
    let user = null
    if(body.email && body.firstname && body.lastname){
        user = await models.user.create({
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password,
            salt
        })
    }
    res.json({user})
    res.send()
    
}