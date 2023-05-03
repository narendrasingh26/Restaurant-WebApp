import React from "react";

const items = [
  {
    id: "a1",
    name: "Shahi-Paneer",
    image: "/shahi-paneer-cheese-cooked-curry-indian-dish-36932556.jpg",
    price: 350,
  },
  {
    id: "a2",
    name: "Kadhai-Paneer",
    image: "/kadhai.jpg",
    price: 320,
  },
  {
    id: "a3",
    name: "Daal-Makhani",
    image: "/dal.jpg",
    price: 280,
  },
  {
    id: "a4",
    name: "Veg-Pulao",
    image: "/veg.jpg",
    price: 180,
  },
  {
    id: "a5",
    name: "Cake",
    image: "/cake.jpg",
    price: 290,
  },
  {
    id: "a6",
    name: "IceCream",
    image: "/ice.jpg",
    price: 285,
  },
  {
    id: "a7",
    name: "Rasmalai",
    image: "/iras.jpg",
    price: 220,
  },
];

const CartItem = () => {
  return (
    <div className="w-3/4 ml-28 my-3 shadow-inner">
      <div className="container mx-auto pb-9 bg-orange-300 rounded-3xl ">
        <div className="flex   ">
          <h1 className="text-lg font-bold my-8 underline">MAIN-COURSE</h1>
          <h1 className="text-lg font-bold my-8 underline " style={{marginLeft:100}}>DISH</h1>
          <h1 className="text-lg font-bold my-8 underline" style={{marginLeft:80}}>PRICE</h1>
          <h1 className="text-lg font-bold my-8 underline" style={{marginLeft:40}}>QTY</h1>
        </div>
        <div className="grid grid-rows-5 my-1 gap-9">
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center mt-50 " >
              <img src={item.image} alt={item.name} style={{width:150,height:80,borderRadius:20}}></img>
              <h2 className="text-lg font-bold my-8">{item.name}</h2>
              <span>₹{item.price}</span>
              <span>1</span>
              <button className="bg-green-400 py-1 px-4 rounded-full font-bold">+ADD</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
