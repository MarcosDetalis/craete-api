import express from "express";
import morgan from "morgan";
import cors from "cors";
import bibliotecaPoint from "./routes/reservas.routes.js";
import indexRoutes from "./routes/index.routes.js";
import solicitudPoint from "./routes/solicitudes.routes.js"
import usuariosPoint from "./routes/usuarios.routes.js"
import carreraPoint from "./routes/carrera.routes.js"
import autorPoint from "./routes/autor.routes.js" // se importa autor
import loginPoint from "./routes/login.routes.js"
const app = express();
// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// Routes
app.use("/", indexRoutes);
app.use("/api", bibliotecaPoint);
app.use("/soli", solicitudPoint);
app.use("/usu",usuariosPoint);
app.use("/car",carreraPoint);
app.use("/aut",autorPoint);
app.use("/login", loginPoint);
// agregar el router de autor
app.use((req, res, next) => {
  res.status(404).json({ message: "No enontrado" });
});


export default app;
