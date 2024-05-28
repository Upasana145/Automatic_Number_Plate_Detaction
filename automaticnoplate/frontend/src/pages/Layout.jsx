import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Signin from "./Signin";
import { useDispatch, useSelector } from "react-redux";
import { projectTypeHandler } from "../redux/slices/projectSlice";
import Safty from "./Safty";

const Layout = () => {
  const auth = useSelector((state) => state.auth.value);

  // const dispatch = useDispatch();

  // const handleOptionSelect = (selectedOption) => {
  //   // setSelectedOption(selectedOption);
  //   dispatch(projectTypeHandler(selectedOption));
  // };

  // console.log(selectedOption);

  return (
    <>
      <BrowserRouter>
        {!auth ? (
          <Routes>
            <Route path="/" element={<Signin />} />
          </Routes>
        ) : (
          <>
            {/* <Header handleOptionSelect={handleOptionSelect} /> */}
            <Header />

            <Sidebar />
            <Safty />
          </>
        )}
      </BrowserRouter>
    </>
  );
};

export default Layout;
