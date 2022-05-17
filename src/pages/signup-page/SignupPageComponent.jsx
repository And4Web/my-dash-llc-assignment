import React from "react";
import FormSection from "../../components/formSection/FormSection";
import "./signupPageComponent.css";

function SignupPageComponent() {
  return (
    <>
      <div className="signup_page">
        <div className="left_section"></div>
        <div className="right_section">
          <FormSection />
        </div>
      </div>
    </>
  );
}

export default SignupPageComponent;
