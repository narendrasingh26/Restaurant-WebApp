import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Cart from "./Cart";

function Example() {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setCartItems([
      { id: 1, name: "Butter Paneer", amount: 2, price: 140 },
      { id: 2, name: "Chicken Tikka Masala", amount: 1, price: 180 },
    ]);
  };

  return (
    <>
      <Button
        // style={{ backgroundColor: "rgb(201, 44, 16)" }}
        variant="Danger"
        className="rounded-full"
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
            {cartItems.length}
          </span>
        </div>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart show={show} onClose={handleClose} cartItems={cartItems} />
        </Modal.Body>
        <Modal.Footer> 
          <Button  onClick={handleClose} variant="outline-primary">
            Close
          </Button>
          <Button variant="outline-primary">Order Now</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
