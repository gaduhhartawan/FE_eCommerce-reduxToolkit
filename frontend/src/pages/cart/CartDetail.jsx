import React from "react";
import {
  removeFromCart,
  increaseCount,
  decreaseCount,
} from "../../features/cartSlice";
import { useDispatch } from "react-redux";

import { FaTrash } from "react-icons/fa";
const CartDetail = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-3 mb-5 pb-4 border-b-2">
      <img
        className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] object-cover"
        src={product.image}
        alt="productImg"
      />
      <div className="detail-cart-product">
        <h4 className="font-semibold text-lg">{product.name}</h4>
        <p className="m1-2">Rp. {product.price}</p>
        <div className="flex justify-between items-center my-2">
          <button onClick={() => dispatch(decreaseCount({ id: product.id }))}>
            -
          </button>
          <span>{product.count}</span>
          <button onClick={() => dispatch(increaseCount({ id: product.id }))}>
            +
          </button>
        </div>
        <button
          className="bg-red-600 hover:bg-red-800 text-white p-3 w-[100px] flex justify-center"
          onClick={() => dispatch(removeFromCart({ id: product.id }))}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartDetail;
