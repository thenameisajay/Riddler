const mongoose = require("mongoose");

//Defining the schema for the riddles
const riddleSchema = new mongoose.Schema({
  No: Number,
  Question: String,
  Answer: String,
  Category: String,
});

// Creating the database model
const Riddle = mongoose.model("Riddle", riddleSchema);

module.exports = Riddle;
