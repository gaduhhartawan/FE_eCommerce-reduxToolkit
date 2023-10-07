import React, { useState } from "react";
import { usePostProduct } from "../../features/productApi";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  const { mutate, isSuccess } = usePostProduct();
  const submitProduct = (e) => {
    e.preventDefault();
    mutate({
      name: productName,
      image: imageUrl,
      description,
      price: parseInt(price),
    });

    setProductName("");
    setImageUrl("");
    setDescription("");
    setPrice(0);
  };

  if (isSuccess) {
    alert("Product Added Succesfully");
    navigate("/");
  }
  return (
    <div className="container w-full mx-auto">
      <h1 className="text-center font-bold text-3xl mb-5">Add Product</h1>
      <form
        onSubmit={submitProduct}
        className="flex flex-col gap-3 items-center justify-center"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Product Name</label>
          <input
            id="name"
            type="text"
            placeholder="Product Name..."
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="text"
            placeholder="Image URL..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="4"
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            placeholder="Price..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white w-[200px] lg:w-[500px] py-3 mt-3 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
