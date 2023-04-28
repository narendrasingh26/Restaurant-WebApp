import React from "react";

const CartItem = () => {
  
  return (
    <div className="w-3/4 ml-28">
    
      <div className="container mx-auto pb-2 bg-orange-300 rounded-3xl  ">
        <h1 className="text-lg font-bold my-8 underline">MAIN-COURSE</h1>
        <div className="grid grid-rows-5 my-5 gap-5">
          <div className="flex justify-between items-center mt-50 " >
            <img
              src="/shahi-paneer-cheese-cooked-curry-indian-dish-36932556.jpg"
              alt="u"
            style={{width:150,height:80,borderRadius:20}}></img><h2 className="text-lg font-bold my-8">Shahi-Paneer</h2>
            <span>₹350</span>
            <span>1</span>
            <button className="bg-green-400  py-1 px-4 rounded-full font-bold">ADD</button>
            
          </div>
          <div className="flex justify-between items-center mt-50 " >
            <img
              src="/kadhai.jpg"
              alt="u"
            style={{width:150,height:80,borderRadius:20}}></img><h2 className="text-lg font-bold my-8">Kadhai-Paneer</h2>
            <span>₹320</span>
            <span>1</span>
            <button className="bg-green-400 py-1 px-4 rounded-full font-bold">ADD</button>
            
          </div>
          <div className="flex justify-between items-center mt-50 " >
            <img
              src="/dal.jpg"
              alt="u"
            style={{width:150,height:80,borderRadius:20}}></img><h2 className="text-lg font-bold my-8">Daal-Makhani</h2>
            <span>₹280</span>
            <span>1</span>
            <button className="bg-green-400 py-1 px-4 rounded-full font-bold">ADD</button>
            
          </div>
          <div className="flex justify-between items-center mt-50 " >
            <img
              src="/veg.jpg"
              alt="u"
            style={{width:150,height:80,borderRadius:20}}></img><h2 className="text-lg font-bold my-8">Veg-Pulao</h2>
            <span>₹180</span>
            <span>1</span>
            <button className="bg-green-400 py-1 px-4 rounded-full font-bold">ADD</button>
            
          </div>
          <div className="flex justify-between items-center mt-50 " >
            <img
              src="/cake.jpg"
              alt="u"
            style={{width:150,height:80,borderRadius:20}}></img><h2 className="text-lg font-bold my-8">Cake</h2>
            <span>₹290</span>
            <span>1</span>
            <button className="bg-green-400 py-1 px-4 rounded-full font-bold">ADD</button>
            
          </div>
          <div className="flex justify-between items-center mt-50 " >
            <img
              src="/ice.jpg"
              alt="u"
            style={{width:150,height:80,borderRadius:20}}></img><h2 className="text-lg font-bold my-8">IceCream</h2>
            <span>₹285</span>
            <span>1</span>
            <button className="bg-green-400 py-1 px-4 rounded-full font-bold">ADD</button>
            
          </div>
          <div className="flex justify-between items-center mt-50 " >
            <img
              src="/iras.jpg"
              alt="u"
            style={{width:150,height:80,borderRadius:20}}></img><h2 className="text-lg font-bold my-8">Rasmalai</h2>
            <span>₹220</span>
            <span>1</span>
            <button className="bg-green-400 py-1 px-4 rounded-full font-bold">ADD</button>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CartItem;
