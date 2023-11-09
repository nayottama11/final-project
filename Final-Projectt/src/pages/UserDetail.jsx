import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import "./UserDetail.css";

const UserDetail = () => {
  const [menu, setMenu] = useState({});
  const param = useParams();

  console.log(param.userId);

  const getMenus = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param?.userId}`)
      .then((res) => {
        setMenu(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenus();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="food-item">
        <img src={menu?.imageUrl} />
        <h2>{menu?.name}</h2>
        <p>{menu?.description}</p>
      </div>
    </div>
  );
};

export default UserDetail;
