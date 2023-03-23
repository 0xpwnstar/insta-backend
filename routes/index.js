const  express = require('express');
const router = express.Router();
const models = require('../models');
const { signup, login, authorize } = require('../controllers/user')
const { followUser } = require('../controllers/follow')
const uploadImage = require('../controllers/uploadPost')

router.get('/', (req, res) => res.send("You are visiting Mars "))
// router.post('/login',(req, res) => User.login)
router.post('/signup',signup)
router.post('/login',login)
let uid = null
router.post('*',async (req, res, next) =>{
    let body = req.body
    uid = await authorize(req,res)
    if (uid.user == body.user){
        next('route')
    } else res.json({"Cookie error"})
},(req, res, next) =>{
    res.json({Success: "Cookie error"})
})

router.post('/follow', followUser)
router.post('/post', uploadImage)

module.exports = router;