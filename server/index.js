import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpis.js";
import KPI from "./models/KPI.js";
import { kpis } from "./data/sampledata.js";

// CONFIGURATIONS //
dotenv.config();    
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

// ROUTES //
app.use("/kpi", kpiRoutes);


// MONGOOSE SETUP //
const port = process.env.PORT || 9000;
await mongoose
.connect(process.env.MONGO_URL || "")
.then(async () => {
    app.listen(port, () => console.log(`Server running at port ${port}...`));
    
    // COMMENT OUT THE NEXT TWO LINES AFTER RUN SERVER ONCE //
    await mongoose.connection.db.dropDatabase();
    KPI.insertMany(kpis);
})
.catch((error) => console.log(`${error} did not connect.`));