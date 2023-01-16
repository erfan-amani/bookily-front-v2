import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    mobileSidebar: false,
    modal: null,
  },
  reducers: {
    showMobileSidebar: (state) => {
      state.mobileSidebar = true;
    },
    hideMobileSidebar: (state) => {
      state.mobileSidebar = false;
    },
    toggleMobileSidebar: (state) => {
      state.mobileSidebar = !state.mobileSidebar;
    },
    setModal: (state, action) => {
      state.modal = action?.payload;
    },
  },
});

export const {
  showMobileSidebar,
  hideMobileSidebar,
  toggleMobileSidebar,
  setModal,
} = appSlice.actions;

export default appSlice;
