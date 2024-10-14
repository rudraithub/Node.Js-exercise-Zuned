const express = require('express');
const router = express.Router(); // Create an instance of the router

const authmiddlewares = require('../middleware/authmiddlewares'); // Adjust if necessary
const foodcreateController = require('../controllers/foodcreateController');

// Define your routes
router.post('/create', authmiddlewares, foodcreateController);

module.exports = router; // Export the router
