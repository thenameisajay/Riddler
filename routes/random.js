const express = require("express");
const bodyParser = require("body-parser");
const Riddle = require("../model/riddle");

const router = express.Router();
const MAX_RIDDLES = 101;
const numbers = [];

router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const result = await Riddle.aggregate([{ $sample: { size: 1 } }]);
    const number = result[0].No;

    if (numbers.length === MAX_RIDDLES) {
      numbers.splice(0, MAX_RIDDLES - 1);
      console.log("The array has been reset");
      return res.redirect("/random");
    }

    if (numbers.includes(number)) {
      console.log("This number is already in the array");
      return res.redirect("/random");
    }

    numbers.push(number);
    console.log(numbers);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
