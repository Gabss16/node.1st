import express from "express";
import productsRoutes from "./src/routes/products.js"
import costumersRoutes from "./src/routes/costumers.js"
import employeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"
import reviewsRoutes from "./src/routes/reviews.js"
import registerEmployeesRoutes from "./src/routes/registerEmployees.js"
import cookieParser from "cookie-parser";
const app = express();


app.use(express.json());
app.use(cookieParser());


//Empieza CRUD
//1.definir rutas de funciones
app.use("/api/products", productsRoutes)
app.use("/api/costumers", costumersRoutes)
app.use("/api/employees", employeesRoutes)
app.use("/api/branches", branchesRoutes)
app.use("/api/reviews", reviewsRoutes)
app.use("/api/registerEmployees", registerEmployeesRoutes)




//antes de crud
export default app;

