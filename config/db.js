const mongoose = require('mongoose');

// const Riddle = require('../model/riddle');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection has been established");
    // Create the question and save it to the database (only once) to populate the database if it is empty 

    // const riddle = new Riddle({
    //   No: 1,
    //   Question: "What is the capital of India?",
    //   Answer: "New Delhi",
    //   Category: "Geography",
    // });
    // await riddle.save();
    // console.log("Question saved to the database");


  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
