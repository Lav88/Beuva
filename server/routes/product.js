const router = require('express').Router();
const Product = require('../models/product'); //comes from export module name ""
const Category = require('../models/category'); //comes from export module name ""


//Middlewares
const upload = require('../middlewares/upload-photo');
const category = require('../models/category');
const subCategory = require('../models/subCategory');



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
router.get("/products", async (req, res) => { 
    try {
        let products = await Product.find()
        .populate('owner category')
        .exec(); //populate in mdb
        res.json({
            success: true,
            products: products
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//GET REQUEST - get a single product
router.get("/products/:id", async (req, res) => { //pass peram :id to get single product
    try {
        let product = await Product.findOne({ _id: req.params.id }).populate("owner category").exec();
        res.json({
            success: true,
            product: product
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//PUT REQUEST - Update a single product
router.put("/products/:id", upload.single("photo"), async (req, res) => {
    try {
        let product = await Product.findOneAndUpdate(
            { _id: req.params.id }, 
            {
            $set: {
                title: req.body.title,
                description: req.body.description,
                photo: req.file.location,
                video: req.file.location,
                price: req.body.price,
                stockQuantity: req.body.stockQuantity,
                category: req.body.categoryID,
                subCategory: req.body.subCategoryID,
                owner: req.body.ownerID
            }
        },
        { upsert: true } //if object doesnt exist  - create new object
        );

        res.json({
            success: true,
            updatedProduct: product
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//DELETE REQUEST - single product
router.delete('/products/:id', async (req, res) => {
    try {
        let deletedProduct = await Product.findOneAndDelete({ _id: req.params.id });

        if(deletedProduct){
            res.json({
                status: true,
                message: 'product has been deleted'
            });
        }

    } catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});


//Export Router
module.exports = router;