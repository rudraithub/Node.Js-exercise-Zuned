const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  foods: [
    {
      dishName: String,
      dishpic: String,
      price: Number,
    }
  ],
  time: String,
  pickup: Boolean,
  delivery: Boolean,
  isopen: Boolean,
  logoUrl: String,
  rating: Number,
  ratingcount: String,
  code: String,
  coords: {
    id: String,
    latitude: String,
    latitudeDelta: String,
    longitude: String,
    longitudeDelta: String,
    address: String
  }
});


const resturantmodel = mongoose.model('resturant', restaurantSchema );

module.exports = resturantmodel;

