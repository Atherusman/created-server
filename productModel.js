const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productname: {
    type: String,
    required: [true, "Product name is requird"],
  },
  price: {
    type: String,
    required: [true, "price is requird"],
  },
  rateing: {
    type: String,
    required: [true, "Rating is required"],
  },
});

module.exports = mongoose.model("ProductSchema", productSchema);
