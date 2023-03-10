const models= require('../models')
const { authorize } = require('./user')

exports.followUser = async (req, res) => {
    let user = req.body.user
    let follow = req.body.follow
    if (follow && user && follow != user){
        const followActivity = await models.follow.create({
            userId: user,
            followingId: follow
        })
        return res.json({ followActivity }).send()
    }
    res.send({
        Success: false
    })
}