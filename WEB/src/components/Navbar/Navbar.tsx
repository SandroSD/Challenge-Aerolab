import React, { useContext } from "react";

import brand from "../../assets/brand.png";
import shopping from "../../assets/shopping.png";

import "./Navbar.scss";

import { AppContext } from "../../store/app-context";

const Navbar = () => {
  const appCtx = useContext(AppContext);

  return (
    <header className="header">
      <nav className="navbar">
        <span className="left">
          <img src={brand} alt="brand" />
          <span className="brandName">
            <strong>Ez </strong>shop
          </span>
        </span>
        <span className="right">
          <span>
            <strong>
              $
              {Number(appCtx.total).toLocaleString("de-DE", {
                minimumFractionDigits: 2,
              })}
            </strong>
            <img src={shopping} alt="brand" />
          </span>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
