// CartButton.js

import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Cart from "./Cart";

function CartButton() {
  const { cart, setCart } = useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);

    setCart(cart);
  };

  // let total = cart.length;
  let total=0;
  for(const el of cart){
      total=total+el.amount;
  }

  return (
    <>
      <Button
        size="sm"
        variant=""
        className="rounded-full bg-red-800 hover:bg-red-900"
        onClick={handleShow}
      >
        <div className="bg-red-900  py-1 px-3  rounded-full font-bold flex justify-between items-center mt-50 ">
          <img
            src="/cart.png"
            alt="cart icon"
            style={{ height: 40, marginLeft: 5 }}
          />
          <span className="text-cyan-50">Cart</span>
          <span className="bg-red-700  py-1 px-3 rounded-full font-bold text-cyan-50">
            {total}
          </span>
        </div>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className="container mx-auto lg:w-1/2 w-full pb-24 font-bold "
        style={{ width: "500%" }}
      >
        <Modal.Header className="bg-red-400">
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "100%" }} >
          <Cart
            show={show}
            onClose={handleClose}
            cart={cart}
            // cartItems={cartItems}
            // setCartItems={handleSetCartItems}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="outline-primary">
            Close
          </Button>
          <Button variant="outline-primary">Order Now</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartButton;
