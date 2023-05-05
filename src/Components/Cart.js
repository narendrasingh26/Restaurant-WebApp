import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

const Cart = (props) => {
  const cartItems = props.cartItems.map((item) => (
    <ListGroup.Item key={item.id}>
      <ul>
        <li className="grid grid-rows-5 my-1 gap-1">
          <div
            className="flex items-center justify-between"
            style={{ margin: -15 }}
          >
            <span>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "250%", height: "70", borderRadius: 20 }}
              ></img>
            </span>
            <div className="flex items-center">
              <span className="font-bold ml-4 w-48">{item.name}</span>
            </div>
            <div className="flex items-center" style={{ marginLeft: -45 }}>
              <button
                className="bg-yellow-500 px-4 py2 rounded-full leading-none hover:bg-yellow-600"
                style={{ width: "5%" }}
              >
                -
              </button>
              <b>{item.amount}</b>
              <button
                className="bg-yellow-500 px-4 py2 rounded-full leading-none hover:bg-yellow-600"
                style={{ width: "5%" }}
              >
                +
              </button>
            </div>
            <span>{item.price}</span>
            <button className="bg-red-500 px-4 rounded-full leading-none text-white hover:bg-red-600">
              DELETE
            </button>
          </div>
        </li>
      </ul>
      <hr></hr>
    </ListGroup.Item>
  ));

  return (
    <>
      <ListGroup>{cartItems}</ListGroup>
      <div className="mt-3">
        <span className="mr-3">Total Amount:</span>
        <strong>
          ₹
          {props.cartItems.reduce(
            (total, item) => total + +item.amount * +item.price,
            0
          )}
        </strong>
      </div>
    </>
  );
};

export default Cart;
