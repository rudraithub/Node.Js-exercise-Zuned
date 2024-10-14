require('dotenv').config();
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/db');


// dotenv configuration
dotenv.config();

// DB connection
connectDb();

// rest object
const app = express();

// middlewares
app.use(morgan('dev'));
// Add this line before the routes
app.use(express.json());


// routes
app.use('/test', require('./router/test.router'));
app.use('/auth', require('./router/authrouter'));
app.use('/user',require('./router/userrouter'));
app.use('/resturant',require('./router/resturantrouter'));
app.use('/category',require('./router/categoryrouter'));
app.use('/food',require('./router/foodrouter'));
app.use('/order',require('./router/orderrouter'));

app.get('/', (req, res) => {
  return res.status(200).send('<h1>Welcome to food server</h1>');
});

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.white.bgMagenta);
});
