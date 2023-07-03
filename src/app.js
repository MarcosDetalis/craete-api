import express from "express";
import morgan from "morgan";
import cors from "cors";
import bibliotecaPoint from "./routes/reservas.routes.js";
import indexRoutes from "./routes/index.routes.js";
const app = express();
// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// Routes
app.use("/", indexRoutes);
app.use("/api", bibliotecaPoint);
app.use((req, res, next) => {
  res.status(404).json({ message: "No enontradop" });
});


export default app;
