const usermodel = require('../model/usermodel')

module.exports = async (req,res,next) => {
    try {
        const user = await usermodel.findById(req.body.id)
        if (user.usertype !== "admin") {
            return res.status(401).send({
                success:false,
                message:'Only Admin Access'
            })
        }else{
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
         success:false,
         message:'Un Authorized Access',
         error

        })
    }
}