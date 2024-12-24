import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  // Import Link for navigation
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarComponent from "./Components/navbar";




//Different pages
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import Voting from './Components/Voting';
import Signup from './Components/Signup';
import Login from './Components/Login';
import FAQPage from './Components/FAQ.page';
import ContactUsPage from './Components/ContactUs.page';





function App() {
  return (
    <div>
      {/* Navbar */}
      <NavbarComponent />

      {/* Wrapper */}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Voting" element={<Voting />} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ContactUs.page" element={<ContactUsPage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>

      </div>
  );
};

export default App;

    
      


   

        
        

  






