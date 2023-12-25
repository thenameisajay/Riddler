const express = require("express");
const bodyParser = require("body-parser");
const Riddle = require("../model/riddle");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());

router.get("/", async (req, res) => {
  // Get the categories from the database
  try {
    const result = await Riddle?.find().distinct("Category");
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
