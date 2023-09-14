const express = require("express");

const Riddle = require("../model/riddle");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));

router.use(express.json());

const numbers = [];

router.get("/", (req, res) => {
  Riddle.aggregate([{ $sample: { size: 1 } }])
    .then((result) => {
      console.log(result);
      const number = result[0].No;
      if (numbers.includes(number)) {
        // Total number of riddles is 101 so if the array length is 101, it means that all the riddles have been displayed once , adding more riddles means you have to handle the case when the array length is 101.
        if (numbers.length === 101) {
          // Resetting the array
          numbers.splice(0, 100);
          console.log("The array has been reset");
        }
        res.redirect("/random");
        console.log("This number is already in the array");
      } else {
        numbers.push(number);
        console.log(numbers);
        res.json(result);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
