const models= require('../models')
const { authorize } = require('./user')

exports.followUser = async (req, res) => {
    let user = req.body.user
    let follow = req.body.follow
    if (follow && user && follow != user){
        const exists = await models.follow.findOne({
            where: {
                [models.Sequelize.Op.and]: {
                    userId: user,
                    followingId: follow
                }
            }
        })
        if (!exists){
            const followActivity = await models.follow.create({
                userId: user,
                followingId: follow
            })
            return res.json({ followActivity }).send()
        }else {
            const deleteActivity = await models.follow.destroy({
                userId: user,
                followingId: follow
            })
            return res.json({ deleteActivity }).send()         
        }
    }
    res.send({
        Success: false
    })
}