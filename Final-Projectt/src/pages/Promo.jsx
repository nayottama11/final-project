import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import "./Promo.css";

const Promo = () => {
  const [promo, setPromo] = useState([]);

  const getPromo = () => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setPromo(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPromo();
  }, []);

  return (
    <div>
      <Navbar />

      {promo.map((item, key) => (
        <div className="card" key={key} style={{ marginBottom: "40px" }}>
          <img className="card-img-top"  src={item?.imageUrl} />
          <div className="overlay">
            <div className="text">Hellow</div>
          </div>
          <div className="card-body">
          <h3 className="card-text" >{item.name}</h3>
          <p>{item.description}</p>
          <button className="btn-primary" onClick={() => handleDetail(item.id)}>Detail</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Promo;
