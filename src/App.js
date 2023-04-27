// import Header from "./Components/Layout/Header";
import React from "react";
import { Route, Link, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      {/* <Header/> */}
      <Link></Link>
      {/* <Switch> */}{" "}
      <Routes>
        {/* <Route exact path="/" Component={Home}></Route> */}
        <Route path="/" Component={Navbar}></Route>
        {/* </Switch> */}{" "}
      </Routes>
    </>
  );
}

export default App;
