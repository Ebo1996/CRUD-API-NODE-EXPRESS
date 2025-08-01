const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRoute);

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Node API Server');
});

// Connect to MongoDB and start the server
mongoose.connect("mongodb+srv://ebisaberhanu1996:WX4kT1omkWpBil06@crud.io8xdkz.mongodb.net/Node-API?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
