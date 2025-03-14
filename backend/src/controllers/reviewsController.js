// Array de métodos ( C R U D)
const reviewsController = {};
 
//import Products from "../models/Products.js";
import reviewsModel from "../models/Reviews.js"
 
//SELECT
reviewsController.getReview = async (req, res) => {
const reviews = await reviewsModel.find().populate('idCostumers')
res.json(reviews)
}
 
// INSERT
reviewsController.createReview = async (req, res) => {
    const{ comments, rating, idCostumers } = req.body;
    const newProduct = new reviewsModel ({comments, rating, idCostumers});
    await newProduct.save()
    res.json({ message : "reviews saved"});
}
 
    //DELETE
    reviewsController.deleteReview = async (req, res) => {
    await reviewsModel.findOneAndDelete(req.params.id)
    res.json({message:"reviews deleted"})
}
 
//UPDATE
reviewsController.updateReview = async (req, res) => {
   //  Solicito todos los valores
    const {comments, rating, idCostumers} = req.body;
 
    await reviewsModel.findByIdAndUpdate(req.params.id,{
        comments,
        rating,
        idCostumers,
    },{new: true}
);
// muestro un mensaje que todo se actulizó
res.json({ message: "reviews uptated"});
};

export default reviewsController;