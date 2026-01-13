require("dotenv").config();
const express=require("express");
const cors=require("cors");
const connectDB=require("./config/db");

connectDB();
const app=express();
app.use(
  cors({
    origin: [
       "http://localhost:5173",
     "https://task-manager-frontend-nine-omega.vercel.app"
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api",require("./routes/authRoutes"));
app.use("/api/tasks",require("./routes/taskRoutes"));

app.listen(5000,()=>console.log("Server running"));
