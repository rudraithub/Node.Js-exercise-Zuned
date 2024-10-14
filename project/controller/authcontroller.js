const usermodel = require('../model/usermodel');  // Ensure this import is correct
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const registerController = async (req, res) => {
    try {
        const { username, email, password, mobailenumber, address, answer} = req.body;

        // Validate required fields
        if (!username || !email || !password || !mobailenumber || !address|| !answer) {
            return res.status(400).send({
                success: false,
                message: 'Please provide all fields',
            });
        }

        // Validate that mobailenumber is not null or empty
        if (!mobailenumber) {
            return res.status(400).send({
                success: false,
                message: 'Mobile number cannot be empty',
            });
        }

        // Check if email already exists
        const existingEmail = await usermodel.findOne({ email });
        if (existingEmail) {
            return res.status(400).send({
                success: false,
                message: 'Email already exists',
            });
        }

        // Check if mobile number already exists
        const existingPhone = await usermodel.findOne({ mobailenumber });
        if (existingPhone) {
            return res.status(400).send({
                success: false,
                message: 'Phone number already exists',
            });
        }

        // Hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save new user to MongoDB
        const newUser = new usermodel({
            username,
            email,
            password: hashedPassword,
            mobailenumber,  
            address,
            answer,
        });

        await newUser.save();  // Wait for the user to be saved

        // Send response after saving
        return res.status(201).send({
            success: true,
            message: 'User registered successfully',
            user: newUser,
        });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).send({
            success: false,
            message: 'Error in register API',
            error: error.message,
        });
    }
};

// login
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: 'Please provide EMAIL and PASSWORD',
            });
        }

        // Check user
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found',
            });
        }

        // Check user password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: 'Invalid credentials',
            });
        }

        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        // Success response
        return res.status(200).send({
            success: true,
            message: 'Login successfully',
            token,
            user,
        });

    } catch (error) {
        console.error('Error in login:', error); // Log error for debugging
        return res.status(500).send({
            success: false,
            message: 'Error in login API',
            error: error.message || "Internal Server Error", // Improved error handling
        });
    }
};

 
module.exports = { registerController, loginController };