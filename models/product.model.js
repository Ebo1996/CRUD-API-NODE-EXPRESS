const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'product quantity is required'],
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0.0,
  },
  image: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product; 




