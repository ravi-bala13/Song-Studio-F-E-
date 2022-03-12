import React, { useContext, useEffect, useState } from "react";

import "./Viewpage.css";
// import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";

function Viewpage() {
  const [products, setProducts] = useState([]);

  const [toshow, setToshow] = useState([]);

  const [search, setsearch] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const sortFunction = (val) => {
    let ans = products.filter((e) => {
      // console.log("e:", e.song);
      let tem = e.song.toUpperCase();
      // console.log("tem:", val.toUpperCase());
      if (tem.startsWith(val.toUpperCase())) return e;
    });
    console.log("ans:", ans);
    setToshow(ans);
  };

  const getProducts = async () => {
    try {
      let res = await fetch(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json"
      );
      let data = await res.json();
      console.log("data:", data);

      setProducts(data);
      setToshow(data);
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <>
      <div className="top-nav">
        <h1 className="heading">Jaguvar Music</h1>
        <div className="input-div">
          <input
            className="input-box"
            type="text"
            placeholder="Enter song name here to search"
            // value={search}
            onChange={(e) => sortFunction(e.target.value)}
          />
          {/* <button onClick={() => sortFunction(search)} className="input-button">
            Search
          </button> */}
        </div>
      </div>

      <div className="all-products">
        {toshow.map((e, i) =>
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
