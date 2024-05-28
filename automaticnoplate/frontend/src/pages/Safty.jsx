import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

import Calibration from "./Calibration";
import Prac from "./Prac";
import Header from "../components/Header";
import Sidebar from "../components/Mainsidebar";
// import AddDept from "./AddDept";

import EditDept from "./EditEmployee";
import ImageContainernorecordfound from "./ImageContainernorecordfound";

import Generate from "../components/Generate";
import Employee from "./Employee";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import Setting from "./Setting";

function Safty() {
  return (
    <>
      <Sidebar />
      {/* <Header /> */}
      {/* <Mainpage /> */}
      <div className="master">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>

          <Route path="/calibration" element={<Calibration />}></Route>
          <Route path="/prac" element={<Prac />}></Route>
          <Route path="/Header" element={<Header />}></Route>
          {/* <Route path="/addDept" element={<AddDept />} /> */}
          <Route path="/editemployee" element={<EditEmployee />} />

          <Route path="/generate" element={<Generate />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/setting" element={<Setting />} />
          <Route
            path="/norecordfound"
            element={<ImageContainernorecordfound />}
          />
        </Routes>
      </div>
    </>
  );
}

export default Safty;
