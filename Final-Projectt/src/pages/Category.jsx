import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";

const Category = () => {

    const [categories, setCategories] = useState([]);

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

    return(
        <div>
            <Navbar />
            {categories.map((item) => (
        <h1>{item.createdAt}</h1>
      ))}
        </div>
    )
}

export default Category;