const foodmodel = require("../model/foodmodel");

// FOOD CREATE
const foodcreateController = async (req, res) => {
    try {
        const { 
            title, 
            description, 
            price, 
            imageUrl, 
            foodtags, 
            category, 
            code, 
            isAvailabel, 
            resturant, 
            rating, 
            retingcount 
        } = req.body;

        if (!title || !description || !price || !resturant) {
            return res.status(400).send({
                success: false,
                message: 'PLEASE PROVIDE VALID TITLE, DESCRIPTION, PRICE, AND RESTAURANT'
            });
        }

        const newfood = new foodmodel({
            title, 
            description, 
            price, 
            imageUrl, 
            foodtags, 
            category, 
            code, 
            isAvailabel, 
            resturant, 
            rating, 
            retingcount 
        });

        await newfood.save();
        res.status(201).send({
            success: true,
            message: 'New Food Created Successfully',
            newfood
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'ERROR IN FOOD API',
            error: error.message
        });
    }
};

// GET ALL FOODS
const getfoodController = async (req, res) => {
    try {
        const food = await foodmodel.find({});
        
        res.status(200).send({
            success: true,
            message: 'Get food successfully',
            totalfood: food.length,
            food
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error In Getfood Api',
            error: error.message
        });
    }
};

// GET SINGLE FOOD
const getsinglefoodController = async (req, res) => {
    try {
       const foodId = req.params.id
       if (!foodId) {
        console.log(error);
        return res.status(404).send({
            success:false,
            message:'please provide id'
        })
       }
       const food = await foodmodel.findById(id)
       if (!id) {
        return res.status(404).send({
            success:false,
            message:'Not Found FoodId'
        })
       }
      res.status(200).send({
        success:true,
        message:'getsinglefood successfully',
        food
      })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error In Getfood Api',
            error: error.message
        });
    }
};
// UPDATED FOOD
const updatedfoodController = async (req, res) => {
    try {
        const foodid = req.params.id;
        if (!foodid) {
            return res.status(400).send({
                success: false,
                message: 'Please Provide FoodId'
            });
        }

        // Destructure the necessary fields from the request body
        const { title, description, price, imageUrl, foodtags, category, code, isAvailabel, resturant, rating, retingcount } = req.body;

        // Prepare the food object
        const food = {
            title, 
            description, 
            price, 
            imageUrl, 
            foodtags, 
            category, 
            code, 
            isAvailabel, 
            resturant, 
            rating, 
            retingcount 
        };

        // Update the food item in the database
        const updatefood = await foodmodel.findByIdAndUpdate(foodid, food, { new: true });

        if (!updatefood) {
            return res.status(404).send({
                success: false,
                message: 'Food not found'
            });
        }

        res.status(200).send({
            success: true,
            message: 'Food updated successfully',
            food: updatefood
        });
    } catch (error) {
        console.log('Error details:', error);
        res.status(500).send({
            success: false,
            message: 'Error In Updated Food API'
        });
    }
};
// DELETE FOOD
const deletefoodController = async (req, res) => {
    try {
        const foodid = req.params.id; // Ensure you're using foodid
        if (!foodid) {
            return res.status(400).send({
                success: false,
                message: 'Please Provide FoodId'
            });
        }

        const food = await foodmodel.findByIdAndDelete(foodid); // Use foodid here
        if (!food) { // Check if food was found and deleted
            return res.status(404).send({
                success: false,
                message: 'Not Found FoodId'
            });
        }

        res.status(200).send({
            success: true,
            message: 'Deleted food successfully',
        });
    } catch (error) {
        console.error('Error details:', error); // Log detailed error information
        res.status(500).send({
            success: false,
            message: 'DELETED FOOD API ERROR'
        });
    }
};

module.exports = {
    foodcreateController,
    getfoodController,
    getsinglefoodController,
    updatedfoodController,
    deletefoodController
};
