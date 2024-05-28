import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const menu = document.getElementById("menu-icon");
    const navbar = document.getElementsByClassName("navbar")[0];

    const handleScroll = () => {
      menu.classList.remove("bx-x");
      navbar.classList.remove("active");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once after mount

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });

    sr.reveal(".text", { delay: 200, origin: "top" });
    // Add more reveal calls for other elements if needed

    return () => {
      // Clean up ScrollReveal instance if needed
    };
  }, []); // Empty dependency array ensures this effect runs only once after mount

  return (
    <header>
      <a href="/" className="logo">
        <img src={require("../img/jeep.png")} alt="" />
      </a>
      <div
        id="menu-icon"
        className={`bx ${isActive ? "bx-x" : "bx-menu"}`}
        onClick={toggleMenu}
      ></div>
      <ul className={`navbar ${isActive ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contactus">ContactUS</Link>
        </li>
      </ul>
      <div className="header-btn">
        <Link to="/signin" className="sign-in">
          Sign-In
        </Link>
      </div>
    </header>
  );
};

export default Header;
