'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { submitContactQuery } from '../lib/api/contact';
import '../styles/PopupQuoote.scss';

export default function PopupQuoote({
  open,
  onClose,
  product = null,
  allowScroll,
  hedi = null,
}) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    product: '',
    query: '',
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: true });

  const onClosed = () => {
    onClose();
    if (allowScroll) allowScroll();
  };

  if (!open) return null;

  const getData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data, event) => {
    if (event) event.preventDefault();
    const { name, email, number, product: prodName, query } = formData;
    if (name && email && number && query) {
      try {
        const payload = new FormData();
        payload.append('name', name);
        payload.append('email', email);
        payload.append('number', number);
        payload.append('product', prodName || product?.title || 'General Query');
        payload.append('query', query);

        await submitContactQuery(payload);

        Swal.fire(
          'Query Sent Successfully',
          'Thank you for contacting Us, One of our representative will get back to you shortly',
          'success'
        );
        onClosed();
      } catch (error) {
        console.error('Error submitting quote:', error);
        Swal.fire('Error', 'Failed to send query. Please try again.', 'error');
      }
    }
  };

  return (
    <div>
      <div className="popupoverlay">
        <div className="popupForm">
          <div className="leftside">
            <p className="heading">
              Got an idea? <br />
              Let’s get in touch!
            </p>
            <p className="para">
              Let’s discuss your project and find out what we can do to provide value.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="rightside">
              <button className="cancel1" type="button" onClick={onClosed}>
                X
              </button>
              <p className="para1">I am interested in discussing my ideas with you for.</p>
              <div className="inpgrid">
                <input
                  className="inputbox"
                  placeholder="Enter Your Name"
                  name="name"
                  onKeyUp={getData}
                  onChange={getData}
                  {...register('name', { required: 'name is Required' })}
                />

                <input
                  className="inputbox"
                  placeholder="Enter Your Number"
                  type="text"
                  name="number"
                  onKeyUp={getData}
                  onChange={getData}
                  {...register('number', {
                    required: 'number is Required',
                    maxLength: 20,
                  })}
                />

                <input
                  className="inputbox"
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                  onKeyUp={getData}
                  onChange={getData}
                  {...register('email', { required: 'email is Required' })}
                />

                <input
                  className="inputbox"
                  placeholder="Enter Product Name"
                  name="product"
                  defaultValue={product?.title || ''}
                  onKeyUp={getData}
                  onChange={getData}
                />

                <textarea
                  className="textarea"
                  placeholder="Enter Message"
                  name="query"
                  onKeyUp={getData}
                  onChange={getData}
                  {...register('query', { required: 'query is Required' })}
                />
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
