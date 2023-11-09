import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import bgImg from "../assets/log-in-page-img.png"; // Correct the path

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const signUp = async () => {
    let item={name, username, password, roleid:parseInt(roleid)}
    console.warn(item);

    let result= await fetch("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/registerv", {
      method: 'POST', 
      body:JSON.stringify(item),
      headers:{
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    })
    let data = await result.json();
    console.log("data", data);
  }

  const handleSubmit = () => {
    const payload = {
      username: email,
      password: password,
    };
  };

  return (
    <div className="container-1">
      <div className="rectangle-1">
        <div className="left-container">
          <div className="register-container">
            <h1 className="register-class">Register</h1>
          </div>
          <div className="details-container">
          <div className="details-border">
              <input
                className="details-text"
                type="fullname"
                placeholder="Full Name"
                
              />
            </div>
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
              <button className="button-container-2" onClick={handleSubmit}>Register</button>
            </div>
          </div>
          <div className="login-container">
            <p>Already have an account?</p>
            <Link className="login-button" to={"/login"}><p>Login</p></Link>
          </div>
        </div>
        <img className="img-container-2" src={bgImg} alt="" />
      </div>
    </div>
  );
};

export default Register;
