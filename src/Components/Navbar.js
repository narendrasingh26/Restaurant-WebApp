import React from "react";
import Card from "./Card";
import CartItem from "./CartItem";

import Example from "./Example";

const Navbar = () => {
  return (
    <>
      <div
        className="container mx-auto px5 flex items-center justify-between"
        style={{ height: 80, backgroundColor: "rgb(160,52,26)" }}
      >
        <div
          style={{ fontWeight: "bold", fontSize: 35 }}
          className="text-cyan-50"
        >
          React Meals
        </div>
        <Example />
      </div>

      <Card />
     
      <CartItem />
    </>
  );
};

export default Navbar;
