import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

function Category() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `${API_URL}/category`;
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  // Function to set the selected category
  const handleCategoryClick = (categoryName) => {
    console.log("Category name", categoryName);
    navigate("/category_play", { state: { categoryName } });
  };

  console.log("Data", data);

  return (
    <Fragment>
      <div className="card w-75 mb-3 custom-card" style={{ height: "auto" }}>
        <div className="logo-container">
          <img
            src="/images/riddler-logo-removebg.png"
            alt="riddler-logo"
            style={{ position: "relative" }}
          />
        </div>

        {data.map((item, index) => (
          <button
            onClick={() => handleCategoryClick(item)}
            className="button-47"
            key={index}
          >
            {item}
          </button>
        ))}

        <Link
          to="/options"
          className="no-underline"
          style={{ marginLeft: "30px" }}
        >
          <button className="button-47" type="button">
            Back
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Category;
