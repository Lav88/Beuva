const router = require('express').Router();
const Product = require('../models/product'); //comes from export module name ""


//Middlewares
const upload = require('../middlewares/upload-photo');



//POST REQUEST - create a new product
router.post('/products', upload.single("photo"), async (req, res) => { //api landing page /products
    try {
        let product = new Product(); //product here is the models Product Object
        product.title = req.body.title;
        product.description = req.body.description;
        product.photo = req.file.location;
        product.video = req.body.video;
        product.price = req.body.price;
        product.stockQuantity = req.body.stockQuantity;

        await product.save();

        res.json({
            status: true,
            message: "Successfully saved product"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});


//GET REQUEST - get all products
router.get("/products")

//GET REQUEST - get a single product

//PUT REQUEST - Update a single product

//DELETE REQUEST


//Export Router
module.exports = router;