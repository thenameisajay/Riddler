require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Importing the routes
const random = require("./routes/random");
const category = require("./routes/category");

// Importing the database connection
const connectDB = require("./config/db");

// Intialising the routes
app.use("/random", random);
app.use("/category", category);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.port || 3000;

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on ${port}`);
});
