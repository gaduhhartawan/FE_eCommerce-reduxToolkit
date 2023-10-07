import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavbarShow: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setIsNavbarShow: (state) => {
      state.isNavbarShow = !state.isNavbarShow;
    },
  },
});

export const { setIsNavbarShow } = navbarSlice.actions;
export default navbarSlice.reducer;
