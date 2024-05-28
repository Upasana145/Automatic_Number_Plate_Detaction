import { toast } from "react-toastify";
import { postAPI } from "../utils/fetchapi";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const DeptData = ({ users, fetchUsers }) => {
  const sureToDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete the department info?",
      icon: "warning",
      dangerMode: true,
      buttons: ["No, cancel it!", "Yes, I am sure!"],
    }).then(async (willDelete) => {
      if (willDelete) {
        await deleteHandler(id);
      }
    });
  };

  const deleteHandler = async (id) => {
    let data = await postAPI("master/emp/delete", { NGS: parseInt(id) }, null);
    if (data?.status) {
      toast.success("Department has been deleted successfully.");
      fetchUsers();
    } else {
      toast.error("Department is not deleted! Something went wrong.");
    }
  };

  return (
    <>
      {users.map((curUser, i) => {
        const {
          NGS,
          name,
          birthday,
          anniversary,
          employee_email,
          senior_email,
          hr_email,
        } = curUser;
        return (
          <tr key={i}>
            <td>{NGS}</td>
            <td>{name}</td>
            <td>{birthday}</td>
            <td>{anniversary}</td>
            <td>
              {employee_email.split(",").map((email, index) => (
                <>
                  {index === employee_email.split(",").length - 1 ? (
                    <div key={index}>{email.trim()}</div>
                  ) : (
                    <div key={index}>{email.trim()},</div>
                  )}
                </>
              ))}
            </td>
            <td>
              {senior_email.split(",").map((email, index) => (
                <>
                  {index === employee_email.split(",").length - 1 ? (
                    <div key={index}>{email.trim()}</div>
                  ) : (
                    <div key={index}>{email.trim()},</div>
                  )}
                </>
              ))}
            </td>
            <td>
              {hr_email.split(",").map((email, index) => (
                <>
                  {index === employee_email.split(",").length - 1 ? (
                    <div key={index}>{email.trim()}</div>
                  ) : (
                    <div key={index}>{email.trim()},</div>
                  )}
                </>
              ))}
            </td>
            {/* 
            <td
              className="button-edit"
              style={{
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <Link to={"/generate"} state={curUser}>
             
                Generate
              </Link>
            </td> */}
            <td
              className="button-edit"
              style={{
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <Link to={"/editemployee"} state={curUser}>
                <i className="fas fa-edit"></i>
              </Link>
            </td>
            <td
              onClick={() => sureToDelete(NGS)}
              className="btn-delete"
              style={{
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
                color: "green",
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default DeptData;
