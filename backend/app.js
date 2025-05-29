import express from "express";
import productsRoutes from "./src/routes/products.js"
import costumersRoutes from "./src/routes/costumers.js"
import employeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"
import reviewsRoutes from "./src/routes/reviews.js"
import registerEmployeesRoutes from "./src/routes/registerEmployees.js"
import loginRoutes from "./src/routes/login.js"
import logoutRoutes from "./src/routes/logout.js"
import registerCustomers from "./src/routes/registerCostumers.js"
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js"
import cookieParser from "cookie-parser";
import providersRoutes from "./src/routes/providers.js"
import brandsRoutes from "./src/routes/brands.js"
import {validateAuthToken} from "./src/middlewares/valideAuthToken.js"
import cors from "cors";

const app = express();

app.use(
    cors({
      origin: "https://node-1st-ochre.vercel.app", // Dominio del cliente
      credentials: true, // Permitir envío de cookies y credenciales
    })
  );



app.use(express.json());
app.use(cookieParser());


//Empieza CRUD
//1.definir rutas de funciones
app.use("/api/products" , productsRoutes);
app.use("/api/costumers", costumersRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/reviews", reviewsRoutes);

app.use("/api/registerEmployees", registerEmployeesRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);

app.use("/api/registerCustomers", registerCustomers)
app.use("/api/recoveryPassword", recoveryPasswordRoutes)

app.use("/api/providers", providersRoutes)
app.use("/api/brands", brandsRoutes)






//antes de crud
export default app;

