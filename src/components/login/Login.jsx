import React from 'react';
import './Login.css';

const Login= ({ onClick }) => {
  return (
    <div className='bg'>
      <div className='logborder'>
      <h1>Login</h1>
      <div className='emailenter'>
      <input type='text' placeholder='Email' id='email' required/>
      </div>
      <div className='emailenter'>
      <input type='text' placeholder='Password' name="password" required/>
      </div>
        <button>Login</button>
    </div>
      </div>
  );
}

export default Login;
