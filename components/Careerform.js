'use client';

import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';
import Accordion from 'react-bootstrap/Accordion';
import { submitCareerApplication } from '../lib/api/contact';
import '../styles/Careerform.scss';

export default function Careerform() {
  const [cv, setCV] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    appliedfor: '',
  });

  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const myRef = useRef(null);

  const executeScroll = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (jobTitle) => {
    setFormData((prev) => ({ ...prev, appliedfor: jobTitle }));
    executeScroll();
  };

  const getData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getDataFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCV(e.target.files[0]);
    }
  };

  const onSubmit = async (data) => {
    const { name, email, number, appliedfor } = formData;
    if (name && email && number) {
      try {
        const payload = new FormData();
        payload.append('name', name);
        payload.append('email', email);
        payload.append('number', number);
        payload.append('appliedfor', appliedfor);
        if (cv) payload.append('fileupload', cv);

        await submitCareerApplication(payload);

        Swal.fire(
          'Query Sent Successfully',
          'Thank you for contacting Us, One of our representative will get back to you shortly',
          'success'
        );

        setFormData({
          name: '',
          email: '',
          number: '',
          appliedfor: '',
        });
        setCV(null);
      } catch (error) {
        console.error('Career form submission error:', error);
        Swal.fire('Error', 'Failed to submit application. Please try again.', 'error');
      }
    } else {
      Swal.fire('Error', 'Empty Field Found', 'error');
    }
  };

  return (
    <div>
      <div className="accordian">
        <h2 className="acchead">We are looking For</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item style={{ marginBottom: '5px' }} eventKey="0">
            <Accordion.Header className="acctitle">Head of Sales</Accordion.Header>
            <Accordion.Body>
              <p>We require a sales head who can oversee the entire sales operations of the organization.</p>
              <p>As the head of sales your duties and responsibilities would include but certainly not limited to:</p>
              <ul>
                <li>Develop and execute strategic plans to achieve sales targets.</li>
                <li>Create and communicate sales goals and ensure all Sales managers and executives are informed on the progress of those goals.</li>
                <li>Build and maintain long-lasting, strong relationships with customers while partnering with them to better understand their business objectives and needs.</li>
                <li>Understand industry-specific trends and landscapes.</li>
                <li>Effectively communicate value propositions through presentations and proposals.</li>
                <li>Report on forces that shift strategic directions of accounts and tactical budgets.</li>
                <li>Closely work with the marketing team with the implementation of company objectives.</li>
              </ul>
              <p>
                Sales head will be responsible for the entire sales of the company. They will lead the sales team by developing and implementing sales plans to increase the company’s profit and motivating the employees to hit these sales goals.
              </p>
              <p>Core Skills and competencies required for the Job</p>
              <ul>
                <li>Excellent written and verbal communications skills</li>
                <li>Proven ability to drive the sales process from start to finish</li>
                <li>Excellent listening, negotiation, and presentation skills</li>
                <li>Proven ability to articulate the distinct aspects of services and products</li>
              </ul>
              <p>The Sales head should preferably have a science background with an MBA in relative sales field.</p>
              <p>A Minimum 10 to 15 years of sales.</p>
              <button className="formsubmit" onClick={() => handleClick('Head of Sales')}>
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
                <li>Should have some knowledge of ERP Systems and be able to input data in the system</li>
                <li>Managing Day to Day Work</li>
              </ul>
              <p>Minimum Qualification Required B. Com</p>
              <button className="formsubmit" onClick={() => handleClick('Junior accounts executive')}>
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
            <img src="/assets/images/joinourteam.jpg" className="image" title="Hutaib Career" alt="Hutaib Career" />
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
                      value={formData.name}
                      onChange={getData}
                      onKeyUp={getData}
                      {...register('name', { required: 'name is Required' })}
                    />
                  </div>
                  <div className="formfield">
                    <p>Email*</p>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={getData}
                      onKeyUp={getData}
                      {...register('email', { required: 'email is Required' })}
                    />
                  </div>
                </div>

                <div className="formfields">
                  <div className="formfield">
                    <p>Contact Number*</p>
                    <input
                      required
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={getData}
                      onKeyUp={getData}
                      {...register('number', {
                        required: 'number is Required',
                        maxLength: 20,
                      })}
                    />
                  </div>
                  <div className="formfield">
                    <p>Applied For*</p>
                    <input
                      required
                      style={{ background: 'white' }}
                      type="text"
                      name="appliedfor"
                      value={formData.appliedfor}
                      onChange={getData}
                      onKeyUp={getData}
                      {...register('appliedfor', { required: 'appliedfor is Required' })}
                    />
                  </div>
                </div>
                <div className="textareasec">
                  <div className="textarea">
                    <p className="txt">Cv*</p>
                    <input type="file" name="fileupload" onChange={getDataFile} />
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
    </div>
  );
}
