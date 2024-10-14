const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true
         },
    email: { 
        type: String,
         required: true,
         unique: true
         },
    password: {
         type: String,
         required: true
         },
    mobailenumber: { 
        type: String,
        required: true,
        unique: true
         }, 
    userType: {
          type: String,
          enum: ['admin', 'customer', 'vendor', 'guest', 'support'],
          default: 'customer'
      },    
    address: { 
        type: [String], 
        required: true
     },
     answer:{
          type:String,
          required:[true,'answer is required']
     },
},
     { timestamps: true } 
);

const usermodel = mongoose.model('User', userSchema);

module.exports = usermodel;
