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
      <h1>Home Page</h1>
      <button onClick={() => handleClick("signup")}> Sign Up</button>
      {/* <button onClick={() => handleClick("chart")}>To chart page</button> */}
    </div>
  );
}

export default Home;
