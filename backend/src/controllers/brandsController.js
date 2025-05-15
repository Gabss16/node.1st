import {config} from "../config.js"
import brandsModel from "../models/Brands.js"

import { v2 as cloudinary } from "cloudinary";

//configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})

const brandsController = {};
 


 
//SELECT
brandsController.getBrands = async (req, res) => {
const brands = await brandsModel.find()
res.json(brands)
}
 
// INSERT
brandsController.createBrands = async (req, res) => {
    const{ name, year, slogan } = req.body;
    let imageURL = ""

    //subir img
    if (req.file) {
        const result = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder: "public",
                allowed_formats: ["png","jpg", "jpeg"]
            }
        )
        imageURL= result.secure_url
    }


    const newBrand = new brandsModel ({name, year, slogan, img: imageURL});
    await newBrand.save()
    res.json({ message : "brands saved"});
};
 

export default brandsController;