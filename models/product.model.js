const mongoose = require('mongoose');

// 1. Define the schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: String,
  inStock: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true // auto adds createdAt & updatedAt
});

// 2. Create the model
const Product = mongoose.model('Product', productSchema);

// 3. Export the model
module.exports = Product;
