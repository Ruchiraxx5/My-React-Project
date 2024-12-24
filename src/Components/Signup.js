//Imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';



//Sign up function for user registration. 
function Signup() {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

//The Input function handles changes and updates to the new value.
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  //The Submit function handles the form submissions.
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //Waiting for user details to be processed and authorised.
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredential.user;

      //Saving the users data in Firebase database when they sign up.
      await setDoc(doc(db, 'users', user.uid), {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      alert('User registered successfully!'); //This Message is displayed when the user signs up.
      navigate('/Login'); //The user is navigated to the login page after signing up.
    } catch (error) {
      console.error(error.message);
      alert('Sign-up failed');  // If the sign up is not successful, this message will display.
    }
  };

  //Sign up form
  return (
<div className="d-flex justify-content-center align-items-center bg-primary vh-100">
  <div className="bg-white p-3 rounded w-25">
    <h4>Sign-Up</h4>
     <form onSubmit={handleSubmit}>   {/*User enters their name*/}
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleInput}
          className="form-control" />
        </div>
        <div className="mb-3">
          <label>Email</label>   {/*User enters their email*/}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleInput}
            className="form-control" />
        </div>
        <div className="mb-3">
          <label>Password</label>  {/*User enters their password*/}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleInput}
            className="form-control" />
        </div>
        <button type="submit" className="btn btn-success w-100"> {/*Sign up button*/}
        Sign Up
        </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
