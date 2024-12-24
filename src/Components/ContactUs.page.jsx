import React from "react";
import '../App.css';

//Contact us form
const ContactUsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 bg-success p-2 rounded">
          <h3>Contact us</h3>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-7">
          <div className="mt-3">
            <h3 style={{ color: "rgba(52, 203, 120, 0.64)"}}>Use Information below to Contact us</h3>
            <h5>+44-1444-105-678</h5> 
            <h5>+44-8529-946-732</h5>
            <h5>Greenfuture@hotmail.co.uk</h5>  {/* Information for users to contact */}
          </div>
          <div className="mt-3">
            <div className="mb-3">
              <label className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="please type your Name here" //User enters their name.
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Message:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="please type your Message here" //User types their message.
              />
            </div>
            <button className="btn btn-outline-primary ms-3">Send</button> {/* Send button */}
          </div>
        </div>
        <div className="col-md-5 text-center">
        
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
