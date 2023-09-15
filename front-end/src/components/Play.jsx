import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

function Play(props) {
  const [answer, SetAnswer] = useState("");
  const [question, SetQuestion] = useState("");
  const [category, SetCategory] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  // Access the selectedCategory prop from props

  const selectedCategory = props.category;

  const fetchData = () => {
    setShowAnswer(false);
    const endpoint = `${API_URL}/categoryPlay/${selectedCategory}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        const firstItem = data[0];
        if (firstItem) {
          // Update the state values
          SetCategory(firstItem.Category);
          SetQuestion(firstItem.Question);
          SetAnswer(firstItem.Answer);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <div
        className="card w-75 mb-3 custom-card"
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          height: " 700px",
          width: "400px"
        }}
      >
        <div className="card w-75 mb-3 custom-card-2">
          <p className="category">Category: {category}</p>
          <br />
          <p>{question}</p> <br />
          {showAnswer && <p>{answer}</p>}
        </div>
        <button
          className="button-47"
          type="button"
          style={{ marginLeft: "20px", fontSize: "1.5rem" }}
          onClick={toggleAnswer}
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
        <button
          className="button-47"
          type="button"
          style={{ marginLeft: "20px" }}
          onClick={fetchData}
        >
          Next
        </button>
        <Link to="/options" className="no-underline">
          <button
            className="button-47"
            type="submit"
            style={{ marginLeft: "50px" }}
          >
            Back
          </button>
        </Link>
        <Link to="/" className="no-underline">
          <button
            className="button-47"
            type="submit"
            style={{ marginLeft: "50px" }}
          >
            Home
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Play;
