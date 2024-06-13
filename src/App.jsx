import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";
import "./index.css";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<ShoppingCart  />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
