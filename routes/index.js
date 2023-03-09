const  express = require('express');
const router = express.Router();
const models = require('../models');
const { signup, login, authorize } = require('../controllers/user')
router.get('/', (req, res) => res.send("You are visiting Mars "))
// router.post('/login',(req, res) => User.login)
router.post('/signup',signup)
router.post('/login',login)
let uid = null
router.post('/',async (req, res, next) =>{
    uid = await authorize(req,res)
    if (uid){
        res.json({uid})
        next('route')
    } else next()
},(req, res, next) =>{
    res.send({Success: false})
})

router.post('/follow', async (req, res, next) => {
    res.send()
})

module.exports = router;