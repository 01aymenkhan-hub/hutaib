'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';
import { submitContactQuery } from '../lib/api/contact';
import '../styles/ContactusMianArea.scss';

export default function ContactusMianArea() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    company: '',
    query: '',
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: true });

  const getData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data) => {
    const { name, email, number, company, query } = formData;
    if (name && email && number && company && query) {
      try {
        const payload = new FormData();
        payload.append('name', name);
        payload.append('email', email);
        payload.append('number', number);
        payload.append('product', company);
        payload.append('query', query);

        await submitContactQuery(payload);

        Swal.fire(
          'Query Sent Successfully',
          'Thank you for contacting Us, One of our representative will get back to you shortly',
          'success'
        );
      } catch (error) {
        console.error('Contact submission error:', error);
        Swal.fire('Error', 'Failed to submit inquiry. Please try again.', 'error');
      }
    }
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
            We&apos;d love to hear from <span className="contactyou">you!</span>
          </p>
          <div className="iconwraper">
            <div className="contactinnerinfo">
              <div className="iconsec">
                <span className="icon">
                  <MdLocationOn role="img" aria-label="Location" title="Location" />
                </span>
                <div className="data">
                  <p>
                    <span className="extradata">Office address:</span>
                    D-3, S.I.T.E. Super Highway, Scheme 33, Phase I, Karachi-75850, Pakistan.
                  </p>
                </div>
              </div>
            </div>

            <div className="contactinnerinfo">
              <div className="iconsec">
                <span className="icon">
                  <MdEmail role="img" aria-label="Email" title="Email" />
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
                  <MdPhone role="img" aria-label="Phone" title="Phone" />
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
                    name="name"
                    onKeyUp={getData}
                    onChange={getData}
                    {...register('name', { required: 'name is Required' })}
                  />
                </div>
                <div className="formfield">
                  <p>Email*</p>
                  <input
                    required
                    type="email"
                    name="email"
                    onKeyUp={getData}
                    onChange={getData}
                    {...register('email', { required: 'email is Required' })}
                  />
                </div>
                <div className="formfield">
                  <p>Contact Number*</p>
                  <input
                    required
                    type="text"
                    name="number"
                    onKeyUp={getData}
                    onChange={getData}
                    {...register('number', {
                      required: 'number is Required',
                      maxLength: 20,
                    })}
                  />
                </div>
                <div className="formfield">
                  <p>Company Name*</p>
                  <input
                    required
                    type="text"
                    name="company"
                    onKeyUp={getData}
                    onChange={getData}
                    {...register('company', { required: 'company is Required' })}
                  />
                </div>
                <div className="textareasec">
                  <div className="textarea">
                    <p className="txt">Query</p>
                    <textarea
                      required
                      name="query"
                      onKeyUp={getData}
                      onChange={getData}
                      {...register('query', { required: 'query is Required' })}
                    />
                  </div>
                </div>
              </div>

              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeUK_wfAAAAAGE6NqKc2S6MyENYecFF4DSyPOUC'}
                theme="dark"
              />
              <button type="submit" className="contactbtn">
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
