import React from "react";
import "./css/PopupQuoote.scss";
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

import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
  GoogleReCaptcha,
  ReCapt,
} from "react-google-recaptcha-v3";
import ReCAPTCHA from "react-google-recaptcha";
function PopupQuoote({
  open,
  onClose,
  product = null,
  allowScroll,
  hedi = null,
}) {
  const [isSubmit, setIsSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: true });




  let initialVailue = {
    name: "",
    number: "",
    email: "",
    product: "",
    message: "",
  };



  const url = "https://hutaib.admin.simboz.website/api/contact-queries/contact";

  const [quoteFormData, setQuoteFormData] = useState(initialVailue);
  const [formData, setFormData] = useState(initialVailue);


  // const getFormData = (e) => {
  //   // e.preventDefault();

  //   console.log(e.target.value);
  //   setQuoteFormData({ ...quoteFormData, [e.target.name]: e.target.value });
  // };

  // const varifyCallback = (e) => {
  //   alert(e);
  //   console.log(e);
  // };
  // captcha work
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onClosed = () => {
    onClose();
    allowScroll();
  };

  if (!open) return null;
  const getData = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // function clearFields(event) {
  //   // we have to convert event.target to array
  //   // we use from method to convert event.target to array
  //   // after that we will use forEach function to go through every input to clear it
  //   Array.from(event.target).forEach((e) => (e.value = ""));
  // }
  const onSubmit = (data, event) => {

    console.log(event);

    setError(
      "test",
      { type: "focus", message: "Double Check This" },
      { shouldFocus: true }
    );
    console.log(initialVailue);
    event.preventDefault();
    const { name, email, number, product, query } = formData;
    if (name && email && number && product && query) {
      const formaData = new FormData();
      formaData.append("name", name);
      formaData.append("email", email);
      formaData.append("number", number);
      formaData.append("product", product);
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
            console.log(formData)
            setIsSubmit(true);
            onClosed()
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

  return (
    <div>
      <div className="popupoverlay">

        <div className="popupForm">
          <div className="leftside">
            <p className="heading">
              Got an idea? <br />Let’s get in touch!
            </p>
            <p className="para">Let’s discuss your project and find out what we can do to provide value.</p>

          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="rightside">
              <button className="cancel1" onClick={onClosed}>
                X
              </button>
              <p className="para1">I am interested in discussing my ideas with you for.</p>
              <div className="inpgrid">


                <input
                  className="inputbox"
                  placeholder="Enter Your Name"
                  onKeyUp={getData}
                  {...register("name", {
                    required: "name is Required",
                  })}
                />


                <input
                  className="inputbox"
                  placeholder="Enter Your Number"
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


                <input
                  className="inputbox"
                  placeholder="Enter Your Email"
                  type="email"
                  // name="email"
                  onKeyUp={getData}
                  {...register("email", {
                    required: "email is Required",
                  })}
                />


                <input
                  className="inputbox"
                  placeholder="Enter Product Name"
                  name="product"
                  onKeyUp={getData}

                />


                <textarea
                  className="textarea"
                  placeholder="Enter Message"
                  type="text"
                  // name="query"
                  onKeyUp={getData}
                  {...register("query", {
                    required: "query is Required",
                  })}
                />


              </div>
              <button >Submit</button>

            </div>
          </form>
        </div>



        {/* <div className={product.title ? "title" : 'title2'}>
          {product.title ? <p className="popuppara">{product.title}</p>
            : <p className="popuppara2">Hutaib Industrial Solutions <br /><span>Get Query</span></p>}

          <button className="cancel" onClick={onClosed}>
            X
          </button>
        </div> */}
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <div className="popupcont">
            <div className="ali">
              <div className="formfield">
                <p>Full Name*</p>
                <input
                  className="inp"
                  required
                  type="text"
                  onKeyUp={getFormData}
                  {...register("name", {
                    required: "name is Required",
                    pattern: {
                      value:
                        /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/i,
                      message: "Invalid Name", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />

              </div>
              <div className="formfield">
                <p>Email*</p>
                <input
                  className="inp"
                  required
                  type="email"
                  // name="email"
                  onKeyUp={getFormData}
                  {...register("email", {
                    required: "email is Required",
                  })}
                />
              </div>
              <div className="formfield">
                <p>Contact Number*</p>
                <input
                  className="inp"
                  required
                  type="text"
                  onKeyUp={getFormData}
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
                <div className="formfield">
                  <p>Company Name</p>
                  <input
                    className="inp"
                    required
                    style={{ background: "white" }}
                    type="text"
                    onKeyUp={getFormData}
                    id="conpany"
                    {...register("conpany", {
                      required: "conpany",
                    })}
                  />
                </div>
                <div className="formfield">
                  <p>Message</p>
                  <textarea
                    className="inp"
                    required
                    style={{ background: "white" }}
                    type="text"
                    // value={dyval}
                    onKeyUp={getFormData}
                    id="message"
                    {...register("message", {
                      required: "message",
                    })}
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
        </form> */}
      </div>


    </div>
  );
}

export default PopupQuoote;
