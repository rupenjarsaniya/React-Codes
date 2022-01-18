import React from "react";
import { Link } from "react-router-dom";

const changeclass = () => {
  let menubar = document.getElementById("menubar");
  let menus = menubar.getElementsByClassName("menu");
  for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener("click", (e) => {
      let current = document.getElementsByClassName("active");
      current[0].classList.remove("active");
      e.target.className += " active";
    });
  }
};

const Menubar = () => {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="company">
                <h2>The Company</h2>
              </div>
            </div>
            <div className="col-md-9">
              <ul id="menubar">
                <li>
                  <Link to="/" className="menu active" onClick={changeclass}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/search" className="menu" onClick={changeclass}>
                    Search
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="menu" onClick={changeclass}>
                    Porfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="menu" onClick={changeclass}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="menu" onClick={changeclass}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/buy" className="menu" onClick={changeclass}>
                    Buy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Menubar;
