// import React from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";
// import { useState } from "react";

// const AddDept = () => {
//   const [emails, setEmails] = useState([
//     {
//       email: "",
//     },
//   ]);

//   const addEmailInput = () => {
//     setEmails([...emails, { email: "" }]);
//   };

//   return (
//     <div>
//       <div className="main">
//         <div className="con_sm_form">
//           <form>
//             <div class="mb-3">
//               <label for="dept_name" class="form-label">
//                 Department Name
//               </label>
//               <input type="text" class="form-control" id="dept_name" />
//             </div>
//             <div class="mb-3">
//               <label for="head_name" class="form-label">
//                 Department Head Name
//               </label>
//               <input type="text" class="form-control" id="head_name" />
//             </div>
//             <div className="list_email">
//               <label for="emails" class="form-label">
//                 Emails
//               </label>
//               {emails &&
//                 emails.map((item, index) => (
//                   <div class="mb-3 list">
//                     <input type="text" class="form-control" id="emails" />
//                     {/* {emails.length - 1 === index && ( */}
//                     <FaPlus onClick={addEmailInput} />
//                     {/* )} */}
//                     {/* {emails.length - 1 !== index && (
//                       <FaMinus onClick={removeEmailInput} />
//                     )} */}
//                   </div>
//                 ))}
//             </div>
//             <button type="submit" class="btn btn-primary">
//               Add Department
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddDept;

// ****************************************** date :- 19.03.2024**************************
// import React, { useState } from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";
// import { postAPI } from "../utils/fetchapi";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { FaTimes } from "react-icons/fa";

