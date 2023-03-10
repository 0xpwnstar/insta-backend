const  express = require('express');
const router = express.Router();
const models = require('../models');
const { signup, login, authorize } = require('../controllers/user')
const { followUser } = require('../controllers/follow')

router.get('/', (req, res) => res.send("You are visiting Mars "))
// router.post('/login',(req, res) => User.login)
router.post('/signup',signup)
router.post('/login',login)
let uid = null
router.post('*',async (req, res, next) =>{
    let body = req.body
    uid = await authorize(req,res)
    if (uid.user == body.user){
        res.json({uid})
        next('route')
    } else res.json({Success: false})
},(req, res, next) =>{
    res.json({Success: false})
})

router.post('/follow', followUser)

module.exports = router;