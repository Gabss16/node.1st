import {config} from "../config.js"
import providersModel from "../models/Providers.js"

import { v2 as cloudinary } from "cloudinary";

//configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})

const providersController = {};
 


 
//SELECT
providersController.getProviders = async (req, res) => {
const providers = await providersModel.find()
res.json(providers)
}
 
// INSERT
providersController.createProviders = async (req, res) => {
    const{ name, cellphone } = req.body;
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


    const newProviders = new providersModel ({name, cellphone, img: imageURL});
    await newProviders.save()
    res.json({ message : "Provider saved"});
};
 

export default providersController;