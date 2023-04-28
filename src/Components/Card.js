// import './Card.css'
import React from "react";

function Card() {
  return (
    <div style={{margin:250,marginTop:25,marginBottom:1,height:150,width:500,borderRadius:15,backgroundColor:'rgb(240, 162, 162)'}}>
    <h1 className="card-header">Delicious Food------- Delivered To You :)</h1>
    <div className="card-body">
      <h5 className="card-title">  Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.</h5>
      <p className="card-text">  All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!</p>
    </div>
  </div>
  )
}

export default Card;
