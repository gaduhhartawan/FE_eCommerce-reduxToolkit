import React from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setIsNavbarShow } from "../../features/navbarState/navbarState";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isNavbarShow } = useSelector((state) => state.navbar);
  const totalItems = useSelector((state) => state.cart.cart.length);
  const hiddenNavbar = () => {
    return (
      <div className="fixed top-[75px] right-5 z-10 text-white bg-black py-3 px-5">
        <ul className="flex flex-col gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-product">Add Product</Link>
          </li>
          <li>
            {totalItems ? (
              <Link to="/cart">Cart {totalItems}</Link>
            ) : (
              <Link to="/cart">Cart</Link>
            )}
          </li>
        </ul>
      </div>
    );
  };
  return (
    <nav className="w-full nav-sticky bg-black text-white">
      {isNavbarShow && hiddenNavbar()}
      <div className="container flex justify-between items-center mx-auto bg-black">
        <h1 className="font-bold text-xl">
          <Link to="/">E-Commerce</Link>
        </h1>
        <ul className="nav-list gap-3 md:flex hidden">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-product">Add Product</Link>
          </li>
          <li>
            {totalItems ? (
              <Link to="/cart">Cart {totalItems}</Link>
            ) : (
              <Link to="/cart">Cart</Link>
            )}
          </li>
        </ul>
        <div
          className="bg-white p-2 cursor-pointer md:hidden block"
          onClick={() => dispatch(setIsNavbarShow())}
        >
          <CiMenuBurger color="black" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
