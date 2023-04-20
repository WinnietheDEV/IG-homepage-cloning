import React from "react";
import i1 from "../public/i1.webp";
import i2 from "../public/i2.webp";
import i3 from "../public/i3.webp";
import { useGlobalContext } from "./context";
const Images = () => {
  const { images } = useGlobalContext();
  return (
    <section className="image-container">
      {images.map((image) => {
        return (
          <article className="image" key={image._id}>
            <img src={image.image} alt="" />
          </article>
        );
      })}
    </section>
  );
};

export default Images;
