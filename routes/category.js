const express = require("express");
const bodyParser = require("body-parser");
const Riddle = require("../model/riddle");

const router = express.Router();

const numbers = [];

router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());

router.get("/", async (req, res) => {
  console.log("Hello");
});

module.exports = router;
