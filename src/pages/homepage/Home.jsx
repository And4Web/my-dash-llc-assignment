import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const handleClick = (page) => {
    const link = "/" + page;
    navigate(link);
  };
  return (
    <div className="home">
      <img className="back_image" src={require("../../assignImage.png")} />
      <div className="home_content">
        <h1>MyDash LLC Home Page</h1>
        <button className="home_button" onClick={() => handleClick("signup")}>
          {" "}
          Sign Up
        </button>
      </div>
      {/* <button onClick={() => handleClick("chart")}>To chart page</button> */}
    </div>
  );
}

export default Home;
