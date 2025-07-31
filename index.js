const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Node API Server');
});

app.get('/api/product/:id', async (req, res) => {

  try {
    res.status(200).json(await Product.findById(req.params.id));
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



mongoose.connect("mongodb+srv://ebisaberhanu1996:u0eVtJQ0hTb4t5a6@crud.io8xdkz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CRUD")
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
