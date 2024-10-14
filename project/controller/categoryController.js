const categorymodel = require("../model/categorymodel");

// CREATE CAT
const createcatController = async(req,res) => {
    try {
        const {title, imageUrl} = req.body
        // VALIDATION
        if (!title) {
            return res.status(500).send({
                success:false,
                message:'Please Provide Category Title OR imageUrl'
            })
        }
        const newcategory = new categorymodel({title,imageUrl})
        await newcategory.save()
        res.status(200).send({
            success:true,
            message:'Category Cat Successfully',
            newcategory
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'ERROR IN CATEGORY CAT API',
            error
        })
        
    }
}

// GET CATEGORY
const getcategoryController = async(req, res) => {
    try {
        const categories = await categorymodel.find()
        if (!categories) {
            return res.status(404).send({
                success:false,
                message:''
            });
        }
        res.status(200).send({
            success:true,
            message:'GET CATEGORY SUCCESSFULLY',
            totalcat: categories.length,
            categories
            
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'NOT GET CATEGORY',
            error
        })
        
    }
}

// UPDATE CAT
const updatecategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, imageUrl } = req.body;

        // Ensure category data is provided
        if (!title && !imageUrl) {
            return res.status(400).send({
                success: false,
                message: 'PLEASE PROVIDE CATEGORY'
            });
        }

        const updatedcategory = await categorymodel.findByIdAndUpdate(id, { title, imageUrl }, { new: true });

        // Check if the category was found and updated
        if (!updatedcategory) {
            return res.status(404).send({
                success: false,
                message: 'CATEGORY NOT FOUND'
            });
        }

        res.status(200).send({
            success: true,
            message: 'Updated Successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'ERROR IN UPDATE CATEGORY',
            error
        });
    }
}

// DELETE CATEGORY
const deletecategoryController = async(req, res) => {
    try {
        const {id} = req.params
        if (!id) {
            return res.status(500).send({
                success:false,
                message:'Please Provide Id'
            });
        }
        const deletedcat = await categorymodel.findByIdAndDelete(id)
        if (deletedcat) {
            res.status(200).send({
                success:true,
                message:'Deleted Successfully'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'ERROR IN DELETE CATEGORY',
            error
        })
        
    }
}

module.exports = {
    createcatController, 
    getcategoryController, 
    updatecategoryController,
    deletecategoryController
}