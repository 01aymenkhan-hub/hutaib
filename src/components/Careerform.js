import React from "react";
import "./css/Careerform.scss";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import {
  FaFacebookMessenger,
  FaMailBulk,
  FaPhoneAlt,
  FaClock,
  FaBolt,
  FaMapMarker,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import Swal from "sweetalert2";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import a from "../assets/joinourteam.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card } from "react-bootstrap";

import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
  GoogleReCaptcha,
  ReCapt,
} from "react-google-recaptcha-v3";
import ReCAPTCHA from "react-google-recaptcha";

function Careerform() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [cv, setCV] = useState();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: true });
  let initialVailue = {
    name: "",
    email: "",
    number: "",
    appliedfor: "",
    fileupload: "",
  };
  const getDataFile = (e) => {
    console.log("CVVVVCSVCVCVCVCVCV", e.target.files[0]);
    setCV(e.target.files[0]);
  };
  const url = "https://hutaib.admin.simboz.website/api/contact-queries/careers";

  const [formData, setFormData] = useState(initialVailue);

  const getData = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
    const { name, email, number, appliedfor, fileupload } = formData;
    if (name && email && number) {
      const formaData = new FormData();
      formaData.append("name", name);
      formaData.append("email", email);
      formaData.append("number", number);
      formaData.append("appliedfor", appliedfor);
      console.log("CVVVVVVV", cv);
      formaData.append("fileupload", cv);

      axios.post(url, formaData).then((res) => {
        console.log(res);
        if (res.data) {
          Swal.fire(
            "Query Sent Successfully",
            "Thank you for contacting Us, One of our representative will get back to you shortly",
            "success"
          );

          setIsSubmit(true);
          setFormData(
            (initialVailue = {
              name: "",
              email: "",
              number: "",
              appliedfor: "",
              fileupload: "",
            })
          );
        }
      });
    } else {
      Swal.fire("Error", "Empty Field Found", "error");
    }
  };

  const [dyval, setDyval] = useState("");
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  const setinputval = (data) => {
    setDyval(data);
    executeScroll();
  };
  const varifyCallback = (e) => {
    alert(e);
    console.log(e);
  };
  // captcha work
  const { executeRecaptcha } = useGoogleReCaptcha();
  const inputRef = useRef(null);
  function handleClick(data) {
    document.getElementById("dynamicdata").value = data;
    console.log(data);

    executeScroll();
  }

  return (
    <div>
      <div className="accordian">
        <h2 className="acchead">We are looking For</h2>
        <Accordion>
          <Accordion.Item style={{ marginBottom: "5px" }} eventKey="0">
            <Accordion.Header className="acctitle">
              Head of Sales
            </Accordion.Header>
            <Accordion.Body>
              <p>
                We require a sales head who can oversee the entire sales
                operations of the organization.
              </p>
              <p>
                As the head of sales your duties and responsibilities would
                include but certainly not limited to:
              </p>
              <ul>
                <li>
                  Develop and execute strategic plans to achieve sales targets.
                </li>
                <li>
                  Create and communicate sales goals and ensure all Sales
                  managers and executives are informed on the progress of those
                  goals.
                </li>
                <li>
                  Build and maintain long-lasting, strong relationships with
                  customers while partnering with them to better understand
                  their business objectives and needs.
                </li>
                <li>Understand industry-specific trends and landscapes.</li>
                <li>
                  Effectively communicate value propositions through
                  presentations and proposals.
                </li>
                <li>
                  Report on forces that shift strategic directions of accounts
                  and tactical budgets.
                </li>
                <li>
                  Closely work with the marketing team with the implementation
                  of company objectives.
                </li>
              </ul>
              <p>
                Sales head will be responsible for the entire sales of the
                company. They will lead the sales team by developing and
                implementing sales plans to increase the company’s profit and
                motivating the employees to hit these sales goals. The sales
                head would also conduct research on the competition and supply
                and demand costs to determine how much their products are worth.
              </p>
              <p>
                At the end of the month or quarter, the Sales head drafts a
                report and presents on it to the management and directors.
                They’ll use the leadership team’s feedback to add adjustments
                and improvements to their current sales target strategies.
              </p>
              <p>Core Skills and competencies required for the Job</p>
              <ul>
                <li>Excellent written and verbal communications skills</li>
                <li>
                  Proven ability to drive the sales process from start to finish
                </li>
                <li>
                  Excellent listening, negotiation, and presentation skills
                </li>
                <li>
                  Proven ability to articulate the distinct aspects of services
                  and products
                </li>
                <li>
                  Knowledge of how to develop client-focused, differentiated,
                  and achievable solutions
                </li>
                <li>
                  Understanding of how to position products against competitors.
                </li>
              </ul>
              <p>
                The Sales head should preferably shave a science background with
                an MBA in relative sales field.
              </p>
              <p>A Minimum 10 to 15 years of sales.</p>
              <button
                className="formsubmit"
                onClick={() => {
                  handleClick("Head of Sales");
                }}
              >
                Apply now
              </button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Junior accounts executive</Accordion.Header>
            <Accordion.Body>
              <p>As a Junior Accounts executive you are required to:</p>
              <ul>
                <li>File Taxes on Online Portal and Do Data Entry</li>
                <li>Filing Import Related documents and Data Entry</li>
                <li>
                  Should have some knowledge of ERP Systems and be able to input
                  data in the system
                </li>
                <li>Managing Day to Day Work</li>
                <p>Minimum Qualification Required B. Com</p>
              </ul>
              <button
                className="formsubmit"
                onClick={() => {
                  handleClick("Junior accounts executive");
                }}
              >
                Apply now
              </button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <h2 ref={myRef} className="appliedfor">
        Application Form
      </h2>

      <div className="contactusformcont">
        <div className="contactforminner">
          <div className="contactinnerleft">
            <img src={a} className="image" title="Hutaib Career" alt="Hutaib Career" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contactinnerright">
              <div className="ali">
                <div className="formfields">
                  <div className="formfield">
                    <p>Full Name*</p>
                    <input
                      required
                      type="text"
                      // name="name"
                      onKeyUp={getData}
                      {...register("name", {
                        required: "name is Required",
                        pattern: {
                          value:
                            /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/i,
                          message: "Invalid Name", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                    />

                    {/* <small className="text-danger">name is required</small> */}
                  </div>
                  <div className="formfield">
                    <p>Email*</p>
                    <input
                      required
                      type="email"
                      // name="email"
                      onKeyUp={getData}
                      {...register("email", {
                        required: "email is Required",
                        // maxLength: 20,
                      })}
                    />
                  </div>
                </div>
                {/* -- */}
                <div className="formfields">
                  <div className="formfield">
                    <p>Contact Number*</p>
                    <input
                      required
                      type="text"
                      // name="number"
                      onKeyUp={getData}
                      {...register("number", {
                        required: "number is Required",
                        maxLength: 20,
                        pattern: {
                          value:
                            /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
                          message: "error message", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                    />
                  </div>
                  <div className="formfield">
                    <p>Applied For*</p>
                    <input
                      required
                      style={{ background: "white" }}
                      type="text"
                      ref={inputRef}
                      onKeyUp={getData}
                      id="dynamicdata"
                      {...register("appliedfor", {
                        required: "appliedfor",
                        // maxLength: 20,
                      })}
                    />
                  </div>
                </div>
                <div className="textareasec">
                  <div className="textarea">
                    <p className="txt">Cv*</p>
                    <input
                      type="file"
                      name="fileupload"
                      id=""
                      onChange={getDataFile}
                    />
                  </div>
                </div>
                <ReCAPTCHA
                  sitekey="6LeUK_wfAAAAAGE6NqKc2S6MyENYecFF4DSyPOUC"
                  data-theme="dark"
                  onKeyUp={varifyCallback}
                />
                <button onClick={onSubmit} className="contactbtn">
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Careerform;
