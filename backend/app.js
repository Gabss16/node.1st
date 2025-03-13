import express from "express";
import productsRoutes from "./src/routes/products.js"
import costumersRoutes from "./src/routes/costumers.js"
import employeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"
const app = express();


app.use(express.json());


//Empieza CRUD
//1.definir rutas de funciones
app.use("/api/products", productsRoutes)
app.use("/api/costumers", costumersRoutes)
app.use("/api/employees", employeesRoutes)
app.use("/api/branches", branchesRoutes)




//antes de crud
export default app;

