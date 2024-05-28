import React from "react";

function Header() {
  return (
    <div>
      {/* <header className="header"></header> */}
      <header className="h"></header>
    </div>
  );
}

export default Header;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useSpring, animated } from "react-spring";

// const Header = () => {
//   const [isActive, setIsActive] = useState(false);

//   const toggleMenu = () => {
//     setIsActive(!isActive);
//   };

//   const headerSpring = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     config: { duration: 1500 },
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsActive(false);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <animated.header style={headerSpring}>
//       <a href="/" className="logo">
//         <img src={require("../Images/Background Images.jpg")} alt="" />
//       </a>
//       <div
//         id="menu-icon"
//         className={`bx ${isActive ? "bx-x" : "bx-menu"}`}
//         onClick={toggleMenu}
//       ></div>
//       <ul className={`navbar ${isActive ? "active" : ""}`}>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/services">Services</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contactus">ContactUS</Link>
//         </li>
//       </ul>
//       <div className="header-btn">
//         <Link to="/signin" className="sign-in">
//           Sign-In
//         </Link>
//       </div>
//     </animated.header>
//   );
// };

// export default Header;
