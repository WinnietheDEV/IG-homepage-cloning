import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("win");
  const [upload, setUpload] = useState(false);
  const getHome = async () => {
    const resp = await axios("http://localhost:3000/api/v1/profile/image");
    console.log(resp.data.images);
    setImages(resp.data.images);
  };
  useEffect(() => {
    getHome();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        images,
        setImages,
        name,
        upload,
        setUpload,
        image,
        setImage,
        getHome,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default AppContext;
