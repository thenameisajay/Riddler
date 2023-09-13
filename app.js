require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const Riddle = require("./model/riddle");


app.get("/" , (req,res) => {
res.send("Hello World!");
});



const port = process.env.port || 3000;

app.listen(port,() => {
connectDB();   
console.log(`Server is running on ${port}`);
});
