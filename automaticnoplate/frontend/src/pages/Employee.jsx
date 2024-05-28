import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import UserData from "../components/UserData";
import { getAPI, postAPI } from "../utils/fetchapi";
import DeptData from "../components/DeptData";
// const API = "https://dummyjson.com/products/1";``
const API = "http://10.12.1.151:4002/api/v1/master/dept";

const Employee = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const data = await getAPI(`master/emp`, null);
      // console.log(data, "helllllllllllllllllllllllllllllllllllll");
      if (data.status) {
        setUsers(data?.data);
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try Again!");
    }
  };
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    // Get the selected file
    const selectedFile = event.target.files[0];
    // Update state with the selected file
    setFile(selectedFile);
  };

  const handleSendClick = () => {
    if (file) {
      // You can implement sending logic here, such as uploading the file to a server
      console.log("Sending:", file);
      // Clear file state after sending
      setFile(null);
    } else {
      // Handle case when no file is selected
      console.log("Please select a file to send.");
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="main tablecontent mb-5 ">
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
        />
        <button onClick={handleSendClick}>Send</button>
        <div>
          <div className="table_header">
            <div className="table_header_left">
              <p className="department-heading">All Employee</p>
            </div>
          </div>
          <div
            className="Top-table "
            style={{
              width: "1010px",
              // border: "2px solid black",
              overflowX: "auto", // Enable horizontal scrolling
              overflowY: "auto",
              height: "460px",
            }}
          >
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="emp-label"
                    style={{ color: " #f9cb13" }}
                  >
                    NGS
                  </th>
                  <th
                    scope="col"
                    className="emp-label"
                    style={{ color: " #f9cb13" }}
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="emp-label"
                    style={{ color: " #f9cb13" }}
                  >
                    Birthday
                  </th>
                  <th
                    scope="col"
                    className="emp-label"
                    style={{ color: " #f9cb13" }}
                  >
                    Anniversary
                  </th>
                  <th
                    scope="col"
                    className="emp-label"
                    style={{ color: " #f9cb13" }}
                  >
                    Employee_email
                  </th>
                  <th
                    scope="col"
                    className="emp-label"
                    style={{ color: " #f9cb13" }}
                  >
                    Senior_email
                  </th>
                  <th
                    scope="col"
                    className="emp-label"
                    style={{ color: " #f9cb13" }}
                  >
                    Hr_email
                  </th>
                  <th
                    scope="col"
                    className="emp-label"
                    colSpan={3}
                    style={{ textAlign: "center", color: " #f9cb13" }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <DeptData users={users} fetchUsers={fetchUsers} />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-bottom">
          <p>
            Copyright &#169;2023
            <br />
            Developed by <b>DCG Datacore Systems.Pvt.Ltd.</b>
            <br />
            <i>Version:1.1.0</i>
          </p>
        </div>
      </div>
    </>
  );
};

export default Employee;
