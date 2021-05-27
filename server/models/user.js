const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: { type: String, unique: true, required: true},
    password: { type: String, required: true},
    address: { type: Schema.Types.ObjectId, ref: "Address" }
});

//Exports so that it can be used in another file
module.exports = mongoose.model("User", UserSchema);

