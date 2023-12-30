import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <div className="card w-75 mb-3 custom-card">
        <div className="logo-container">
          <img src="/images/riddler-logo-removebg.png" alt="riddler-logo" />
        </div>
        <h1>Riddler</h1>
        <Link to="/options" className="no-underline">
          <button className="button-47" type="button">
            START
          </button>
        </Link>
      </div>
      <h2>
        <span>
          Crafted with{" "}
          <span role="img" aria-label="heart">
            💜
          </span>{" "}
          by{" "}
          <a href="https://github.com/thenameisajay">
            {" "}
            thenameisajay{" "}
          </a>
        </span>
      </h2>
    </Fragment>
  );
}

export default Home;
