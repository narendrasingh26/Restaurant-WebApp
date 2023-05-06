import React from "react";
import { CartContext } from "../CartContext";
import { useContext } from "react";

const items = [
  {
    id: "a1",
    name: "Shahi-Paneer",
    image: "/shahi-paneer-cheese-cooked-curry-indian-dish-36932556.jpg",
    price: 350,
  },
  {
    id: "b2",
    name: "Kadhai-Paneer",
    image: "/kadhai.jpg",
    price: 320,
  },
  {
    id: "c3",
    name: "Daal-Makhani",
    image: "/dal.jpg",
    price: 280,
  },
  {
    id: "d4",
    name: "Veg-Pulao",
    image: "/veg.jpg",
    price: 180,
  },
  {
    id: "e5",
    name: "Cake",
    image: "/cake.jpg",
    price: 290,
  },
  {
    id: "f6",
    name: "IceCream",
    image: "/ice.jpg",
    price: 285,
  },
  {
    id: "g7",
    name: "Rasmalai",
    image: "/iras.jpg",
    price: 220,
  },
];

const CartItem = () => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((el) => el.id === item.id);
    const existingItem = cart[existingItemIndex];

    let updatedItems;
    if (existingItem) {
      const updatedItem = { ...existingItem, amount: +existingItem.amount + 1 };
      updatedItems = [...cart];
      updatedItems[existingItemIndex] = updatedItem;
      setCart(updatedItems);
    } else {
      let newCart = [...cart, { ...item, amount: 1 }];
      setCart(newCart);
    }
  };

  return (
    <div className="w-3/4 ml-28 my-3 shadow-inner">
      <div className="container mx-auto pb-9 bg-orange-300 rounded-3xl ">
        <div className="flex   ">
          <h1 className="text-lg font-bold my-8 underline">MAIN-COURSE</h1>
          <h1
            className="text-lg font-bold my-8 underline "
            style={{ marginLeft: 100 }}
          >
            DISH
          </h1>
          <h1
            className="text-lg font-bold my-8 underline"
            style={{ marginLeft: 80 }}
          >
            PRICE
          </h1>
          <h1
            className="text-lg font-bold my-8 underline"
            style={{ marginLeft: 40 }}
          >
            QTY
          </h1>
        </div>
        <div className="grid grid-rows-5 my-1 gap-9">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mt-50 "
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: 150, height: 80, borderRadius: 20 }}
              ></img>
              <h2 className="text-lg font-bold my-8">{item.name}</h2>
              <span className="text-lg font-bold my-8">₹{item.price}</span>
              <span style={{ width: "3%" }}>1
                {/* <input
                  type="number"
                  onClick={handleQuantityChange}
                  style={{
                    width: "200%",
                    backgroundColor: "rgb(240, 196, 114)",
                    fontWeight: "bold",
                  }} */}
              </span>
              <button
                onClick={(e) => {
                  addToCart(item, e);
                }}
                className="bg-green-400 py-1 px-4 rounded-full font-bold  text-white  hover:bg-green-800 font-medium dark:bg-green-600 dark:hover:bg-green-700"
              >
                +ADD
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
