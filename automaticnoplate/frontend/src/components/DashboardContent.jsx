import { useState } from "react";
import { toast } from "react-toastify";
import { postAPI } from "../utils/fetchapi";
import swal from "sweetalert";
import Modal from "react-modal"; // Import React Modal
import image1 from "../Images/Happy Birthday1.avif";
import image2 from "../Images/Happybirthday2.jpg";
import image3 from "../Images/Happy Birthday1.avif";
import image4 from "../Images/Happybirthday2.jpg";
import image5 from "../Images/Happy Birthday1.avif";
import image6 from "../Images/Happybirthday2.jpg";
import { FaTimes } from "react-icons/fa";

const DashboardContent = ({ users, fetchUsers }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedNGS, setSelectedNGS] = useState("");
  const [selectedname, setSelectedname] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("");
  const [selectedImageindex, setSelectedImageindex] = useState("");
  const [croppedImage, setCroppedImage] = useState("");

  const openModal = async ({ id, raw_data_name, raw_data_path }) => {
    setShowModal(true);
    setSelectedNGS(id);

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
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred while sending email.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  console.log("users", users);

  const cameraAndDept = [
    { camera: 1, dept_name: "Happy Birthday" },
    { camera: 2, dept_name: "Anniversary" },
    { camera: 3, dept_name: "Happy Birthday" },
    { camera: 1, dept_name: "Happy Birthday" },
    { camera: 5, dept_name: "Happy Birthday" },
    { camera: 4, dept_name: "Anniversary" },
  ];

  const imageArray = [image1, image2, image3, image4, image5, image6];
  // const allcroppedImage = croppedImage.data;
  // console.log("hey i am allcroppedImage....", croppedImage);
  // const today = new Date();
  // const todayMonth = today.getMonth() + 1; // Months are zero-based
  // const todayDay = today.getDate();

  return (
    <>
      {users &&
        users.map((curUser, i) => {
          const { id, raw_data_name, raw_data_path } = curUser;

          return (
            <tr key={i}>
              <td>{id}</td>
              <td>
                <img
                  src={`${process.env.REACT_APP_FILE_URI}${raw_data_name}`}
                  alt={raw_data_name}
                  style={{ maxWidth: "100%" }}
                />
                <p>{raw_data_name}</p>
              </td>

              <td className="edit">
                <button
                  onClick={() => openModal(curUser)}
                  style={{
                    backgroundColor: "#ffa500",
                    backgroundImage:
                      "linear-gradient(to bottom, #c55b0a, #ecd106)",
                    color: "white",
                    padding: "8px 14px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                >
                  View
                </button>

                {/* {isAnniversaryToday && !isBirthdayToday && (
                <button
                  onClick={() =>
                    openModal(NGS, name, "anniversary", anniversary)
                  }
                  style={{
                    backgroundColor: "#ffa500", // Fallback color if gradient isn't supported
                    backgroundImage:
                      "linear-gradient(to bottom, #c55b0a, #ecd106)",
                    color: "white",
                    padding: "8px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Generate
                </button>
              )}
              {isBirthdayToday && isAnniversaryToday && (
                <button
                  onClick={() =>
                    openModal(NGS, name, "birthday && anniversary", birthday)
                  }
                  style={{
                    backgroundColor: "#ffa500", // Fallback color if gradient isn't supported
                    backgroundImage:
                      "linear-gradient(to bottom, #c55b0a, #ecd106)",
                    color: "white",
                    padding: "8px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Generate
                </button>
              )} */}
              </td>
            </tr>
          );
        })}

      {/* Modal to display dummy images */}
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "20%",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "40px",
          },
        }}
      >
        <div className="imageContainer">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              style={{
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
                // backgroundColor: "#dc3545", // Change color based on showImages state
                backgroundColor: "#ffa500", // Fallback color if gradient isn't supported
                backgroundImage: "linear-gradient(to bottom, #c55b0a, #ecd106)",

                color: "#fff", // Text color
                border: "none", // Remove border
                outline: "none", // Remove outline
              }}
            >
              Send
            </button>
            <button
              style={{
                padding: "0px 12px",
                borderRadius: "4px",
                cursor: "pointer",
                // backgroundColor: "#dc3545", // Change color based on showImages state
                backgroundColor: "#ffa500", // Fallback color if gradient isn't supported
                backgroundImage: "linear-gradient(to bottom, #c55b0a, #ecd106)",

                color: "#fff", // Text color
                border: "none", // Remove border
                outline: "none", // Remove outline
              }}
              onClick={closeModal}
            >
              <FaTimes />
            </button>
          </div>
          {/* {console.log("selectedNGS", selectedNGS)} */}
          <div>id: {selectedNGS}</div>
          <div>raw_data_name: {selectedname}</div>
          <div>Selected_image_index: {selectedImageindex}</div>
          <div className="parent" style={{ height: "400px" }}>
            {croppedImage &&
              croppedImage.map((item, index) => (
                <div className="imagecontainerchild" key={index}>
                  <div className="img_child">
                    <img
                      src={`${process.env.REACT_APP_FILE_URI}${item.croped_image}`}
                      alt=""
                    />
                    <div className="img_dept">{item?.license_plate_no}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DashboardContent;
