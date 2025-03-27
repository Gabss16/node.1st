
 

import employeesModel from "../models/Employees.js"
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"

import {config} from "../config.js"

const registerEmployeesController = {};
registerEmployeesController.register = async (req, res) => {
    const{name, 
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
    } = req.body;
    try{

        const existEmployee = await employeesModel.findOne({email})
        if(existEmployee){
            return  res.json({message: "Employee already exist"})
        }
        //encriptar contraseña
        const passwordHash = await bcryptjs.hash(password, 10)
        //guardar todo
        const newEmployee = new employeesModel ({name, lastName, birthday, email, adress, hireDate, password:passwordHash, telephone, dui, isssNumber, isVerified});
        await newEmployee.save()
        res.json({ message : "New employees saved"});

        //token
        jsonwebtoken.sign(
            //que voy a guardAR?
            {id: newEmployee._id},
            //secret word
            config.JWT.secret,
            //cuando expira
            {expiresIn: config.JWT.expiresIn}
            //arrow function
            (error,token => {
                if (error) console.log("error"+error)

                    res.cookie("authToken", token)
                    res.json({message: "empleado guardado"})
            })
                
        )



    } catch (error) {
        console.log ("error"+error)
        res.json({message: "Error saving employee"})
    }
}
export default registerEmployeesController;