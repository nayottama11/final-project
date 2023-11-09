import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import bgImg from "../assets/log-in-page-img.png"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
    };
  
    axios
      .post("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login", payload, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
      }
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", "abcdefg");
        navigate("/")
      })
      .catch((err) => {
        
        console.log(err);
      });
  };


  return (
    <div className="container-1">
      <div className="rectangle-1">
        <div className="left-container">
          <div className="log-in-container">
            <h1 className="log-in-class">Log In</h1>
          </div>
          <div className="details-container">
            <div className="details-border">
              <input
                className="details-text"
                type="email"
                placeholder="Email"
                onChange={handleChangeEmail}
              />
            </div>
            <div className="details-border">
              <input
                className="details-text"
                type="password"
                placeholder="Password"
                onChange={handleChangePass}
              />
            </div>
            <div className="button-container">
              <button className="button-container-2" onClick={handleSubmit}>Login</button>
            </div>
          </div>
          <div className="signup-container">
            <p>don't have an account?</p>
            <Link className="signup-button" to={"/register"}><p>Sign Up</p></Link>
          </div>
        </div>
        <img className="img-container-2" src={bgImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
