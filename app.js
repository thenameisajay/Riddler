require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const buildPath = path.join(__dirname, "build");
const cors = require("cors");
const bodyParser = require("body-parser");



// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(buildPath))



// Importing the database connection
const connectDB = require("./config/db");

//Importing the routes
const random = require("./routes/random");
const category = require("./routes/category");





// Connecting to the database
connectDB();

// Intialising the model
const Riddle = require("./model/riddle");

// Intialising the routes
app.use("/random", random);
app.use("/category", category);


let numbers = [];

// Play By Category Route ( /categoryPlay/:category ) code written on app.js (not good practice).
app.get("/categoryplay/:category", async (req, res) => {
  const category = req?.params?.category;
  if (category) {



    let number = 0;
    const count = await Riddle?.countDocuments({ Category: category }); // Count the number of documents in the collection
    try {
      const result = await Riddle?.aggregate([
        { $match: { Category: category } },
        { $sample: { size: 1 } },
      ]);

      number = result[0].No;


      if (numbers.length === count) {
        numbers.splice(0, count - 1);
        console.log("The array has been reset");
        return res.redirect(`/CategoryPlay/${category}`);
      }

      // check if the number is in the array
      if (numbers.includes(number)) {
        console.log("This number is already in the array");
        return res.redirect(`/CategoryPlay/${category}`);
      } else {
        numbers.push(number);

        res.json(result);
      }

      console.log(numbers);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    window.location.href = "/";
  }

});

app.get("/", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});


app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {

  console.log(`Server is running on ${port}`);
});
