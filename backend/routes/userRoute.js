const express  = require('express');
const router  =express.Router();
const { body }= require('express-validator');
const userController = require('../controllers/userController');
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 chararcters long'),
    body('password').isLength({min:5}).withMessage('Password must be 5 characters long')
],
userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:5}).withMessage('Password must be 5 characters long')

],

userController.loginUser
)
 


module.exports = router;