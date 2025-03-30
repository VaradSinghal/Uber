const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captainController');
const authMiddleware = require('../middleware/auth_middleware');
const {body} = require('express-validator');

router.post('/register', [
    body('fullname.firstname').notEmpty().withMessage('First name is required').isLength({min: 3}).withMessage('First name must be atleast 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').notEmpty().withMessage('Password is required').isLength({min: 6}).withMessage('Password must be atleast 6 characters long'),
    body('vehicle.color').notEmpty().withMessage('Color is required').isLength({min: 3}).withMessage('Color must be atleast 3 characters long'),
    body('vehicle.plate').notEmpty().withMessage('Plate is required').isLength({min: 3}).withMessage('Plate must be atleast 3 characters long'),
    body('vehicle.capacity').notEmpty().withMessage('Capacity is required').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').notEmpty().withMessage('Vehicle type is required')
], captainController.registerCaptain);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    captainController.loginCaptain
)


router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)


module.exports = router;