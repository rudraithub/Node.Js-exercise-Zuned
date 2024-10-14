const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
   food: [    {type : mongoose.Schema.Types.ObjectId,
      ref:'food' }],
   payment: Number,
   buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
   status: {
       type: String,
       enum: ['pending', 'preparing', 'completed', 'cancelled'], // Add 'preparing' here
       default: 'pending'
   }
});

module.exports = mongoose.model('order', orderSchema);