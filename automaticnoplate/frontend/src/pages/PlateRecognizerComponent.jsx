// import React, { useEffect } from "react";
// import fetch from "node-fetch";
// import FormData from "form-data";
// import fs from "fs";

// const PlateRecognizerComponent = () => {
//   useEffect(() => {
//     const image_path = "../Images/"; // provide the image path
//     const body = new FormData();
//     body.append("upload", fs.createReadStream(image_path));
//     // Or body.append('upload', base64Image);
//     body.append("regions", "us-ca"); // Change to your country

//     fetch("https://api.platerecognizer.com/v1/plate-reader/", {
//       method: "POST",
//       headers: {
//         Authorization: "Token 5ffed87e47bdb30bb8ccbc615eb80f13e131397b",
//       },
//       body: body,
//     })
//       .then((res) => res.json())
//       .then((json) => console.log(json))
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return <div>Plate Recognizer Component</div>; // JSX needs to return something
// };

// export default PlateRecognizerComponent;
