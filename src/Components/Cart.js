import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const Cart = (props) => {
  
    const cartItems = props.cartItems.map((item) => (
      <ListGroup.Item key={item.id}>
        <span>{item.name}</span>
        <span>
          {item.amount} x ${item.price} = ${item.amount * item.price}
        </span>
      </ListGroup.Item>
    ));
  

  return (
    // <Modal show={props.show} onHide={props.onClose}>
    //   <Modal.Header>
        // <Modal.Title>Cart</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    <>
       <ListGroup>{cartItems}</ListGroup> 
        <div className="mt-3">
          <span className="mr-3">Total Amount:</span>
          <strong>
            $
            {props.cartItems.reduce(
              (total, item) => total + item.amount * item.price,
              0
            )}
          </strong>
        </div>
        </>
    //   </Modal.Body>
    //   <Modal.Footer>
        // <Button variant="secondary" onClick={props.onClose}>
        //   Close
        // </Button>
        // <Button variant="primary">Order Now</Button>
    //   </Modal.Footer>
    // </Modal>
  );
};

export default Cart;
