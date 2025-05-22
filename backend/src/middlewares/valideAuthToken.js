import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js"

export const validateAuthToken =(allowedUserTypes =[])=>{
    return(req, res, next) =>{
        try {
            //1- 
            const {authToken} = req.cookies;

            if(!authToken){
                res.json({message:"No auth token found"})

            }

            const decoded = jsonwebtoken.verify(authToken, config.JWT.secret)

            if (!allowedUserTypes.includes(decoded.userType)){
                return res.json({message: "Access denied"})
            }
            next()
        } catch (error) {
            console.log("error" +error)
        }
    }
}