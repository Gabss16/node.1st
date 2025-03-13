// Array de métodos ( C R U D)
const employeesController = {};
 

import employeesModel from "../models/Employees.js"
 
//SELECT
employeesController.getEmployees = async (req, res) => {
const employees = await employeesModel.find()
res.json(employees)
}
 
// INSERT
employeesController.createEmployees = async (req, res) => {
    const{name, lastName, birthday, email, adress, hireDate, password, telephone, dui, isssNumber, isVerified} = req.body;
    const newEmployee = new employeesModel ({name, lastName, birthday, email, adress, hireDate, password, telephone, dui, isssNumber, isVerified});
    await newEmployee.save()
    res.json({ message : "employees saved"});
}
 
    //DELETE
    employeesController.deleteEmployees = async (req, res) => {
    await employeesModel.findOneAndDelete(req.params.id)
    res.json({message:"employees deleted"})
}




 
//UPDATE
employeesController.updateEmployees = async (req, res) => {
   //  Solicito todos los valores
    const {name, lastName, birthday, email, adress, hireDate, password, telephone, dui, isssNumber, isVerified} = req.body;
 
    await employeesModel.findByIdAndUpdate(req.params.id,{
       name,
       lastName,
       birthday,
       email,
       adress,
       hireDate,
       password,
       telephone,
       dui,
       isssNumber,
       isVerified
    },{new: true}
);
// muestro un mensaje que todo se actulizó
res.json({ message: "employees uptated"});
};

export default employeesController;