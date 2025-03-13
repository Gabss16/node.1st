const branchesController = {};
 

import branchesModel from "../models/Branches.js"
 
//SELECT
branchesController.getBranches = async (req, res) => {
const branches = await branchesModel.find()
res.json(branches)
}
 
// INSERT
branchesController.createBranches = async (req, res) => {
    const{ name, adress, telephone, schedule } = req.body;
    const newCostumers = new branchesModel ({name, adress, telephone, schedule});
    await newCostumers.save()
    res.json({ message : "branches saved"});
}
 
    //DELETE
    branchesController.deleteBranches = async (req, res) => {
    await branchesModel.findOneAndDelete(req.params.id)
    res.json({message:"branches deleted"})
}
 
//UPDATE
branchesController.updateBranches = async (req, res) => {
   //  Solicito todos los valores
    const {name, adress, telephone, schedule} = req.body;
 
    await branchesModel.findByIdAndUpdate(req.params.id,{
       name,
       adress,
       telephone,
       schedule
    },{new: true}
);
// muestro un mensaje que todo se actulizó
res.json({ message: "branches uptated"});
};

export default branchesController;