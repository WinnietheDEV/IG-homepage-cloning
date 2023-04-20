import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import Images from "./Images";
import Upload from "./Upload";
import User from "./User";
import { useGlobalContext } from "./context";

import "./App.css";

function App() {
  const { name } = useGlobalContext();

  return (
    <div className="container">
      <User />
      <Upload />
      <main>
        <Images />
      </main>
    </div>
  );
}

export default App;
