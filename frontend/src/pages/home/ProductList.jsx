import React from "react";
import { useFetchProducts } from "../../features/productApi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="shadow-lg rounded md:w-64 w-52 mt-10">
      <img src={product.image} alt="productImg" className="productImage" />
      <div className="flex justify-between p-5 gap-5">
        <h3 className="font-bold flex-1">{product.name}</h3>
        <span>Rp. {product.price}</span>
      </div>
      <div className="p-5 pt-0 flex gap-2">
        <button className="bg-white text-black border border-black w-full py-2 hover:bg-black hover:text-white">
          <Link to={`/products/${product.id}`}>Details</Link>
        </button>
        <button
          onClick={() => {
            dispatch(addToCart({ product: { ...product, count: 1 } }));
            alert("Add to Cart Successfully");
          }}
          className="bg-black text-white w-full py-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const { data: products, isLoading } = useFetchProducts();
  // console.log(products);
  if (isLoading) return "Loading...";
  return (
    <>
      <h1 className="text-center font-bold text-3xl">Our Products</h1>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-3 place-items-center">
        {products?.products?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
