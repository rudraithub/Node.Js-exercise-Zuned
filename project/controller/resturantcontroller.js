const { model } = require("mongoose")
const resturantmodel = require("../model/resturantmodel")

// CREATE RESTURANT
const createresturantController = async(req,res) => {
    try {
       const {
        title, 
        imageUrl, 
        foods, 
        time, 
        pickup, 
        delivery, 
        isopen, 
        logoUrl, 
        rating, 
        ratingcount, 
        code, 
        coords
    } = req.body
    // VALIDATION
    if(!title || !coords){
        return res.status(500).send({
            success:false,
            message:'please provid title and address',
        })
    }
        const newresturant = new resturantmodel({
            title, 
            imageUrl, 
            foods, 
            time, 
            pickup, 
            delivery, 
            isopen, 
            logoUrl, 
            rating, 
            ratingcount, 
            code, 
            coords
        });
        await newresturant.save();
        res.status(201).send({
            success:true,
            message:'New Resturant Created Successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'error in create resturant api',
            error
        })
        
        
    }

}

// GET RESTURANT
const getresturantController = async (req, res) => {
    try {
        const resturants = await resturantmodel.find({});
        if (!resturants || resturants.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'No Resturant Available'
            });
        }
        res.status(200).send({
            success: true,
            totalCount: resturants.length,  // Corrected typo
            resturants
        });
    } catch (error) {
        console.error(error);  // Better logging for error
        res.status(500).send({
            success: false,
            message: "Error In GetResturant",
            error: error.message || error  // Send a detailed error message
        });
    }
};

// GET RESTURANT BY ID
const getresturantbyidController = async(req,res) => {
    try {
        const resturantId = req.params.id
        if (!resturantId) {
            return res.status(404).send({
                success:false,
                message:'please provide resturant Id'
            }); 
        }
        // FIND RESTURANT
        const resturant = await resturantmodel.findById(resturantId)
        if(!resturant){
            return res.status(404).send({
                success:false,
                message:'No Resturant Found'
            })
        }
        res.status(200).send({
            success:true,
            resturant
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"please provide by right resturant id",
            error
        })
        
    }
} 
// DELETE RESTURANT
const deleteresturantController = async(req,res) => {
    try {
        const resturantId = req.params.id
        if (!resturantId) {
            return res.status(404).send({
                success:false,
                message:'Please Provide ResturantId'
            })
        }
        await resturantmodel.findByIdAndDelete(resturantId)
        res.status(200).send({
            success:true,
            message:'Resturant Data Deleted Successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Resturant Data Not deleted',
            error
        })
    }
}


module.exports = {
    createresturantController, 
    getresturantController,
    getresturantbyidController,
    deleteresturantController
}