const express = require('express');
const app = express();
const port = 3000;

// Create an Express Router instance
const router = express.Router();

// Define route handlers for /home, /about, and /contact
router.get('/home', (req, res) => {
  res.send('Hello from Express server!');
});

router.get('/about', (req, res) => {
  res.send('About page');
});

router.get('/contact', (req, res) => {
  res.send('Contact page');
});

// Register the router with the main Express app
app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
