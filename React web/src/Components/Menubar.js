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

const menu = () => {
  const humburger = document.querySelector(".humburger");
  const hamburger_menu = document.querySelector(".hamburger-menu");
  const menu = document.querySelectorAll(".menu");
  humburger.addEventListener("click", () => {
    hamburger_menu.classList.toggle("active");
  });
  for (let i = 0; i < menu.length; i++) { 
    menu[i].addEventListener("click", () => {
      setTimeout(() => 
      hamburger_menu.classList.remove("active"), 500);
    });
  }
}

const Menubar = () => {
  return (
    <>
      <header id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="logo">
                <h2>The Company</h2>
              </div>
            </div>
            <div className="col-4" id="menubar-lg">
              <ul id="menubar">
                <li>
                  <Link to="/" className="menu active" onClick={changeclass}>
                    Home
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
                  <Link to="/buy" className="menu" onClick={changeclass}>
                    Buy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4" id="menubar-sm">
              <div className="hamburger-menu">
                <div className="humburger" onClick={menu}>
                  <div className="bars">
                    <div className="bar"></div>
                  </div>
                </div>
                <div className="list">
                  <ul id="humburger-menubar">
                    <li><Link to="/" className="menu active" onClick={changeclass}>Home</Link></li>
                    <li><Link to="/portfolio" className="menu" onClick={changeclass}>Porfolio</Link></li>
                    <li><Link to="/contact" className="menu" onClick={changeclass}>Contact</Link></li>
                    <li><Link to="/buy" className="menu" onClick={changeclass}>Buy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Menubar;
