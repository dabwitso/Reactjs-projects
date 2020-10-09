import React from 'react'
import '../styles/Product.css';

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>11.96</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>
            <img src={require("../assets/lean_startup.jpg")} alt="" className="product__image" />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product;
