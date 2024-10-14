const { model } = require("mongoose");
const ordermodel = require("../model/ordermodel");

// CREATE ORDER
const ordercreateController = async (req, res) => {
    try {
        const { cart, payment } = req.body;
        if (!cart || !payment) {
            return res.status(500).send({
                success: false,
                message: 'Please add cart and payment'
            });
        }

        let total = 0;
        cart.forEach((i) => {
            total += i.price;
        });

        const newOrder = new ordermodel({
            food: cart,
            payment: total,
            buyer: req.body.id
        });

        const savedOrder = await newOrder.save();

        res.status(201).send({
            success: true,
            message: 'Order created successfully',
            order: savedOrder
        });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).send({
            success: false,
            message: 'Error in Order API',
            error: error.message // Send error message for more context
        });
    }
};

// CHANGE ORDER STATUS
const orderstatusController = async (req, res) => {
    try {
        const orderId = req.params.id;

        if (!orderId) {
            return res.status(400).send({
                success: false,
                message: 'Please provide an orderId'
            });
        }

        const { status } = req.body;

        const order = await ordermodel.findByIdAndUpdate(
            orderId, 
            { status }, 
            { new: true }
        );

        if (!order) {
            return res.status(404).send({
                success: false,
                message: 'Order not found'
            });
        }

        res.status(200).send({
            success: true,
            message: 'Order Status Successfully Updated',
            order // Optionally return the updated order
        });
    } catch (error) {
        console.error("Error in OrderStatus API:", error);
        res.status(500).send({
            success: false,
            message: 'Error In OrderStatus API',
            error: error.message
        });
    }
};


module.exports = { ordercreateController, orderstatusController};
