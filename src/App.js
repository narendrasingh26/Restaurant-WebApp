// import Header from "./Components/Layout/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Navbar}></Route>
      </Routes>
    </>
  );
}

export default App;
