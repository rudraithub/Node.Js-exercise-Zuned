const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema(
{
  title:{
    type:String,
    required:[true,'food title is required']
  },
  description:{
    type:String,
    required:[true,'food description is required']
  },
  price:{
    type:Number,
    required:[true,'price is requirred']
  },
  imageUrl:{
    type:String,
    default:
    "https://www.freepik.com/free-photo/flat-lay-vegetables-arrangement_13818364.htm#fromView=search&page=1&position=28&uuid=e31aa934-3ff4-4ca6-a72b-f277123b5fc7"
   
  },
  foodtags:{
    type:String,
  },
  category:{
    type:String,
  },
  code:{
    type:String
  },
  isAvailabel:{
    type:Boolean,
    default:true
  },
  resturant:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'resturant'
  },
  rating:{
    type:Number,
    default:5,
    mini:250,
    mex:1500
  },
  retingcount:{
    type:String,
  }

},
     { timestamps: true } 
);

module.exports = mongoose.model('food', foodSchema);
