//Imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; 

//Login function for Login form.
function Login() {
  
  const [email, setEmail] = useState(''); //The values of the email and messages are stored.
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 
  const [successMessage, setSuccessMessage] = useState(''); 
  const [Resetpassword, ResetPassword] = useState('');
  const navigate = useNavigate(); //This will navigate to a different page after the user logs in.

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccessMessage(''); 
    ResetPassword('');
    setLoading(true);

    try {
      
      //After a user logs in, it waits for firebase to complete the user login process.
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in user:', userCredential.user);

      //Using Local storage to save data.
      localStorage.setItem('firebaseToken', userCredential.user.accessToken); 

      //Message that is shown to the user if the log in was successful.
      setSuccessMessage('You are Successfully Logged in!');

      ResetPassword('An Email has been sent to you. Please check it to reset your password. ')

      //After the login is successful the user will be redirected after this amount of time.
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000); 
    } catch (err) {
      console.error('Login error:', err); 
      setError('Login failed. Please check your email and password.'); //This is the message the user gets if the login was not successful.
    } finally {
      setLoading(false);
    }
  };

  //This is the Login Structure of the form.
  return (
    
  <div className="d-flex justify-content-center align-items-center bg-white vh-100">
    <div className="bg-info p-4 rounded shadow-sm w-25">
      <h4 className="mb-4">Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
            <strong>Email</strong>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required />
  </div>
    <div className="mb-3">
      <label html="password" className="form-label">
        <strong>Password</strong>
          </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
              required />
            </div>
            {error && <div className="text-danger mb-3">{error}</div>}
            {successMessage && <div className="text-primary mb-3">{successMessage}</div>} {/* This displays the message. */}
            <button
            type="submit"
            className="btn btn-warning w-100"
            disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="mt-3 text-center">
        Don't have an account? <a href="/signup" className="text-danger">Sign Up here</a>    {/* If a user has not got an account yet they click this link.*/}
        <p className="mt-3 text-center">
        Forgotten your password? <a href="/signup" className="text-primary">Click me to reset</a>  {/* If a user has forgotten their password they can
         click this link for an email to be sent to them*/}
        </p>
        </p>
      </div>
      {error && <div className="text-danger mb-3">{error}</div>}
        {ResetPassword && <div className="text-success mb-3">{ResetPassword}</div>}
        </div>
  );
}

export default Login;
