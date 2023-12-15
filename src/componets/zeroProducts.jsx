import React from "react";
import { ImSad } from "react-icons/im";
import "../styles/ZeroProducts.css"
function zeroProducts() {
  return (
    <div id="zero-product-container">
      <h4>There is no product in your cart!</h4>
      <ImSad id="sad-icon" />
    </div>
  );
}

export default zeroProducts;
