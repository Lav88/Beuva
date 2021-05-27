const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    title: { type: String, unique: true, required: true }
});

module.exports = mongoose.model("Category", categorySchema);