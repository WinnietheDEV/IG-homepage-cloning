import React, { useEffect, useState } from "react";
import image from "../public/unnamed.png";
import { useGlobalContext } from "./context";
const User = () => {
  // const [images, setImages] = useState([]);
  const { setUpload, images } = useGlobalContext();
  useEffect(() => {}, [images]);
  return (
    <header className="user-container">
      <section className="user-info">
        <img src={image} alt="" className="user-image" />
        <div className="user-number-info">
          <div className="info">
            <p className="number">{images.length}</p>
            <p className="label">posts</p>
          </div>
          <div className="info">
            <p className="number">962</p>
            <p className="label">followers</p>
          </div>
          <div className="info">
            <p className="number">993</p>
            <p className="label">following</p>
          </div>
        </div>
      </section>
      <section className="user-btn">
        <div className="btn-container">
          <button className="btn">edit profile</button>
          <button className="btn" onClick={() => setUpload(true)}>
            add photo
          </button>
        </div>
      </section>
    </header>
  );
};

export default User;
