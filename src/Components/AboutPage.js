import React from 'react';
import Aboutus from '../Images/Aboutus.png'; //Importing the Image

function AboutPage() {     //Text styling
  const paragraphStyle = {
    color: '#333333',
    fontSize: '16px',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '2px solid rgb(2, 4, 2)', 
    backgroundColor: '#DFFFD6',  
    borderRadius: '30px'  
  };

  return (
    <div>
  <h1>About GreenFuture</h1>
  <p style={paragraphStyle}>GreenFuture, an environmental consulting firm based in London, has long been recognised for its
  trailblazing work in sustainability. With a workforce of 2,500 employees spread across 20 offices in 15
  different countries, the company built a global reputation for innovation in renewable energy, ecofriendly
  urban development, and environmental policy.
    <div>
  Leadership at GreenFuture was concerned that despite the immense creativity and technical expertise of 
  their staff, new ideas were increasingly being lost or left undeveloped. Many employees generated 
  creative solutions, but these ideas werent getting the visibility or support needed to transform them into 
  actionable projects. For a firm whose success depended on continuous innovation, this slowdown posed 
  a serious risk to its competitive edge. 
    </div>
    <div>
  Recognising this challenge, GreenFuture embarked on an ambitious project: implementing a cutting
  edge Innovation Management System. The goal was to capture, evaluate, and cultivate ideas more 
  effectively, encouraging collaboration across the company's global network.
    </div>
  </p> 
  {/*This pharagraph describes what the company is about.*/}

<img src={Aboutus} alt="About us" style={{ width: '500px', height: 'auto' }} />  {/*The image is resized and aligned in the centre of the page.*/}
    </div>
  );
}

export default AboutPage;
