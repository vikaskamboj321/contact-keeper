const express = require('express');
const router = express.Router();
const fileUpload = require("express-fileupload");


router.use(fileUpload());
router.post('/', async (req, res) => {  
    try {
        const file = await req.files.myfile;
        await file.mv(`${__dirname}/../client/public/upload/${file.name}`);
        res.send('File uploaded!');
    } catch (error) {
        res.status(500).json({"error": error});
    }
})

module.exports = router;