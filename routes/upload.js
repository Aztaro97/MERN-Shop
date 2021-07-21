const router = require('express').Router()
const cloudinary = require('cloudinary')
// const auth = require('../middleware/auth')
// const authAdmin = require('../middleware/authAdmin')
const fs = require('fs')
const { protect, admin } = require('../middleware/authMiddleware');



// we will upload image on cloudinary
cloudinary.config({
    cloud_name: "tarositeweb",
    api_key: "474848126984384",
    api_secret: "BWFY6C_AE8a2zI0YHfcVC8wsrjM"
})

// Upload image only admin can use
router.post('/', protect,  (req, res) =>{
    // console.log(req.files)
    try {

        const files = req.files.imgfiles;
        console.log(files)

        if(files.length === 0)
            return res.status(400).json({msg: 'No files were uploaded.'})
        
        

        files.forEach(file => {

            if(file.size > 1024*1024) {
                removeTmp(file.tempFilePath)
                return res.status(400).json({msg: "Size too large"})
            }
    
            if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
                removeTmp(file.tempFilePath)
                return res.status(400).json({msg: "File format is incorrect."})
            }


            cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "test"}, async(err, result)=>{
                if(err) throw err;
    
                removeTmp(file.tempFilePath)
    
                res.json({public_id: result.public_id, url: result.secure_url})
            })



        })


        

        


    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

// Delete image only admin can use
router.post('/destroy', protect, (req, res) =>{
    try {
        const {public_id} = req.body;
        if(!public_id) return res.status(400).json({msg: 'No images Selected'})

        cloudinary.v2.uploader.destroy(public_id, async(err, result) =>{
            if(err) throw err;

            res.json({msg: "Deleted Image"})
        })

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
    
})


const removeTmp = (path) =>{
    fs.unlink(path, err=>{
        if(err) throw err;
    })
}

module.exports = router