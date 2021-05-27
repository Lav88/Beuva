const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    subCategory: { type: Schema.Types.ObjectId, ref: "Subcategory" },
    owner: { type: Schema.Types.ObjectId, ref: "Owner" },
    title: String,
    description: String,
    photo: String,
    video: String,
    price: Number,
    stockQuantity: Number,
    rating: [Number] 
});

module.exports = mongoose.model("Product", productSchema);