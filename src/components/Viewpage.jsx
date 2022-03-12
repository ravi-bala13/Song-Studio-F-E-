import React, { useContext, useEffect, useState } from "react";

import "./Viewpage.css";
// import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";

function Viewpage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let res = await fetch(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json"
      );
      let data = await res.json();
      console.log("data:", data);

      setProducts(data);
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <>
      <div className="top-nav">
        <h1 className="heading">Jaguvar Music</h1>
        <div className="input-div">
          <input className="input-box" type="text" />
          <button className="input-button">Search</button>
        </div>
      </div>

      <div className="all-products">
        {products.map((e, i) =>
          true ? (
            <div key={i}>
              <div className="details">
                <img src={e.cover_image} alt="" />
                <p>
                  <strong>{e.song}</strong>
                </p>
                <p>{e.artists}</p>
              </div>
              <a href={e.url}>
                <button className="btn">Play</button>
              </a>
            </div>
          ) : null
        )}
      </div>
    </>
  );
}

export default Viewpage;
