import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
        className="header__logo"
      />
      <div className="header__search">
        <input type="text" className="header__search-input" />
        <SearchIcon className="header__search-icon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option-line-one">Hello Guest</span>
          <span className="header__option-line-two">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__option-line-one">Returns</span>
          <span className="header__option-line-two">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__option-line-one">Your</span>
          <span className="header__option-line-two">Prime</span>
        </div>
        <div className="header__option-basket">
          <ShoppingBasketIcon />
          <span class="header__option-line-two header__basket-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
