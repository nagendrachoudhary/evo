import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = (props) => {
  return <div data-testid="products-container">{props.state.map((el) => {
      return <div>
        <img src={el.image} />
        <h1>{el.title}</h1>
        <h2>{el.category}</h2>
        <h2>{el.price}</h2>
      </div>
   
  })}</div>;
};

// export
export default ProductList;
