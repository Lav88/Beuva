const router = require('express').Router();
const Subcategory = require('../models/subCategory');


//POST REQUEST
router.post('/subcategories', async(req, res) =>{
    try{
        const subcategory = new Subcategory();
        subcategory.title = req.body.title;

        await subcategory.save();

        res.json({
            success: true,
            message: 'new subcategory added'
        });

    } catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//GET REQUEST
router.get('/subcategories', async (req, res) => {
    try {
        let subcategory = await Subcategory.find();
        res.json({
            success: true.message,
            subcategory: subcategory
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});


//PUT REQUEST - Update single subcategory
router.put('/subcategories/:id', async (req, res) => {
    try {
        let subcategory = await Subcategory.findOneAndUpdate(
            { _id: req.params.id },
            {
            $set: { 
                title: req.body.title,
                category: req.body.categoryID
            }    
        },
        { upsert: true }
        );

        res.json({
            success: true,
            subcategory: subcategory
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//DELETE REQUEST
router.delete('/subcategories/:id', async (req, res) => {
    try {
        let deletedSubcategory = await Subcategory.findOneAndDelete({ _id: req.params.id });

        if(deletedSubcategory){
            res.json({
                status: true,
                message: 'Subcategory successfully deleted'
            });
        }

    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
});

module.exports = router;