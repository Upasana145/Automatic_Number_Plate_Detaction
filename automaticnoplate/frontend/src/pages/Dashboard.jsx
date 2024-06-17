import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { apiCallBack, getAPI } from "../utils/fetchapi";

import DashboardContent from "../components/DashboardContent";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  // getting split error
  const fetchUsers = async () => {
    try {
      const data = await getAPI(`upload/license`, null);

      console.log("hey i am data.......", data);
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

  // const fetchUsers = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:4002/api/v1/upload/license",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json", // Assuming JSON response
  //         },
  //       }
  //     );
  //     const data = await response.json(); // Parse response body as JSON
  //     console.log("Data received:", data);
  //     if (response.ok) {
  //       setUsers(data); // Assuming setUsers is a function to update state
  //     } else {
  //       throw new Error(data.message || "Failed to fetch data");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     toast.error("Something went wrong. Try Again!");
  //   }
  // };
  const [file, setFile] = useState(null);
  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="main tablecontent">
        <div className="table_header">
          <div className="table_header_left">
            <p className="department-heading ">Dashboard</p>
          </div>
        </div>

        <div
          className="Top-table "
          style={{
            overflowX: "auto",
            overflowY: "auto",
            height: "430px",
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
                  id
                </th>
                <th
                  scope="col"
                  className="emp-label"
                  style={{ color: " #f9cb13" }}
                >
                  Raw Data
                </th>
                <th
                  scope="col"
                  className="emp-label"
                  style={{ color: " #f9cb13" }}
                >
                  Plate_No.
                </th>
                <th
                  scope="col"
                  className="emp-label"
                  style={{ color: " #f9cb13" }}
                >
                  LOR_No.
                </th>
                <th
                  scope="col"
                  className="emp-label"
                  style={{ color: " #f9cb13" }}
                >
                  Weight1
                </th>
                <th
                  scope="col"
                  className="emp-label"
                  style={{ color: " #f9cb13" }}
                >
                  Weight2
                </th>
                <th
                  scope="col"
                  className="emp-label"
                  style={{ color: " #f9cb13" }}
                >
                  Net Weight
                </th>
                <th
                  scope="col"
                  className="emp-label"
                  style={{ color: " #f9cb13" }}
                >
                  Text Field
                </th>
              </tr>
            </thead>
            <tbody>
              <DashboardContent users={users} fetchUsers={fetchUsers} />
            </tbody>
          </table>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          style={{
            backgroundColor: "#ffa500",
            backgroundImage: "linear-gradient(to bottom, #c55b0a, #ecd106)",
            color: "white",
            padding: "8px 14px",
            marginBottom: "20px",
            marginRight: "70px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
          }}
          onClick={handlePrint}
        >
          Print
        </button>
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

export default Dashboard;

// ******************************************************
// import React, { useEffect, useState } from "react";

// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import UserData from "../components/UserData";
// import { getAPI, postAPI } from "../utils/fetchapi";
// import DeptData from "../components/DeptData";
// import DashboardContent from "../components/DashboardContent";

// const Dashboard = () => {
//   const [users, setUsers] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const data = await getAPI(`master/emp/fetch`, null);

//       if (data.status) {
//         setUsers(data?.data);
//       } else {
//         toast.error(data?.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong. Try Again!");
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <>
//       <div className="main tablecontent">
//         <div className="table_header">
//           <div className="table_header_left">
//             <p className="department-heading ">Dashboard</p>
//           </div>
//         </div>
//         <div
//           className="Top-table "
//           style={{
//             // width: "1010px",
//             // border: "2px solid black",
//             overflowX: "auto", // Enable horizontal scrolling
//             overflowY: "auto",
//             height: "450px",
//           }}
//         >
//           <table className="table table-striped table-bordered table-hover">
//             <thead>
//               <tr>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   NGS
//                 </th>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   Name
//                 </th>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   Birthday
//                 </th>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   Anniversary
//                 </th>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   Employee_email
//                 </th>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   Senior_email
//                 </th>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   Hr_email
//                 </th>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ textAlign: "center", color: " #f9cb13" }}
//                 >
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <DashboardContent users={users} fetchUsers={fetchUsers} />
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="footer">
//         <div className="footer-bottom">
//           <p>
//             Copyright &#169;2023
//             <br />
//             Developed by <b>DCG Datacore Systems.Pvt.Ltd.</b>
//             <br />
//             <i>Version:1.1.0</i>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

// *********************************************************

// last update
// import axios from "axios";
// import React, { useState } from "react";
// import Imagecontainer from "./Imagecontainer";
// import { toast } from "react-toastify";
// import { getAPI, postAPI } from "../utils/fetchapi";
// import { useEffect } from "react";
// function Dashboard() {

//   const [showImageContainer, setShowImageContainer] = useState(false);

//   const handleButtonClick = async (event) => {
//      setShowImageContainer(true);
//   };
//   useEffect(() => {
//     if (showImageContainer) {
//       // Only execute this when the button is clicked
//       handleButtonClick();
//     }
//   }, [buttonClicked]);

//   return (
//     <>
//       <div>
//         <form className="formContainer mt-5">
//           <div className="form-btn">
//             <button type="button" onClick={handleButtonClick}>
//               Check
//             </button>
//           </div>
//         </form>
//       </div>

//       {showImageContainer && (
//         <div className="imgconn">
//           <Imagecontainer
//             users={users}
//             handleButtonClick={handleButtonClick}
//             selectedFilter={selectedFilter}
//           />
//         </div>
//       )}
//     </>
//   );
// }

// export default Dashboard;

// next data

// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// import { apiCallBack, getAPI } from "../utils/fetchapi";

// import DashboardContent from "../components/DashboardContent";

// const Dashboard = () => {
//   const [users, setUsers] = useState([]);

//   // getting split error
//   const fetchUsers = async () => {
//     try {
//       const data = await getAPI(`upload/license`, null);

//       console.log("hey i am data.......", data);
//       if (data.status) {
//         setUsers(data?.data);
//       } else {
//         toast.error(data?.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong. Try Again!");
//     }
//   };

//   // const fetchUsers = async () => {
//   //   try {
//   //     const response = await fetch(
//   //       "http://localhost:4002/api/v1/upload/license",
//   //       {
//   //         method: "GET",
//   //         headers: {
//   //           "Content-Type": "application/json", // Assuming JSON response
//   //         },
//   //       }
//   //     );
//   //     const data = await response.json(); // Parse response body as JSON
//   //     console.log("Data received:", data);
//   //     if (response.ok) {
//   //       setUsers(data); // Assuming setUsers is a function to update state
//   //     } else {
//   //       throw new Error(data.message || "Failed to fetch data");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //     toast.error("Something went wrong. Try Again!");
//   //   }
//   // };
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     // Get the selected file
//     const selectedFile = event.target.files[0];
//     // Update state with the selected file
//     setFile(selectedFile);
//   };
//   console.log(file);
//   const handleSendClick = async () => {
//     if (file) {
//       try {
//         const formData = new FormData();
//         formData.append("image", file);

//         const response = await apiCallBack(
//           "POST",
//           "upload/images",
//           formData,
//           null
//         );

//         if (response?.status) {
//           toast.success("uploaded successfully");
//         } else {
//           throw new Error("Failed to upload images");
//         }
//       } catch (error) {
//         console.error("Error uploading file:", error);
//         toast.error("An error occurred while uploading file.");
//       }

//       // try {
//       //   const formData = new FormData();
//       //   // Append the file to the FormData object
//       //   formData.append("image", file.name);

//       //   const response = await postAPI("upload/images", formData, null);

//       //   if (response?.status) {
//       //     toast.success("uploaded successfully");
//       //   } else {
//       //     // toast.error("Failed to send email.");
//       //     throw new Error("Failed to upload images/videos");
//       //   }
//       // } catch (error) {
//       //   console.error("Error sending email:", error);
//       //   toast.error("An error occurred while sending email.");
//       // }

//       // Clear file state after sending
//       setFile(null);
//     } else {
//       // Handle case when no file is selected
//       console.log("Please select a file to send.");
//     }
//   };
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <>
//       <div className="main tablecontent">
//         <div className="table_header">
//           <div className="table_header_left">
//             <p className="department-heading ">Dashboard</p>
//           </div>
//         </div>

//         <div
//           className="Top-table "
//           style={{
//             // width: "1010px",
//             // border: "2px solid black",
//             overflowX: "auto", // Enable horizontal scrolling
//             overflowY: "auto",
//             height: "450px",
//           }}
//         >
//           {/* <label for="file-input" class="file-input-wrapper">
//             <span className="emp-label">Choose Image </span>
//             <input
//               id="file-input"
//               type="file"
//               onChange={handleFileChange}
//               accept="image/*,video/*"
//             />
//             <button className="send_button" onClick={handleSendClick}>
//               Send
//             </button>
//           </label> */}

//           <table className="table table-striped table-bordered table-hover">
//             <thead>
//               <tr>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   id
//                 </th>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   Captured image
//                 </th>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   Plate No.
//                 </th>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   LOR No.
//                 </th>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   Weight1
//                 </th>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   Weight2
//                 </th>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   Net Wight
//                 </th>
//                 <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ color: " #f9cb13" }}
//                 >
//                   Text Field
//                 </th>
//                 {/* <th
//                   scope="col"
//                   className="emp-label"
//                   style={{ textAlign: "center", color: " #f9cb13" }}
//                 >
//                   Action
//                 </th> */}
//               </tr>
//             </thead>
//             <tbody>
//               <DashboardContent users={users} fetchUsers={fetchUsers} />
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="footer">
//         <div className="footer-bottom">
//           <p>
//             Copyright &#169;2023
//             <br />
//             Developed by <b>DCG Datacore Systems.Pvt.Ltd.</b>
//             <br />
//             <i>Version:1.1.0</i>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;
