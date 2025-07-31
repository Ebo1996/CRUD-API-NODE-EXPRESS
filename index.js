const express = require('express');
const mongoose = require('mongoose');
const Product
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Node API Server');
});
app.post('/api/products', (req, res) => { res.send(req.body) });


mongoose.connect("mongodb+srv://ebisaberhanu1996:u0eVtJQ0hTb4t5a6@crud.io8xdkz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CRUD")
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
