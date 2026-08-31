import React from "react";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./css/ContactusMianArea.scss";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
function ContactusMianArea() {
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: true });
  const initialVailue = {
    name: "",
    email: "",
    number: "",
    company: "",
    query: "",
  };

  const url = "https://hutaib.admin.simboz.website/api/contact-queries/contact";

  const [formData, setFormData] = useState(initialVailue);

  const getData = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
    setError(
      "test",
      { type: "focus", message: "Double Check This" },
      { shouldFocus: true }
    );
    console.log(data);
    // e.preventDefault();
    const { name, email, number, company, query } = formData;
    if (name && email && number && company && query) {
      const formaData = new FormData();
      formaData.append("name", name);
      formaData.append("email", email);
      formaData.append("number", number);
      formaData.append("product", company);
      formaData.append("query", query);

      axios
        .post(url, formaData)
        .then((res) => {
          console.log(res);
          if (res.data) {
            Swal.fire(
              "Query Sent Successfully",
              "Thank you for contacting Us, One of our representative will get back to you shortly",
              "success"
            );
            setIsSubmit(true);
            setInterval(() => {
              window.location.reload(false);
            }, 2000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      // } else {
      //   Swal.fire("Error", "Empty Field Found", "error");
    }
  };
  const varifyCallback = (e) => {
    alert(e);
    console.log(e);
  };
  return (
    <div className="contactus_formcont">
      <div className="contactforminner">
        <div className="contactinnerleft">
          <div className="subh">
            <p className="line"></p>
            <p>For Further Information</p>
          </div>
          <p className="contacthedi">
            We'd love to hear from <span className="contactyou">you!</span>
          </p>
          <div className="iconwraper">
            <div className="contactinnerinfo">
              <div className="iconsec">
                <span className="icon">
                  <MdLocationOn role="img" aria-label="Location" title='Location' />
                </span>
                <div className="data">
                  <p>
                    <span className="extradata">Office address:</span>
                    D-3, S.I.T.E. Super Highway, Scheme 33, Phase I,
                    Karachi-75850, Pakistan.
                  </p>
                </div>
              </div>
            </div>

            <div className="contactinnerinfo">
              <div className="iconsec">
                <span className="icon">
                  <MdEmail role="img" aria-label="Email" title='Email' />
                </span>
                <div className="data">
                  <p>
                    <span className="extradata">Email:</span>
                    <a href="mailto:info@hutaib.org">info@hutaib.org</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="contactinnerinfo">
              <div className="iconsec">
                <span className="icon">
                  <MdPhone role="img" aria-label="Phone" title='Phone' />
                </span>
                <div className="data">
                  <p>
                    <span className="extradata">Contact:</span>
                    <a href="tel:(021) 35661603">(021) 35661603</a>
                    <br />
                    <a href="tel:+92 309 7772468">0309 7772468</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                    })}
                  />
                </div>
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
                  <p>Company Name*</p>
                  <input
                    required
                    type="text"
                    // name="company"
                    onKeyUp={getData}
                    {...register("company", {
                      required: "company is Required",
                      maxLength: 20,
                    })}
                  />
                </div>
                <div className="textareasec">
                  <div className="textarea">
                    <p className="txt">Query</p>
                    <textarea
                      required
                      type="text"
                      // name="query"
                      onKeyUp={getData}
                      {...register("query", {
                        required: "query is Required",
                      })}
                    />
                  </div>
                </div>
              </div>

              <ReCAPTCHA
                sitekey="6LeUK_wfAAAAAGE6NqKc2S6MyENYecFF4DSyPOUC"
                data-theme="dark"
                onKeyUp={varifyCallback}
              />
              <button className="contactbtn">Send message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactusMianArea;
