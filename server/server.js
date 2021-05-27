//importing dependencies 
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

//Models
const User = require('./models/user');
const Product = require('./models/product');
const Owner = require('./models/owner');



dotenv.config();

const app = express();

mongoose.connect(
    process.env.DATABASE, 
    { useNewUrlParser: true, useUnifiedTopology: true  },
    err => {
        if(err){
            console.log('Server connectio error');
        } else {
            console.log('Server connected');
    }
});
//Middlewares
app.use(morgan('dev'));
//needed to parser data from frontend 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//REQUIRE API's
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const ownerRoutes = require('./routes/owner');
const subcategoryRoutes = require('./routes/subCategory');

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", ownerRoutes);
app.use("/api", subcategoryRoutes);


//PORT location 
app.listen(3000, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Server listening on port: 3000");
    }
});