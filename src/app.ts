import cors from "cors";
import express, { Application } from "express";

// application routes
import userRoutes from "./app/modules/user/user.route";

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user", userRoutes);
app.use("/api/v1/user", userRoutes);

export default app;
/* 
  *inserting test data into mongodb*
  step 1: Interface
  step 2: Schema
  step 3: Model
  step 4: database query
  */
