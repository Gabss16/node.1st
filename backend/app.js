import express from "express";
import productsRoutes from "./src/routes/products.js"
const app = express();


app.use(express.json());


//Empieza CRUD
//1.definir rutas de funciones
app.use("/api/products", productsRoutes)


//antes de crud
export default app;

