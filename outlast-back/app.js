import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// ClbjVusMSvxQueJ5

dotenv.config();

import monahRouter from "./routes/monahRouter.js";
import circusRouter from "./routes/circusRouter.js";
import pikaRouter from "./routes/pikaRoutes.js";
import povorotRouter from "./routes/povorotRoutes.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/monah", monahRouter);
app.use("/api/pika", pikaRouter);
app.use("/api/povorot", povorotRouter);
app.use("/api/circus", circusRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
