// Array de métodos ( C R U D)
const costumersController = {};
 

import costumersModel from "../models/Costumers.js"
 
//SELECT
costumersController.getCostumers = async (req, res) => {
const costumers = await costumersModel.find()
res.json(costumers)
}
 
// INSERT
costumersController.createCostumers = async (req, res) => {
    const{ name, lastName, birthday, email, password, telephone, dui, isVerified } = req.body;
    const newCostumers = new costumersModel ({name, lastName, birthday, email, password, telephone, dui, isVerified});
    await newCostumers.save()
    res.json({ message : "costumer saved"});
}
 
    //DELETE
    costumersController.deleteCostumers = async (req, res) => {
    await costumersModel.findOneAndDelete(req.params.id)
    res.json({message:"costumer deleted"})
}
 
//UPDATE
costumersController.updateCostumers = async (req, res) => {
   //  Solicito todos los valores
    const {name, lastName, birthday, email, password, telephone, dui, isVerified} = req.body;
 
    await costumersModel.findByIdAndUpdate(req.params.id,{
       name,
       lastName,
       birthday,
       email,
       password,
       telephone,
       dui,
       isVerified
    },{new: true}
);
// muestro un mensaje que todo se actulizó
res.json({ message: "costumer uptated"});
};

export default costumersController;