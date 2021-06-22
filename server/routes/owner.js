const router = require("express").Router();
const Owner = require("../models/owner");

//MIDDLEWARES
const upload = require('../middlewares/upload-photo');

//POST REQUEST
router.post("/owners", upload.single("photo"), async (req, res) => {
    try {
        let owner = new Owner();
        owner.name = req.body.name;
        owner.about = req.body.about;
        owner.photo = req.file.location;

        await owner.save();

        res.json({
            status: true,
            message: "Successfully saved brand owner details"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }

});

//GET REQUEST
router.get("/owners", async (req, res) => {
    try {
        let owners = await Owner.find();
        res.json({
            success: true.message,
            owners: owners
        });
    } catch (err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//GET REQUEST -Single owner
router.get("/owners/:id", async (req, res) => {
    try {
        let owner = await Owner.findOne({ _id: req.params.id });

        res.json({
            success: true,
            owner: owner
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//PUT REQUEST - Update single Owner
router.put("/owners/:id", async (req, res) => {
    try {
        let owner = await Owner.findOneAndUpdate({ _id: req.params.id },
            {
                $set: {
                    name: req.body.name,
                    about: req.body.about,
                    photo: req.body.photo
                }
            },
            { upsert: true }
        );
        res.json({
            success: true,
            message: 'Successfully updated owner details'
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//DELETE REQUEST - SINGLE owner
router.delete("/owners/:id", async (req, res) => {
    try {
        let deletedOwner = await Owner.findOneAndDelete({ _id: req.params.id });

        if(deletedOwner){
            res.jason({
                status: true,
                message: 'Owner successfully deleted'
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
