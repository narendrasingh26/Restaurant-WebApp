import { Link } from "react-router-dom";
import Card from "./Card";
// import CartItem from "./CartItem";

const Navbar = () => {
  const cartStyle = {
    backgroundColor: "orange",
    display: "flex",
    padding: 6 - 12,
    borderRadius: "90px",
    width: "110%",
    justifyItems: "auto",
  };
  return (
    <>
      <nav
        className="container mx-auto px5 flex items-center justify-between"
        style={{ height: 80, backgroundColor: "rgb(160,52,26)" }}
      >
        <div style={{ fontWeight: "bold", fontSize: 35 }}>React Meals</div>
        <div>
          <Link to="/Cart">
            <div style={cartStyle}>
              <span style={{ marginTop: 10, fontSize: 15 }}>10</span>
              <span style={{ fontSize: 15, marginTop: 5, padding: 5 }}>
                {" "}
                Cart
              </span>
              <img
                src="/cart.png"
                alt="cart icon"
                style={{ height: 40, marginLeft: 5 }}
              />
            </div>
          </Link>
        </div>
      </nav>
      <Card/>
      {/* <CartItem/> */}

      {/* <img
        src="https://images.pexels.com/photos/12843160/pexels-photo-12843160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="logo"
      ></img> */}
    </>
  );
};

export default Navbar;
