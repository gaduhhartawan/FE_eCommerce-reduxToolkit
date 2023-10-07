import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchProduct, useDeleteProduct } from "../../features/productApi";
import { addToCart } from "../../features/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productId = parseInt(id);
  const { data, isLoading } = useFetchProduct(productId);
  const { mutate, isSuccess } = useDeleteProduct();
  //   console.log(product);
  const confirmationDelete = (id) => {
    const isDelete = window.confirm("Are you sure want to delete the product?");
    if (isDelete) {
      mutate(id);
    }
  };
  if (isSuccess) {
    alert("Delete Product Successfully");
    navigate("/");
  }
  if (isLoading) return "Loading...";
  return (
    <div className="container flex gap-10 justify-between items-start">
      <img
        className="w-[400px] h-[500px]"
        src={data?.product?.image}
        alt="productImg"
      />
      <div className="flex flex-col gap-2 w-full justify-start">
        <h1 className="font-bold text-2xl">{data?.product?.name}</h1>
        <p className="w-[450px]">{data?.product?.description}</p>
        <span className="my-3 font-semibold">Rp. {data?.product?.price}</span>
        <div className="flex gap-3">
          <button
            className="bg-red-600 text-white px-4 py-2 hover:bg-red-800"
            onClick={() => confirmationDelete(productId)}
          >
            Delete Product
          </button>
          <button
            className="hover:bg-gray-600 text-white px-4 py-2 bg-black"
            onClick={() => {
              dispatch(addToCart({ product: { ...data.product, count: 1 } }));
              alert("Add to Cart Successfully");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
