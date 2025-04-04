
 

import customersModel from "../models/Costumers.js"
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import nodemailer from "nodemailer"
import crypto from "crypto"


import {config} from "../config.js"

const registerCustomersController = {};
registerCustomersController.register = async (req, res) => {
    const{name, 
        lastName, 
        birthday, 
        email, 
        password, 
        telephone, 
        dui, 
        isVerified
    } = req.body;
    try{

        const existCustumer = await customersModel.findOne({email})
        if(existCustumer){
            return  res.json({message: "Custumer already exist"})
        }
        //encriptar contraseña
        const passwordHash = await bcryptjs.hash(password, 10)
        //guardar todo
        const newCustumer = new customersModel ({name,
             lastName, 
             birthday, 
             email, 
             password:passwordHash, 
             telephone, 
             dui:dui || null, 
             isVerified:isVerified || false});
        await newCustumer.save()
        

        //codigo de verificacion
        const verificationCode = crypto.randomBytes(3).toString("hex")
        const expiresAt = Date.now() + 2 * 60 * 60 * 1000;

        //token
        const tokenCode = jsonwebtoken.sign(
            //que voy a guardAR?
            {email, verificationCode, expiresAt},
            //secret word
            config.JWT.secret,
            //cuando expira
            {expiresIn: config.JWT.expiresIn},
            //arrow function
            (error,token) => {
                if (error) console.log("error"+ error)

                    res.cookie("verificacioToken", token, {maxAge: 2 * 60 * 60 * 1000})
                    res.json({message: "cliente guardado"})
            }
                
        )

        
        const transporter =  nodemailer.createTransport({
            service: "gmail",
            auth:{
                user:config.email.user,
                pass:config.email.pass
            }

        })
        const mailOptions ={
            from: config.email.user,
            to: email,
            subject: "Verificacion de correo",
            text:`para verificar que eres dueño de esta cuenta utiliza este codigo ${verificationCode}\n Este codigo expira en dos horas` 
        }

        transporter.sendMail(mailOptions, (error, info)=>{
          if(error) console.log ("error al enviar"+error)
          res.json({message: "Email sent"})
        })

        res.json({ message : "New custumer registered, check your email"});

    } catch (error) {
        
        res.json({message:"error aqui" + error})
    }
};

 registerCustomersController.verifyCodeEmail = async (req, res)=>{
    const {verificationCode} = req.body;
    const token = req.cookies.verificacioToken;

    if(!token){
        return res.json({message: "Please register your account first"})
    }
    try {
        const decoded = jsonwebtoken.verify(token, config.JWT.secret);
        const {email, verificationCode, storeCode}= decoded;
         if (verificationCode !== storeCode) {
            return res.json ({message: "Invalid verification code"})
         }
         const client = await customersModel.findOne({email})
         if (!client) {
            return res.json ({message: "Client not found"})
         }

         client.isVerified = true,
         await client.save

         res.clearCookie ("verificationToken")
         res.json({message:"Email verified sucesfuly"})

    } catch (error) {
        res.json({message: "error"+error})
    }
 }
export default registerCustomersController;