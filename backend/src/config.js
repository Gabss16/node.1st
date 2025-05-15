import dotenv from "dotenv";
dotenv.config();
export const config ={
    db: {
        URI: process.env.DB_URI || "mongodb://localhost:27017/ZonaDigital"
    },
    server: {
        port: process.env.PORT || 4000
    },
    JWT: {
        secret: process.env.JWT_SECRET ,
        expiresIn: process.env.JWT_EXPIRES 
    },
    ADMIN: {
        emailAdmin: process.env.ADMIN_EMAIL,
        passwordAdmin: process.env.ADMIN_PASSWORD

    },
    email:{
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS

    },
    cloudinary:{
        cloudinary_name: process.env.CLAUDINARY_NAME,
        cloudinary_api_key: process.env.CLAUDINARY_API_KEY,
        cloudinary_api_secret: process.env.CLAUDINARY_API_SECRET

    }
}