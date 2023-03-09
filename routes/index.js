const  express = require('express');
const router = express.Router();
const models = require('../models');
const { signup, login, authorize } = require('../controllers/user')
router.get('/', (req, res) => res.send("You are visiting Mars "))
// router.post('/login',(req, res) => User.login)
router.post('/signup',signup)
router.post('/login',login)
router.use('/authorize',async (req, res) =>{
    let test = await authorize 
    console.log(test)

})

module.exports = router;