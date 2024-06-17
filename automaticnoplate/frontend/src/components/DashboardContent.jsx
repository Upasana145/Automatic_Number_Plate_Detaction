import { useState } from "react";
import { toast } from "react-toastify";
import { postAPI } from "../utils/fetchapi";

const DashboardContent = ({ users, fetchUsers }) => {
  const [showModal, setShowModal] = useState(false);

  const [selectedname, setSelectedname] = useState("");

  const [croppedImage, setCroppedImage] = useState("");

  const openModal = async ({ id, raw_data_name }) => {
    setShowModal(true);

    // setSelectedname(name);
    setSelectedname(raw_data_name);

    console.log(
      "hey i am raw..........",

      `http://localhost:4002/uploads/${selectedname}`
    );

    try {
      const payload = {
        id,
      };
      // const response = await postAPI("master/mailsend", payload);
      const response = await postAPI("master/allimg_plate_no", payload, null);

      // console.log("hey i am response. status: ", response.data[3].croped_image);
      if (response?.status) {
        setCroppedImage(response?.data);
        toast.success("Fetched successfully.");
      } else {
        // toast.error("Failed to send email.");
        throw new Error("Failed ");
      }
    } catch (error) {
      console.error("Error ", error);
      toast.error("An error occurred while sending ");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  console.log("users", users);

  return (
    <>
      {users &&
        users.map((curUser, i) => {
          const {
            id,
            raw_data_name,
            raw_data_path,
            Plate_No,
            LOR_No,
            Weight1,
            Weight2,
            Net_Weight,
            text_field,
          } = curUser;

          return (
            <tr key={i}>
              <td>{id}</td>
              <td>
                <img
                  src={`${process.env.REACT_APP_FILE_URI}${raw_data_name}`}
                  alt={raw_data_name}
                  // style={{ maxWidth: "100%" }}
                  style={{ width: "180px" }}
                />
                <p>{raw_data_name}</p>
              </td>

              <td className="edit">
                <p>{Plate_No}</p>
              </td>
              <td className="edit">
                <p>{LOR_No}</p>
              </td>
              <td className="edit">
                <p>{Weight1}</p>
              </td>
              <td className="edit">
                <p>{Weight2}</p>
              </td>
              <td className="edit">
                <p>{Net_Weight}</p>
              </td>
              <td className="edit">
                <p>{text_field}</p>
              </td>
            </tr>
          );
        })}
    </>
  );
};

export default DashboardContent;
