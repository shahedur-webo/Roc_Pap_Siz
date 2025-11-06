import React, { useState } from 'react';
import Magnetic from '../MagneticButton/MagneticButton';
import './style.scss';

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/2ec632c0-9b64-11ee-9dec-893a2542e245'; // TODO - update to the correct endpoint

const FormFields = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className='form-succes'>
          You've successfully delivered your message.
        </div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method='POST'
      className='form-fields'>
      <div className='form-fields-field'>
        <input
          type='text'
          placeholder='Your name *'
          name='name'
          className='focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none'
          required
        />
      </div>
      <div className='form-fields-field'>
        <input
          type='email'
          placeholder='Your email *'
          name='email'
          className='focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none'
          required
        />
      </div>
      <div className='form-fields-field'>
        <textarea
          placeholder='Your message *'
          name='message'
          className='focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none'
          required
        />
      </div>
      <div className='form-btn'>
        <Magnetic>
          <button
            className='button'
            type='submit'>
            <span className='button-text'>Send it</span>
            <span className='color-wrap'>
              <span className='colorBtn'></span>
              <span className='colorBtn'></span>
            </span>
          </button>
        </Magnetic>
      </div>
    </form>
  );
};

export default FormFields;
