// import React from "react";

// function Generate() {
//   return <div>Generate</div>;
// }

// export default Generate;
import React, { useState } from "react";
import image3 from "../Images/Happy Birthday1.avif";
import image5 from "../Images/Happybirthday2.jpg";
import image6 from "../Images/Happy Birthday1.avif";
import image1 from "../Images/Happybirthday2.jpg";
import image2 from "../Images/Happy Birthday1.avif";
import image4 from "../Images/Happybirthday2.jpg";

const Generate = ({ users }) => {
  // console.log("Name:", name);

  const cameraAndDept = [
    { camera: 1, dept_name: "Happy Birthday" },
    { camera: 2, dept_name: "Anniversory" },
    { camera: 3, dept_name: "Happy Birthday" },
    { camera: 1, dept_name: "Happy Birthday" },
    { camera: 5, dept_name: "Happy Birthday" },
    { camera: 4, dept_name: "Anniversory" },
  ];

  const [showImages, setShowImages] = useState(false);
  const toggleImages = () => {
    setShowImages(!showImages);
  };

  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  const imageArray = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="imageContainer">
      <div
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "45px",
          marginTop: "10px",
        }}
      >
        <button
          onClick={toggleImages}
          style={{
            marginLeft: "30px",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            backgroundColor: showImages ? "#007bff" : "#dc3545", // Change color based on showImages state
            color: "#fff", // Text color
            border: "none", // Remove border
            outline: "none", // Remove outline
          }}
        >
          {showImages ? "Hide Images" : "Show Images"}
        </button>
        <button
          style={{
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            backgroundColor: "#dc3545", // Change color based on showImages state
            color: "#fff", // Text color
            border: "none", // Remove border
            outline: "none", // Remove outline
          }}
        >
          Send
        </button>
      </div>

      <div className="parent">
        {showImages &&
          imageArray.map((image, index) => (
            <div className="imagecontainerchild" key={index}>
              <div className="img_child">
                <img src={image} alt="" onClick={() => openPopup(image)} />
                <div className="img_dept">
                  {cameraAndDept[index]?.dept_name}
                </div>
                {/* <div className="img_cam">
                  Cam: <span>{cameraAndDept[index]?.camera}</span>
                </div> */}
              </div>
            </div>
          ))}
      </div>
      {popupImage && (
        <div className="popup">
          <span className="close" onClick={closePopup}>
            &times;
          </span>
          <img src={popupImage} alt="" className="popup-image" />
        </div>
      )}
    </div>
  );
};

export default Generate;
