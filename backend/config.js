import dotenv from "dotenv";
dotenv.config();
export const config ={
    db: {
        URI: process.env.DB_URI ||"mongodb://localhost:27017/ZonaDigital"
    },
    server: {
        port: process.env.PORT || 4000
    }
}