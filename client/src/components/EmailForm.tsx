import axios from 'axios';
import React, { useState } from 'react';

interface EmailFormProps {
  id: string;
}

const EmailForm: React.FC<EmailFormProps> = ({ id }) => {
  const [emailFrom, setEmailFrom] = useState('');
  const [emailTo, setEmailTo] = useState('');
  const [message, setMessage] = useState(null);

  const handleEmail = async e => {
    e.preventDefault();

    try {
      const { data } = await axios({
        method: 'POST',
        url: 'api/files/email',
        data: {
          id,
          emailFrom,
          emailTo,
        },
      });

      setMessage(data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-full p-2 space-y-3'>
      <h3>You can also send the file through email.</h3>
      <form
        className='flex flex-col items-center justify-center w-full p-2 space-y-3'
        onSubmit={handleEmail}
      >
        <input
          className='p-1 text-white bg-gray-800 border-2 focus:outline-none'
          type='email'
          placeholder='Email From'
          required
          onChange={e => setEmailFrom(e.target.value)}
          value={emailFrom}
        />
        <input
          className='p-1 text-white bg-gray-800 border-2 focus:outline-none'
          type='email'
          placeholder='Email To'
          required
          onChange={e => setEmailTo(e.target.value)}
          value={emailTo}
        />
        <button className='button' type='submit'>
          Send
        </button>
      </form>
      {message && <p className='font-medium text-blue-500'>{message}</p>}
    </div>
  );
};

export default EmailForm;
