import employeesModel from "../models/Employees.js"
import customersModel from "../models/Costumers.js"
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import {config} from "../config.js"

const loginController = {};
loginController.login = async (req, res) => {



const{email, password} = req.body;
try{

    //valodamor los 3 posibles niveles
    let userFound;
    let userType;

    //1.admin

    if(email === config.ADMIN.emailAdmin && password === config.ADMIN.passwordAdmin){
        userType = "admin";
        userFound = {_id: "admin"};
    }else{
        //empleados

        userFound = await employeesModel.findOne({email});
        userType = "employee"

        if(!userFound){
            //costumer
             userFound = await customersModel.findOne({email});
             userType = "customer"
        }
    }

    if(!userFound){
         return res.json({message: "User not found"});
    }

    //validar contraseña

    if(userType !== "admin"){
        const isMatch = await bcryptjs.compare(password, userFound.password)
        if(! isMatch){
             return res.json({message: "invalid password"});
        }
    }

    //TOKEN

    jsonwebtoken.sign(
        //que voy a guardAR?
        {id: userFound._id, userType},
        //secret word
        config.JWT.secret,
        //cuando expira
        {expiresIn: config.JWT.expiresIn},
        //arrow function
        (error,token) => {
            if (error) console.log("error"+ error)

                res.cookie("authToken", token)
                res.json({message: "login successful"})
        })
    




}catch(error){

    console.log("error" + error)

}
}

export default loginController;