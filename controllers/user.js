const crypto = require('crypto')
const models= require('../models')



exports.signup = async (req,res) => {
    const body = req.body
    if (!body || !body.email ){
        res.send({
            Success: false
        })
    }
    console.log(models.Sequelize)
//     const exists = await models.user.findAll({
//         where: {
//             email: {
//                 [models.sequelize.Op.eq]: body.email
//             }
//         }
// })
    res.send("exists")
}