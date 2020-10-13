import React from "react";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout-product">
      <img src={image} alt="" className="checkout-product__image" />

      <div className="checkout-product__info">
        <p className="checkout-product__title">{title}</p>
        <p className="checkout-product__price">
          <small>¥</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
