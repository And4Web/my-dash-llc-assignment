import { useState } from "react";
import "./formSection.css";
import FormInput from "../formInput/FormInput";

const FormSection = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullname: "",
    phone: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      // placeholder: "Your Email",
      errorMessage: "It should be a valid email address!",
      label: "Your email address",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      // placeholder: "Your Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Your Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      // placeholder: "Confirm your Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm your Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 4,
      name: "fullname",
      type: "text",
      // placeholder: "Your full name",
      errorMessage:
        "Your name should be 3-16 characters and shouldn't include any special character!",
      label: "Your full name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 5,
      name: "phone",
      type: "number",
      // placeholder: "Your phone number",
      label: "Your phone number",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="form_section">
      <form onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="agreement">
          <input type="checkbox" />
          <p>I read and agree Terms and Conditions.</p>
        </div>
        <button>Create account</button>
      </form>
    </div>
  );
};

export default FormSection;
