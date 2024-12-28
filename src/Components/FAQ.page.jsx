import React from "react";
//FAQ drop down feature
const FAQPage = () => {
  return (
    
    <div className="container pt-3">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
 
             Why can I not Login?  {/*Question here */}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="Why can I not Login?">     {/*Description and answer displayed here */}
              <strong>Answer:</strong> If you are not able to login, please make sure you have signed up first. First go to the 
              Sign up page it is located in the navigation bar on the top of the screen, as well as below the Login form. Enter your details 
              and click on submit, you will now be able to login successfully. 
              <code></code>, 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How can I contact you?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Answer:</strong> You can contact us through using our phone number that is displayed on the Contact us page. As well as emailing 
              us, you can also type a message with your name and send it to us.
              <code></code> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How can I reset my Password?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Answer: </strong> If you have forgotten your password, you can click on the highlighted link below the login form. 
              Clicking this you will automatically be sent an email to the account you signed up with, you can then reset your password there.
              <code></code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FAQPage;
