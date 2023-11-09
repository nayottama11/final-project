import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import "./User.css";
import Sidebar from "../components/Sidebar";


const User = () => {
    const [users, setUsers] = useState([]);

  const getAllUser = () => {
    axios
      .get("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user", {
        headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k",
        }
      })
      .then((res) => {
        console.log(res);
        setUsers(res?.data?.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUser()
  }, [])

  return(
    <div>
        <Sidebar />
        
        <div className="user">
        <div className="userList">
        {users.map((item, key) => (
        <div className="card" key={key} style={{ marginBottom: "40px" }}>
          <img className="card-img-top"  src={item?.profilePictureUrl} />
          <div className="card-body">
          <h3 className="card-text" >{item.name}</h3>
          <p>{item.description}</p>
          <button className="btn-primary" onClick={() => handleDetail(item.id)}>Detail</button>
          </div>
        </div>
      ))}
        </div>
      </div>
        
        {users.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </div>
  )
};

export default User;