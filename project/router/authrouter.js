const express = require('express');
const { registerController, loginController } = require('../controller/authcontroller');

const router = express.Router();

// Correct route
router.post('/register', registerController);

// login
router.post('/login', loginController);

module.exports = router;
