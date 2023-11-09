import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import "./Homepage.css";


const Homepage = () => {

  const [banner, setCategories] = useState([]);

    const getCategories = () => {
        axios
          .get("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories", {
            headers: {
                apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            }
          })
          .then((res) => {
            console.log(res);
            setCategories(res?.data?.data)
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      useEffect(() => {
        getCategories()
      }, [])

  return (
    <div>
        <Navbar />
        <div className="homepage-container">
            <p className="title-p">Mapping Your</p>
            <h1 className="title-p">Next Epic Journey</h1>
        </div>

        <div className="menu">
            <h1>Most Visited Destination</h1>
            <div>
                <div className="card">
                    <img className="card-img-top" src="" alt="" />
                    <div className="card-body">
                        <h3 className="card-text"></h3>
                        <p></p>
                        <button className="btn-primary"></button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default Homepage;
