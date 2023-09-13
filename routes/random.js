const express = require("express");
const mongoose = require("mongoose");
const Riddle = require("../model/riddle");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));

const app = express();
router.use(express.json());

const numbers = [];

router.get("/", (req, res) => {
  Riddle.aggregate([{ $sample: { size: 1 } }])
    .then((result) => {
      console.log(result);
      const number = result[0].No;
      if (numbers.includes(number)) {
        if (numbers.length === 101) {
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
