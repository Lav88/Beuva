const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
    title: { type: String, unique: true, required: true},
    category: { type: Schema.Types.ObjectId, ref: "Category" }
});

module.exports = mongoose.model("Subcategory", subCategorySchema);