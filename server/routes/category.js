const router = require("express").Router();
const Category = require("../models/category"); //comes from export module name

//POST REQEST - Create new category
router.post("/categories", async (req, res) => {
    try {
        const category = new Category();
        category.title = req.body.title;

        await category.save();

        res.json({
            success: true,
            message: "Successfully created a new category"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//GET REQUEST
router.get("/categories", async (req, res) => {
    try {
        let categories = await Category.find();
        res.json({
            success: true.message,
            categories: categories
        });
    } catch (err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//PUT REQUEST
router.put('/categories')

//DELETE REQUEST
router.delete('/categories/:id', async (req, res) => {
    try{
        let deletedCategory = await Category.findOneAndDelete({ _id: req.params.id });

        if(deletedCategory){
            res.json({
                status: true,
                message: 'Successfully deleted a category'
            });
        }

    }catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
});

module.exports = router;