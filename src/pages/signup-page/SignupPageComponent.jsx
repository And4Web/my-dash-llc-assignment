import React from "react";
import FormSection from "../../components/formSection/FormSection";
import "./signupPageComponent.css";

function SignupPageComponent() {
  return (
    <>
      <div className="signup_page">
        <div className="left_section">
          <img src={require("../../assignImage.png")} />
          <div className="content">
            <h2>choose a date range</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              consequatur. Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
        <div className="right_section">
          <FormSection />
        </div>
      </div>
    </>
  );
}

export default SignupPageComponent;
