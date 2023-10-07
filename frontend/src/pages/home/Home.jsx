import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="container mx-auto">
        <ProductList />
      </div>
    </>
  );
};

export default Home;
