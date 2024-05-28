// import React, { useEffect, useState } from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";
// import { postAPI } from "../utils/fetchapi";
// import { toast } from "react-toastify";
// import { useLocation, useNavigate } from "react-router-dom";

// const EditDept = () => {
//   const [department, setDepartment] = useState({
//     dept_id: "",
//     dept_name: "",
//     head_name: "",
//     emails: "",
//   });
//   const [tableData, setTableData] = useState([]);
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   console.log(department);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setDepartment({
//       ...department,
//       [name]: value,
//     });
//   };

//   useEffect(() => {
//     if (state) {
//       let emails = state?.emails.split(",");

//       setDepartment({ ...state, emails: emails });
//     }
//   }, [state]);

//   const addEmailInput = () => {
//     setDepartment({
//       ...department,
//       emails: [...department.emails, ""],
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(department);
//     const { dept_id, dept_name, head_name, emails } = department;
//     const data = await postAPI(
//       "master/dept/edit",
//       {
//         dept_id: dept_id,
//         dept_name: dept_name,
//         emails: JSON.stringify(emails),
//         head_name: head_name,
//       },
//       null
//     );
//     console.log(data);
//     if (data?.status) {
//       toast.success("Department is updated successfully");
//       setDepartment({
//         dept_name: "",
//         head_name: "",
//         emails: "",
//       });
//       navigate("/department");
//     } else {
//       toast.error("Department is not added! Try again!");
//     }
//   };

//   return (
//     <div>
//       <div className="main">
//         <div className="con_sm_form">
//           <h3>Edit Dept</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="dept_name" className="form-label">
//                 Department Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="dept_name"
//                 value={department?.dept_name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="head_name" className="form-label">
//                 Department Head Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="head_name"
//                 value={department?.head_name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="list_email">
//               <label htmlFor="emails" className="form-label">
//                 Emails
//               </label>
//               {department?.emails &&
//                 department?.emails.length > 0 &&
//                 department?.emails.map((email, index) => (
//                   <div className="mb-3 list" key={index}>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="emails"
//                       value={email}
//                       onChange={(e) => {
//                         const updatedEmails = [...department.emails];
//                         updatedEmails[index] = e.target.value;
//                         setDepartment({
//                           ...department,
//                           emails: updatedEmails,
//                         });
//                       }}
//                     />
//                     {index === department.emails.length - 1 && (
//                       <FaPlus onClick={addEmailInput} />
//                     )}
//                     {index !== 0 && (
//                       <FaMinus
//                         onClick={() => {
//                           const updatedEmails = [...department.emails];
//                           updatedEmails.splice(index, 1);
//                           setDepartment({
//                             ...department,
//                             emails: updatedEmails,
//                           });
//                         }}
//                       />
//                     )}
//                   </div>
//                 ))}
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Edit Department
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditDept;

// **********************cooolllllllllllll*************************
// import React, { useEffect, useState } from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";
// import { postAPI } from "../utils/fetchapi";
// import { toast } from "react-toastify";
// import { useLocation, useNavigate } from "react-router-dom";

// import { FaTimes } from "react-icons/fa";

// const EditDept = () => {
//   const [department, setDepartment] = useState({
//     NGS: "",
//     name: "",
//     why_special: "",
//     employee_email: "",
//     senior_email: "",
//     hr_email: "",
//   });
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   console.log(department);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     console.log("Hey i am nameeeee and valueeeeeeeee", name, value);
//     setDepartment({
//       ...department,
//       [name]: value,
//     });
//   };

//   useEffect(() => {
//     if (state?.emails) {
//       let emails = state?.emails.split(",");
//       setDepartment({ ...state, emails: emails });
//     }
//   }, [state]);

//   const addEmailInput = () => {
//     setDepartment({
//       ...department,
//       emails: [...department.emails, ""],
//     });
//   };

//   const removeEmailInput = (index) => {
//     const updatedEmails = [...department.emails];
//     updatedEmails.splice(index, 1);
//     setDepartment({
//       ...department,
//       emails: updatedEmails,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(department);

//     const { NGS, name, why_special, employee_email, senior_email, hr_email } =
//       department;
//     const data = await postAPI(
//       "master/emp/edit",
//       {
//         NGS: NGS,
//         name: name,
//         why_special: why_special,
//         employee_email: employee_email,
//         senior_email: senior_email,
//         hr_email: hr_email,

//         // dept_id: dept_id,
//         // dept_name: dept_name,
//         // emails: emails.join(","), // Convert the array to a comma-separated string
//         // head_name: head_name,
//       },
//       null
//     );
//     console.log(data);
//     if (data?.status) {
//       toast.success("Department is updated successfully");
//       setDepartment({
//         NGS: "",
//         name: "",
//         why_special: "",
//         employee_email: "",
//         senior_email: "",
//         hr_email: "",

//         // dept_name: "",
//         // head_name: "",
//         // emails: [],
//       });
//       navigate("/department");
//     } else {
//       toast.error("Department is not added! Try again!");
//     }
//   };
//   const handleClose = () => {
//     // You can perform any cleanup or additional actions before closing the page
//     navigate("/department"); // Assuming you want to navigate to the "/department" route
//   };

//   return (
//     <div>
//       <div className="main">
//         <div className="con_sm_form">
//           <div className="Edit_cross">
//             <h3>Edit Dept</h3>
//             <span className="close-button" onClick={handleClose}>
//               <FaTimes />
//             </span>
//           </div>

//           <br />
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
//             <div className="mb-3">
//               <label htmlFor="employee_email" className="form-label">
//                 employee_email
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="employee_email"
//                 value={department?.employee_email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="senior_email" className="form-label">
//                 senior_email
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="senior_email"
//                 value={department?.senior_email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 hr_email
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
//                 Emails
//               </label>
//               {department?.emails &&
//                 department?.emails.map((email, index) => (
//                   <div className="mb-3 list" key={index}>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="emails"
//                       value={email}
//                       onChange={(e) => {
//                         const updatedEmails = [...department.emails];
//                         updatedEmails[index] = e.target.value;
//                         setDepartment({
//                           ...department,
//                           emails: updatedEmails,
//                         });
//                       }}
//                     />
//                     {index === department.emails.length - 1 && (
//                       <FaPlus onClick={addEmailInput} />
//                     )}
//                     {index !== 0 && (
//                       <FaMinus onClick={() => removeEmailInput(index)} />
//                     )}
//                   </div>
//                 ))}
//             </div> */}
//             <button type="submit" className="btn btn-primary">
//               Save
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditDept;
// **********************cooolllllllllllll*************************

// import React, { useEffect, useState } from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";
// import { postAPI } from "../utils/fetchapi";
// import { toast } from "react-toastify";
// import { useLocation, useNavigate } from "react-router-dom";

// import { FaTimes } from "react-icons/fa";

// const EditEmployee = () => {
//   // const [department, setDepartment] = useState({
//   //   dept_id: "",
//   //   dept_name: "",
//   //   head_name: "",
//   //   emails: [], // Initialize as an empty array
//   // });
//   const [department, setDepartment] = useState({
//     NGS: "",
//     name: "",
//     birthday: "",
//     anniversary: "",
//     employee_email: [""],
//     senior_email: "",
//     hr_email: "",
//   });
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   console.log(department);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setDepartment({
//       ...department,
//       [name]: value,
//     });
//   };

//   useEffect(() => {
//     if (state?.emails) {
//       let emails = state?.emails.split(",");
//       setDepartment({ ...state, emails: emails });
//     }
//   }, [state]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(department);
//     const {
//       NGS,
//       name,
//       birthday,
//       anniversary,
//       employee_email,
//       senior_email,
//       hr_email,
//     } = department;

//     const data = await postAPI(
//       "master/emp/edit",
//       {
//         name: name,
//         birthday: birthday,
//         anniversary: anniversary,
//         employee_email: employee_email,
//         senior_email: senior_email,
//         hr_email: hr_email,
//         NGS: NGS,
//       },
//       null
//     );
//     console.log(data);
//     if (data?.status) {
//       toast.success("Employee is updated successfully");
//       setDepartment({
//         dept_name: "",
//         head_name: "",
//         emails: [],
//       });
//       navigate("/employee");
//     } else {
//       toast.error("Employee is not added! Try again!");
//     }
//   };
//   const handleClose = () => {
//     // You can perform any cleanup or additional actions before closing the page
//     navigate("/employee"); // Assuming you want to navigate to the "/department" route
//   };

//   return (
//     <div>
//       <div className="main">
//         <div className="con_sm_form">
//           <div className="Edit_cross">
//             <h3 className="department-heading">Edit Employee</h3>
//             <span className="close-button" onClick={handleClose}>
//               <FaTimes />
//             </span>
//           </div>

//           <br />
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
//               <label htmlFor="birthday" className="form-label">
//                 Birthday Date
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="birthday"
//                 value={department?.birthday}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="anniversary" className="form-label">
//                 Anniversory Date
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="anniversary"
//                 value={department?.anniversary}
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

//             <button
//               type="submit"
//               style={{
//                 backgroundColor: "#ffa500", // Fallback color if gradient isn't supported
//                 backgroundImage: "linear-gradient(to bottom, #c55b0a, #ecd106)",
//                 color: "white",
//                 padding: "8px",
//                 borderRadius: "5px",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//             >
//               Edit Employee
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditEmployee;

import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { postAPI } from "../utils/fetchapi";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

import { FaTimes } from "react-icons/fa";

const EditEmployee = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const existingData = location.state;
  // Fetch existing employee data from location state
  console.log("existing data......", location.state);

  const [department, setDepartment] = useState({
    NGS: existingData?.NGS || "",
    name: existingData?.name || "",
    birthday: existingData?.birthday || "",
    anniversary: existingData?.anniversary || "",
    employee_email: existingData?.employee_email || "",
    senior_email: existingData?.senior_email || "",
    hr_email: existingData?.hr_email || "",
  });
  console.log(department);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDepartment({
      ...department,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(department);
    const {
      NGS,
      name,
      birthday,
      anniversary,
      employee_email,
      senior_email,
      hr_email,
    } = department;

    const data = await postAPI(
      "master/emp/edit",
      {
        name: name,
        birthday: birthday,
        anniversary: anniversary,
        employee_email: employee_email,
        senior_email: senior_email,
        hr_email: hr_email,
        NGS: NGS,
      },
      null
    );
    console.log(data);
    if (data?.status) {
      toast.success("Employee is updated successfully");
      setDepartment({
        dept_name: "",
        head_name: "",
        emails: [],
      });
      navigate("/employee");
    } else {
      toast.error("Employee is not added! Try again!");
    }
  };
  const handleClose = () => {
    // You can perform any cleanup or additional actions before closing the page
    navigate("/employee"); // Assuming you want to navigate to the "/department" route
  };

  return (
    <div>
      <div className="main">
        <div className="con_sm_form">
          <div className="Edit_cross">
            <h3 className="department-heading">Edit Employee</h3>
            <span className="close-button" onClick={handleClose}>
              <FaTimes />
            </span>
          </div>

          <br />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="NGS" className="form-label">
                NGS
              </label>
              <input
                type="text"
                className="form-control"
                name="NGS"
                value={department?.NGS}
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
                value={department?.name}
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
                value={department?.birthday}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="anniversary" className="form-label">
                Anniversory Date
              </label>
              <input
                type="text"
                className="form-control"
                name="anniversary"
                value={department?.anniversary}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="employee_email" className="form-label">
                Employee Email
              </label>
              <input
                type="text"
                className="form-control"
                name="employee_email"
                value={department?.employee_email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="senior_email" className="form-label">
                Senior Email
              </label>
              <input
                type="text"
                className="form-control"
                name="senior_email"
                value={department?.senior_email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="hr_email" className="form-label">
                Hr Email
              </label>
              <input
                type="text"
                className="form-control"
                name="hr_email"
                value={department?.hr_email}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#ffa500", // Fallback color if gradient isn't supported
                backgroundImage: "linear-gradient(to bottom, #c55b0a, #ecd106)",
                color: "white",
                padding: "8px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Edit Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
