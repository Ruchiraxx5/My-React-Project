import React from 'react';
import photo from '../Images/photo.jpg'; //Importing the Image



function HomePage() { //Text styling for Heading 1
  const HomeStyle = {
    color: '#333333',
    fontSize: '30px',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '2px solid rgb(111, 204, 172)', 
    backgroundColor: '#DFFFD6',  
    borderRadius: '20px',
    justifyContent: 'center',  
    alignItems: 'center', 
    display: 'inline-block',
    display: 'flex',  //Making the box around the text in the center of the page.
  };

  const Substyle = {  //Text styling for Heading 2
    color: '#333333',
    fontSize: '20px',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
 };

  return (
    <div>
      <h1 style={HomeStyle}>Welcome to Greenfuture!</h1>  {/*This Title is displayed in Heading 1*/}
      <h2 style={Substyle}>Your Journey of Innovation starts here.</h2>
      <div/>
      <img src={photo} alt="Photo" style={{ width: '500px', height: 'auto',display: 'block', marginLeft: 'auto', 
      marginRight: 'auto', marginTop: '20px', }} />  {/*Image is imported*/}
    
      
    </div>
 );
 
}

export default HomePage;
