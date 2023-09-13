require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const Riddle = require("./model/riddle");


app.get("/" , (req,res) => {
res.send("Hello World!");
});

app.get("/create" , (req,res) => {
    const newRiddle = new Riddle({
        No: 1,
        Question: "What is the capital of India?",
        Answer: "New Delhi",
        Category: "Geography",
      });
      
      newRiddle.save()
        .then(() => {
          console.log("Riddle saved to database");
        })
        .catch((error) => {
          console.error("Error saving riddle:", error);
        });
        
    });

const port = process.env.port || 3000;

app.listen(port,() => {
connectDB();   
console.log(`Server is running on ${port}`);
});
