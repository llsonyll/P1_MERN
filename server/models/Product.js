const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  brand: {
    type: String,
    // enum: ['UIUSTOOLS', 'CPP', 'SANDFLEX']
  },
  tag: {
    type: [String],
  },
  quantity: {
    type: Number,
  },
  unit: {
    type: String,
  },
  buyPrice: {
    type: Number,
  },
  sellPrice: {
    type: Number,
  },
  img: {
    type: String,
  },
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // }
});

module.exports = mongoose.model("Product", ProductSchema);
