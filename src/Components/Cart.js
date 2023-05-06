import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { CartContext } from "../CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleDecrease = (id) => {
    const updatedCartItems = cart.map((item) => {
      if (item.id === id && item.amount > 0) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    });
    const newCartItems = updatedCartItems.filter((item) => item.amount > 0);
    setCart(newCartItems);
  };

  const handleIncrease = (id) => {
    const updatedCartItems = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
    setCart(updatedCartItems);
  };

  const handleDelete = (id) => {
    const updatedCartItems = cart.filter((item) => item.id !== id);
    setCart(updatedCartItems);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  const cartItems = cart.map((item) => (
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
                onClick={() => handleDecrease(item.id)}
              >
                -
              </button>
              <b>{item.amount}</b>
              <button
                className="bg-yellow-500 px-4 py2 rounded-full leading-none hover:bg-yellow-600"
                style={{ width: "5%" }}
                onClick={() => handleIncrease(item.id)}
              >
                +
              </button>
            </div>
            <span>{item.price}</span>
            <button
              className="bg-red-500 px-4 rounded-full leading-none text-white hover:bg-red-600"
              onClick={() => handleDelete(item.id)}
            >
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
      {cartItems.length === 0 && <img src='./cart.webp' alt='cart'></img>}
      <div className="mt-3">
        <span className="mr-3">Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
    </>
  );
};

export default Cart;
