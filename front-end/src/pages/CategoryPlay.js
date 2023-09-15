import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Play from "../components/Play";

function CategoryPlay() {
  const location = useLocation();
  const data = location.state;
  const category = data.categoryName;
  console.log(category);

  return (
    <Fragment>
      <Play category={category} />
    </Fragment>
  );
}

export default CategoryPlay;
