const express =require("express");
const app =express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require( "./routes/auth");
const userRoute = require( "./routes/users");
 
dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("connnected to MONGO DB"))
.catch((err)=>console.log(err));

app.listen("3000",()=>{
    console.log("Back end is running");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);