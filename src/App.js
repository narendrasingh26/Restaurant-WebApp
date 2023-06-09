// App.js
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { CartContext } from "./CartContext";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar />
      </CartContext.Provider>
    </>
  );
}

export default App;
