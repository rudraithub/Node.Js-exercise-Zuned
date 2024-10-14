const express = require('express');

const authmiddlewares = require('../middlewares/authmiddlewares');
const { 
    createcatController, 
    getcategoryController, 
    updatecategoryController, 
    deletecategoryController 
} = require('../controller/categoryController');
const router = express.Router();

// router
// CREATE CAT
router.post('/create', authmiddlewares, createcatController)

// GET ALL CAT
router.get('/getcat', authmiddlewares, getcategoryController)

// UPDATE CAT
router.put('/updatecat/:id', authmiddlewares, updatecategoryController)

// DELETE CATEGORY
router.delete('/deletecategory/:id', authmiddlewares, deletecategoryController)


module.exports = router;


