import React from "react";
import i1 from "../public/i1.webp";
import { useGlobalContext } from "./context";
import axios from "axios";
import { useRef } from "react";
const Upload = () => {
  const { upload, setUpload, image, setImage, getHome } = useGlobalContext();
  const captionRef = useRef();
  return (
    <div className={upload ? `upload-box upload-box-show` : `upload-box`}>
      <button className="btn-close" onClick={() => setUpload(false)}>
        x
      </button>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const captionValue = captionRef.current.value;
          try {
            const product = { name: captionValue, image };

            await axios.post(
              `http://localhost:3000/api/v1/profile/image`,
              product
            );
            getHome();
            setUpload(false);
            setImage(null);
            captionRef.current.value = "null";
            // fetchProducts()
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={async (e) => {
            e.preventDefault();
            const imageFile = e.target.files[0];
            const formData = new FormData();
            formData.append("image", imageFile);

            try {
              const {
                data: {
                  image: { src },
                },
              } = await axios.post(
                `http://localhost:3000/api/v1/profile/image/upload`,
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              );
              console.log(src);
              setImage(src);
            } catch (error) {
              setImage(null);
              console.log(error);
            }
          }}
        ></input>
        <div className="upload-container">
          <img src={image} alt="" className="upload-image" />
        </div>
        <textarea
          name="caption"
          id="caption"
          cols="100"
          rows="10"
          placeholder="caption"
          ref={captionRef}
        ></textarea>
        <br />
        <button className="btn btn-upload" type="submit">
          upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
