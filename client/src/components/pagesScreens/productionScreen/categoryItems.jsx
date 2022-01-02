import React from "react";
import { useParams } from "react-router-dom";
import MainContainer from "../../MainContainer";

function CategoryItems() {
  const params = useParams();
  const categoryName = params.category;
  console.log(categoryName);
  return <MainContainer>CategoryItems</MainContainer>;
}

export default CategoryItems;
