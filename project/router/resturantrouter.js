const express = require('express');

const authmiddlewares = require('../middlewares/authmiddlewares');
const { 
    createresturantController, 
    getresturantController, 
    getresturantbyidController, 
    deleteresturantController 
} = require('../controller/resturantcontroller');


const router = express.Router();

// router
// CRAETE RESTURANT || POST
router.post('/create', authmiddlewares, createresturantController)

// GET RESTURANT || GET
router.get('/getresturant', authmiddlewares, getresturantController)

// GET RESTURANT BY ID || GET
router.get('/get/:id', getresturantbyidController)

// DELETE RESTURANT
router.delete('/delete/:id', authmiddlewares, deleteresturantController)


module.exports = router;


