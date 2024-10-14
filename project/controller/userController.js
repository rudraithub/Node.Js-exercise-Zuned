const usermodel = require("../model/usermodel");
const bcrypt = require('bcrypt');

// GET USER INFO
const getuserController = async (req, res) => {
    try {
        // find user
        const user = await usermodel.findById({ _id: req.body.id });
        
        // validation 
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User Not Found'
            });
        }

        // hide password
        user.password = undefined;
        
        // response
        res.status(200).send({
            success: true,
            message: 'User Data successfully',
            user
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error In Get User API',
            error
        });
    }
};

// UPDATE USER 
const updateUserController =async(req,res) => {
    try {
    //    find user
    const user = await usermodel.findById({_id: req.body.id})
    if(!user){
        return res.status(404).send({
            success:false,
            message:'User Is Not Found'
        })
    }
    // UPDATE
    const {username,mobailenumber,address} = req.body
    if(username) user.username = username
    if(mobailenumber) user.mobailenumber = mobailenumber
    if(address) user.address = address
    // save user
    await user.save()
    res.status(200).send({
        success:true,
        message:'User Update Is Successfully'
    })

    
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
         success:false,
         message:'User Not Update',
         error
        })
    }
}

const updatepasswordController = async (req, res) => {
    try {
        // Find user
        const user = await usermodel.findById({ _id: req.body.id });

        // Validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User Not Found'
            });
        }

        // Get data from user
        const { oldpassword, newpassword } = req.body;
        if (!oldpassword || !newpassword) {
            return res.status(500).send({
                success: false,
                message: 'Please provide old or new password'
            });
        }

        // Check user password
        const isMatch = await bcrypt.compare(oldpassword, user.password);
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: 'Invalid old password',
            });
        }

        // Hash the new password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(newpassword, salt);
        user.password = hashedPassword;

        // Save the updated user
        await user.save();

        res.status(200).send({
            success: true,
            message: 'Password Updated Successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error In Password Update',
            error
        });
    }
};

// reset password
const resetpasswordController = async (req, res) => {
    try {
        const { email, newpassword, answer } = req.body;
        
        if (!email || !newpassword || !answer) {
            return res.status(500).send({
                success: false,
                message: 'Please provide email, password, and answer'
            });
        }

        const user = await usermodel.findOne({ email, answer });
        if (!user) {
            return res.status(500).send({
                success: false,
                message: 'User not found or invalid answer'
            });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(newpassword, salt);
        user.password = hashedPassword;
        await user.save();

        res.status(200).send({
            success: true,
            message: 'Reset password successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in password reset',
            error
        });
    }
};

// LOGOUT PROFILE 
const logoutprofileController = async (req,res) => {
  try {
     await usermodel.findByIdAndDelete(req.params.id)
     return res.status(200).send({
        success:true,
        message:'LOGOUT'
     })
  } catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:'Logout Profile Error',
        error
    })
    
  }
}

module.exports = { 
    getuserController,
    updateUserController,
    updatepasswordController,
    resetpasswordController, 
    logoutprofileController,
};
