import React, { useState } from 'react';
import '../styles/Login.css';


import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();

    if (username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD) {
      props.logged(true);
    } else {
      setError(true);
    }
    
  }

  const usernameChange = (e) => {
    setUsername(e.target.value);
  }

  const passwordChange = (e) => {
    setPassword(e.target.value);
  }

  const closeError = () => {
    setError(false);
  }

  return (
    <div className="login">
       <Stack sx={{ width: '100%' }} spacing={2}>

      
      <h1>Log In</h1>

      <form className="loginForm" onSubmit={formSubmit}>
        <input type="text" placeholder="Username" onChange={usernameChange} />
        <input type="password" placeholder="Password" onChange={passwordChange} />

        {
          error ?
          <div className="error">
            <Alert severity="error">Username or password is incorrect!</Alert>
            <p className="timesSign" onClick={closeError}>×</p>
          </div> :
          null
        }

        <button>Log In</button>
      </form>

      </Stack>

    </div>
  );
}

export default Login;
