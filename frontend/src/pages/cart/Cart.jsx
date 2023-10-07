import React from "react";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart.cart);
  const totalPrice = products.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);

  // console.log(totalPrice);
  return (
    <div className="container">
      <h1 className="font-bold text-3xl">Your Cart</h1>
      <div className="card mt-5">
        <div className="flex justify-between items-center mb-4">
          <button className="border border-black py-3 px-4 hover:bg-black hover:text-white ">
            <Link to="/">CONTINUE SHOPPING</Link>
          </button>
          <button
            className="bg-black text-white py-3 px-4"
            onClick={() => alert("Not Finished Yet")}
          >
            CHECKOUT NOW
          </button>
        </div>
        {/* Cart Detail */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* CartDetail */}
          <div className="cart-product shadow-lg rounded-lg flex-1 p-4">
            {products.length !== 0 ? (
              products.map((product) => <CartDetail product={product} />)
            ) : (
              <h1 className="font-bold text-lg flex justify-center items-center h-full w-full">
                Cart is Empty
              </h1>
            )}
          </div>
          {/* Summary */}
          <div className="summary w-full lg:w-[250px] h-[185px] p-5 bg-gray-200">
            <h2 className="font-bold">ORDER SUMMARY</h2>
            <div className="flex justify-between mt-3">
              <span className="font-semibold">Subtotal</span>
              <span>Rp. {totalPrice}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="font-semibold">Shipping</span>
              <span>Free Shipping</span>
            </div>
            <button
              className="bg-black text-white w-full py-2 mt-4"
              onClick={() => alert("Not Finished Yet")}
            >
              CHECKOUT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
