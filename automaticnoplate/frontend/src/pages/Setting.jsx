import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS

function Setting() {
  const [autoSendMail, setAutoSendMail] = useState(false);
  console.log("hey i am autosend", autoSendMail);

  const handleToggleAutoSendMail = () => {
    setAutoSendMail(!autoSendMail);
    const flag = !autoSendMail ? "START" : "STOP";
    // Send request to the API
    fetch("http://localhost:4002/api/v1/master/mailsendcronjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ flag }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Do something with the response data if needed
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="container  mt-5 ">
      <div>
        <h2 className="add_emp" style={{ marginLeft: "30px" }}>
          Enable auto send mail
        </h2>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="autoSendMailSwitch"
            checked={autoSendMail}
            onChange={handleToggleAutoSendMail}
            style={{
              fontSize: "20px",
              marginLeft: "12px",
            }}
          />
          <label
            className="form-check-label form-label"
            htmlFor="autoSendMailSwitch"
            style={{ marginLeft: "10px" }}
          >
            {autoSendMail ? "Start" : "Stop"} auto send mail
          </label>
        </div>
      </div>
    </div>
  );
}

export default Setting;
