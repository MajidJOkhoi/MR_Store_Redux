// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Importing the cart reducer
import promoCodeReducer from "./promoCodeSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    promoCode: promoCodeReducer,
  },
});

export default store; // Export the configured Redux store
