const express = require('express');
const { getuserController, updateUserController, updatepasswordController, resetpasswordController, logoutprofileController} = require('../controller/userController.JS');
const authmiddlewares = require('../middlewares/authmiddlewares');


const router = express.Router();
// GET USER
router.get('/getuser', authmiddlewares, getuserController);

// UPDATE USER || GET
router.put('/updateUser', authmiddlewares, updateUserController)

// password update
router.post('/updatepassword', authmiddlewares,updatepasswordController )

// RESET PASSWORD
router.post('/resetpassword', authmiddlewares, resetpasswordController)

// LOGOUT USER
router.delete('/logoutuser/:id', authmiddlewares, logoutprofileController)

module.exports = router;





// time:- 2:26