import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./pages/global/Navbar";
import Footer from "./pages/global/Footer";
import ProductDetail from "./pages/productDetail/ProductDetail";
import AddProduct from "./pages/addProduct/AddProduct";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
