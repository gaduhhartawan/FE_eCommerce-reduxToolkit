// import express from "express";
// import db from "../database/db.json";
const express = require("express");
let products = require("../database/db.json");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send({ message: "The server is Running Properly", products });
});

// Route
app.get("/products", (req, res) => {
  res.status(200).json({ products });
});

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const checkItem = products.find((product) => productId === product.id);
  if (checkItem) {
    res.status(200).json({ product: checkItem });
  } else {
    res.status(400).json({ message: "Product not Found" });
  }
});

app.post("/products", (req, res) => {
  const newProduct = req.body;
  products = [...products, { ...newProduct, id: products.length + 1 }];
  res.status(201).json({ message: "Create Product Succesfully", products });
});

app.delete("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const checkItem = products.find((product) => productId === product.id);
  if (checkItem) {
    products = products.filter((product) => product.id !== productId);
    res.status(200).json({ message: "Delete Product Successfully", products });
  } else {
    res.status(400).json({ message: "Product not Found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
