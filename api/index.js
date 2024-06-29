import bodyParser from "body-parser"
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import route from "./routes/userRoute.js"
import cors from "cors";
const app=express();

app.use(cors());
app.use(bodyParser.json())
dotenv.config();
const PORT =process.env.PORT || 5000;
const MONGOURL =process.env.MONGO_URL;

//connect mongo db
mongoose 
.connect(MONGOURL)
.then(()=>{
    console.log("databse connected succesfully!");
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
    });
})
.catch((error)=>console.log(error));


//use routes

app.use("/api/user",route);