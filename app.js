import express from "express"
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import pool from "./db.js";

const app = express()



//Middlewares

app.use(express.json());  
app.use(cors());

// API's Routes
app.use("/api", userRoutes);
app.use("/api", productRoutes);



app.listen(5000, () => {
  console.log("server is running on port 5000")
})

// get, post, patch and delete are the methods of express.js