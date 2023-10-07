import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "../features/navbarState/navbarState";
import cartSlice from "../features/cartSlice";

const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    cart: cartSlice,
  },
});

export default store;
