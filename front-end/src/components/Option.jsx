import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Option() {
  return (
    <Fragment>
      <div
        className="card w-75 mb-3 custom-card"
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div className="logo-container">
          <img src="/images/riddler-logo-removebg.png" alt="riddler-logo" />
        </div>
        <Link
          to={{
            pathname: "/random_play"
          }}
          className="no-underline"
        >
          <button
            className="button-47"
            type="submit"
            style={{ marginLeft: "50px" }}
          >
            Random
          </button>
        </Link>
        <Link to="/categories" className="no-underline">
          <button
            className="button-47"
            type="submit"
            style={{ marginLeft: "50px" }}
          >
            Category
          </button>
        </Link>
        <Link to="/" className="no-underline">
          <button
            className="button-47"
            type="submit"
            style={{ marginLeft: "50px" }}
          >
            Back
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Option;
