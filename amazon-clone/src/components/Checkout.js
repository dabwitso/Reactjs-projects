import React from "react";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src={require("../assets/ad2.png")}
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/* basketItem */}
          {/* basketItem */}
          {/* basketItem */}
          {/* basketItem */}
          {/* basketItem */}
        </div>
      </div>
      <div className="checkout__right">
          <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
