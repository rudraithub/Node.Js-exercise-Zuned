const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
{
 title:{
    type:String,
    required:[true,'category title is required']
 },
 imageUrl:{
    type:String,
    default:
    'https://www.freepik.com/premium-photo/planing-3d-render-icon-illustration_32927655.htm#fromView=search&page=2&position=6&uuid=82125c38-04ce-43b9-8fde-0d956bcb8da3'
 }
},
     { timestamps: true } 
);

module.exports = mongoose.model('category', categorySchema);