// const AddDept = () => {
//   const [department, setDepartment] = useState({
//     NGS: "",
//     name: "",
//     why_special: "",
//     employee_email: [""],
//     senior_email: "",
//     hr_email: "",
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setDepartment({
//       ...department,
//       [name]: value,
//     });
//   };

//   const addEmailInput = () => {
//     setDepartment({
//       ...department,
//       emails: [...department.emails, ""],
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = await postAPI("master/emp", department, null);
//     if (data?.status) {
//       toast.success("Department is added successfully");
//       setDepartment({
//         NGS: "",
//         name: "",
//         why_special: "",
//         employee_email: [""],
//         senior_email: "",
//         hr_email: "",
//       });
//       navigate("/department");
//     } else {
//       toast.error("Department is not added! Try again!");
//     }
//   };
//   const handleClose = () => {
//     navigate("/department");
//   };
//   return (
//     <div>
//       <div className="main">
//         <div className="con_sm_form">
//           <div className="close_depts">
//             <span className="close-button" onClick={handleClose}>
//               <FaTimes />
//             </span>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="NGS" className="form-label">
//                 NGS
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="NGS"
//                 value={department?.NGS}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="name"
//                 value={department?.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="why_special" className="form-label">
//                 why_special
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="why_special"
//                 value={department?.why_special}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="list_email">
//               <label htmlFor="employee_email" className="form-label">
//                 Employee Email
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="employee_email"
//                 value={department?.employee_email}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="list_email">
//               <label htmlFor="senior_email" className="form-label">
//                 Senior Email
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="senior_email"
//                 value={department?.senior_email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="list_email">
//               <label htmlFor="hr_email" className="form-label">
//                 Hr Email
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="hr_email"
//                 value={department?.hr_email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             {/* <div className="list_email">
//               <label htmlFor="emails" className="form-label">
//                 Senior_email
//               </label>
//               {department.emails.map((email, index) => (
//                 <div className="mb-3 list" key={index}>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="emails"
//                     value={email}
//                     onChange={(e) => {
//                       const updatedEmails = [...department.emails];
//                       updatedEmails[index] = e.target.value;
//                       setDepartment({
//                         ...department,
//                         emails: updatedEmails,
//                       });
//                     }}
//                   />
//                   {index === department.emails.length - 1 && (
//                     <FaPlus onClick={addEmailInput} />
//                   )}
//                   {index !== 0 && (
//                     <FaMinus
//                       onClick={() => {
//                         const updatedEmails = [...department.emails];
//                         updatedEmails.splice(index, 1);
//                         setDepartment({
//                           ...department,
//                           emails: updatedEmails,
//                         });
//                       }}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//             <div className="list_email">
//               <label htmlFor="emails" className="form-label">
//                 Hr_email
//               </label>
//               {department.emails.map((email, index) => (
//                 <div className="mb-3 list" key={index}>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="emails"
//                     value={email}
//                     onChange={(e) => {
//                       const updatedEmails = [...department.emails];
//                       updatedEmails[index] = e.target.value;
//                       setDepartment({
//                         ...department,
//                         emails: updatedEmails,
//                       });
//                     }}
//                   />
//                   {index === department.emails.length - 1 && (
//                     <FaPlus onClick={addEmailInput} />
//                   )}
//                   {index !== 0 && (
//                     <FaMinus
//                       onClick={() => {
//                         const updatedEmails = [...department.emails];
//                         updatedEmails.splice(index, 1);
//                         setDepartment({
//                           ...department,
//                           emails: updatedEmails,
//                         });
//                       }}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div> */}

//             <button type="submit" className="btn btn-primary">
//               Add Department
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddDept;
// **********************************************************************
// import React, { useState } from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";
// import { postAPI } from "../utils/fetchapi";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { FaTimes } from "react-icons/fa";

// const AddEmployee = () => {
//   const [department, setDepartment] = useState({
//     NGS: "",
//     name: "",
//     birthday: "",
//     anniversory: "",
//     employee_email: [""],
//     senior_email: "",
//     hr_email: "",
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setDepartment({
//       ...department,
//       [name]: value,
//     });
//   };

//   const addEmailInput = () => {
//     setDepartment({
//       ...department,
//       emails: [...department.emails, ""],
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = await postAPI("master/emp", department, null);
//     if (data?.status) {
//       toast.success("Department is added successfully");
//       setDepartment({
//         NGS: "",
//         name: "",
//         birthday: "",
//         anniversory: "",
//         employee_email: [""],
//         senior_email: "",
//         hr_email: "",
//       });
//       navigate("/department");
//     } else {
//       toast.error("Department is not added! Try again!");
//     }
//   };
//   const handleClose = () => {
//     navigate("/employee");
//   };
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0]; // Get the uploaded file
//     if (file) {
//       // Perform further processing here, such as reading file content or uploading to a server
//       console.log("Uploaded file:", file);
//     }
//   };

//   return (
//     <div>
//       <div className="main">
//         <div className="mainclass">
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <div></div>
//             {/* <div className="close_depts"> */}
//             <span className="close-button" onClick={handleClose}>
//               {/* <span onClick={handleClose}> */}
//               <FaTimes />
//             </span>
//           </div>

//           <div style={{ display: "flex" }}>
//             {/* upload csv  or excel*/}
//             <div className="col-5">
//               <label htmlFor="fileInput" className="custom-file-upload">
//                 Choose Excel or CSV File
//                 <input
//                   type="file"
//                   id="fileInput"
//                   accept=".xls,.xlsx,.csv"
//                   onChange={handleFileUpload}
//                   style={{ display: "none" }}
//                 />
//               </label>
//             </div>
//             {/* Manually enter details */}

//             <div className="col-7">
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-5">
//                   {/* <label htmlFor="NGS" className="form-label">
//                     NGS
//                   </label> */}
//                   <h2 className="add_emp">Add individual employee</h2>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="NGS" className="form-label ">
//                     NGS
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="NGS"
//                     value={department?.NGS}
//                     onChange={handleInputChange}

//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="name"
//                     value={department?.name}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="why_special" className="form-label">
//                     Birthday Date
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="birthday"
//                     value={department?.birthday}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="why_special" className="form-label">
//                     Anniversory Date
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="anniversory"
//                     value={department?.anniversory}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <div className="list_email mb-3">
//                   <label htmlFor="employee_email" className="form-label">
//                     Employee Email
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="employee_email"
//                     value={department?.employee_email}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <div className="list_email mb-3">
//                   <label htmlFor="senior_email" className="form-label">
//                     Senior Email
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="senior_email"
//                     value={department?.senior_email}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="list_email mb-3">
//                   <label htmlFor="hr_email" className="form-label">
//                     Hr Email
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="hr_email"
//                     value={department?.hr_email}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <button type="submit" className="btn-style">
//                   Add Employee
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddEmployee;

// ***********************************************************************
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { postAPI } from "../utils/fetchapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [department, setDepartment] = useState({
    NGS: "",
    name: "",
    birthday: "",
    anniversary: "",
    employee_email: [],
    senior_email: "",
    hr_email: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDepartment({
      ...department,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await postAPI("master/emp", department, null);
    console.log("hey i am data", data);
    if (data?.status) {
      toast.success("Employee is added successfully");
      setDepartment({
        NGS: "",
        name: "",
        birthday: "",
        anniversary: "",
        employee_email: [],
        senior_email: "",
        hr_email: "",
      });
      navigate("/employee");
    } else {
      toast.error("Employee is not added! Try again!");
    }
  };

  const handleClose = () => {
    navigate("/employee");
  };

  // const handleFileUpload = async (event) => {
  //   const file = event.target.files[0]; // Get the uploaded file
  //   const data = await postAPI("/upload", department, null);
  //   // if (file) {
  //   //   // Perform further processing here, such as reading file content or uploading to a server
  //   //   console.log("Uploaded file:", file);
  //   // }
  //   if (data?.status) {
  //     toast.success("Employee is added successfully");
  //     setDepartment({
  //       NGS: "",
  //       name: "",
  //       birthday: "",
  //       anniversary: "",
  //       employee_email: [],
  //       senior_email: "",
  //       hr_email: "",
  //     });
  //     navigate("/employee");
  //   } else {
  //     toast.error("Employee is not added! Try again!");
  //   }
  // };
  const handleFileUpload = async (event) => {
    const file = event.target.files[0]; // Get the uploaded file

    console.log("Uploading file", file);
    const formData = new FormData();
    formData.append("excel", file);
    // console.log("hey i am form data...", formData);
    // console.log("heyyyyyyyyFile data:", formData.get("file"));

    try {
      const response = await fetch(
        "http://localhost:4002/api/v1/upload/",
        // "http://localhost:4002/api/v1/master/emp",

        {
          method: "POST",
          body: formData,
        }
      );
      console.log("hey i am response....", response);

      //   // const response = await postAPI("master/emp", department, null);

      const data = await response.json();

      if (response.ok) {
        toast.success("Employee is added successfully");
        setDepartment({
          NGS: "",
          name: "",
          birthday: "",
          anniversary: "",
          employee_email: [],
          senior_email: "",
          hr_email: "",
        });
        // navigate("/employee");
      } else {
        toast.error("Employee is not added! Try again!");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("An error occurred while uploading the file");
    }
  };
  return (
    <div>
      <div className="main">
        <div className="mainclass">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div></div>
            <span className="close-button" onClick={handleClose}>
              <FaTimes />
            </span>
          </div>

          <div style={{ display: "flex" }}>
            <div className="col-5">
              <label htmlFor="fileInput" className="custom-file-upload">
                Choose Excel or CSV File
                <input
                  type="file"
                  id="fileInput"
                  accept=".xls,.xlsx,.csv"
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                />
              </label>
            </div>

            <div className="col-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <h2 className="add_emp">Add individual employee</h2>
                </div>

                <div className="mb-3">
                  <label htmlFor="NGS" className="form-label ">
                    NGS
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="NGS"
                    value={department.NGS}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={department.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="birthday" className="form-label">
                    Birthday Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="birthday"
                    value={department.birthday}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="anniversary" className="form-label">
                    Anniversary Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="anniversary"
                    value={department.anniversary}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="employee_email" className="form-label">
                    Employee Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="employee_email"
                    value={department.employee_email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="senior_email" className="form-label">
                    Senior Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="senior_email"
                    value={department.senior_email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="hr_email" className="form-label">
                    HR Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="hr_email"
                    value={department.hr_email}
                    onChange={handleInputChange}
                  />
                </div>

                <button type="submit" className="btn-style">
                  Add Employee
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
