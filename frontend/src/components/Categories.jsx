import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../config/url';
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
      ;(async () => {
          try {
              const result = await axios.get(`${baseUrl}/categories`, {
                  withCredentials: true
              });
              console.log(result?.data)
              setCategories(result?.data || [])
          } catch(err) {

          }
      })();
  }, [])

  return (
    <div className="flex flex-wrap justify-center mt-10">
      {categories.map((category, index) => (
        <Link to={`/categories/${category.id}`} key={`category n°:${index}`} className="w-1/3">
          <div className="submit-button m-2 p-2 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 w-full h-40 flex items-center justify-center text-white text-2xl font-bold hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 ease-in-out">
            <div className="button-top">
              {category.name}
            </div>
            <div className="button-bottom"></div>
            <div className="button-base"></div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;

