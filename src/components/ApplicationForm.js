import React, { useState } from "react";
import axios from "axios";

import "./css/ApplicationForm.scss";
import Swal from "sweetalert2";

function ApplicationForm() {
  const initialVailue = {
    name: "",
    email: "",
    appliedfor: "",
    contactnumber: "",
    fileupload: "",
  };

  const [applicationform, setApplicationform] = useState(initialVailue);
  const [cv, setCV] = useState();

  const getData = (e) => {
    e.preventDefault();
    setApplicationform({ ...applicationform, [e.target.name]: e.target.value });
  };

  const getDataFile = (e) => {
    setCV(e.target.files[0]);
  };

  const url = "https://hutaib.admin.simboz.website/api/contact-queries/careers";

  const submitData = (e) => {
    e.preventDefault();
    const { name, email, appliedfor, contactnumber, fileupload } =
      applicationform;
    console.log(applicationform);
    if (name && email && appliedfor && contactnumber) {
      const subapplicationform = new FormData();
      subapplicationform.append("name", name);
      subapplicationform.append("email", email);
      subapplicationform.append("appliedfor", appliedfor);
      subapplicationform.append("contactnumber", contactnumber);
      subapplicationform.append("fileupload", cv);

      axios
        .post(url, subapplicationform)
        .then((res) => {
          if (res) {
            Swal.fire(
              "Application Submitted Successfully",
              "Thank you for Applying, One of our representative will get back to you soon",
              "success"
            );
            setApplicationform(
              (initialVailue = {
                name: "",
                email: "",
                appliedfor: "",
                contactnumber: "",
                fileupload: "",
              })
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });

      // console.log("subapplicationform ======>",typeof(subapplicationform))
    } else {
      alert("field is empty");
    }
  };

  return (
    <div className="form_container">
      <div className="image_sec1"></div>
      <div className="form_sec">
        <div className="innerform">
          <div className="hrl">
            <h1>JOIN OUR TEAM</h1>
            <span></span>
          </div>
          <span>
            <p className="marg">Name :</p>
            <input required type="text" name="name" id="" onChange={getData} />
          </span>
          <span>
            <p className="marg">Email :</p>
            <input
              required
              type="email"
              name="email"
              id=""
              onChange={getData}
            />
          </span>
          <span>
            <p className="marg">Phone no :</p>
            <input
              required
              type="tel"
              name="contactnumber"
              id=""
              onChange={getData}
            />
          </span>
          <span>
            <p className="marg">Applied for :</p>
            <input
              required
              type="text"
              name="appliedfor"
              id=""
              onChange={getData}
            />
          </span>
          <span className="a_lign">
            <p>CV </p>
            <input type="file" name="fileupload" id="" onChange={getDataFile} />
          </span>
          <span>
            <button onClick={submitData}>Submit</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;
