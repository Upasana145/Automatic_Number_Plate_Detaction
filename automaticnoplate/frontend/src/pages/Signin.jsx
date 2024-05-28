import React, { useState } from "react";
// import logo from "../assets/media/logos/logo-1-dark.svg";
import logo from "../Images/logo-no-background.png";
// import logo from "../src/assets/media/logos/logo-1.svg";
// import bgimage from "../assets/media/illustrations/sketchy-1/14.png";
import backgroundImage from "../Images/yellow-polygonal-illustration-which-consist-260nw-382046221.webp";
import { postAPI } from "../utils/fetchapi";
import { useDispatch } from "react-redux";
import { loginHandler, logoutHandler } from "../redux/slices/authSlice.js";
import { toast } from "react-toastify";

function Signin() {
  const dispatch = useDispatch();
  const [vendorLogin, setVendorLogin] = useState("");
  const [vendorPassword, setVendorPassword] = useState("");
  const [isNavigating, setIsNavigating] = useState(false); // Add state for navigation

  const handleLogin = async () => {
    setIsNavigating(true);

    const payload = {
      username: vendorLogin,
      password: vendorPassword,
    };
    let data = await postAPI("auth/login", payload, null);
    if (data.status) {
      toast.success(data?.message);
      dispatch(loginHandler(data));
      setIsNavigating(false);
    } else {
      toast.error(data?.message);
      setIsNavigating(false);
    }
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <div>
      <div>
        <div style={containerStyle}>
          {/* <a href className="logo-link">
            <img className="logo-image" alt="Logo" src={logo} />
          </a> */}

          <h1 className="welcome-heading">
            AUTOMATIC LICENSE PLATE DETECTION{" "}
          </h1>

          <br></br>

          <div className="logincontent">
            <form className="login-form">
              {/* <div className="input-group"> */}
              <div className="input-group">
                <label htmlFor="">
                  <strong>Username</strong>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={vendorLogin}
                  onChange={(e) => setVendorLogin(e.target.value)}
                  className="input-field "
                  // className="form-control"
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input-field"
                  value={vendorPassword}
                  onChange={(e) => setVendorPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleLogin}
                disabled={isNavigating}
                className="submit-button"
              >
                {isNavigating ? "Logging in..." : "LOGIN"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
