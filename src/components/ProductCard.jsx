import React, { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch product data from the Fake Store API
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the product data:", error);
      });
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 my-8">
      {products.slice(4, 20).map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg shadow-gray-300 rounded-md overflow-hidden flex flex-col"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-35 rounded-xl p-4 shadow-sm shadow-slate-200 object-contain mx-auto my-auto"
          />

          <div className="p-4 flex-grow">
            <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
            <p className="text-gray-600 text-sm">{product.category}</p>
            <p className="text-gray-800 font-bold text-lg mt-2">
              ${product.price}
            </p>
          </div>

          <div className="p-4">
            <button
              className="w-1/2 bg-yellow-500 text-white py-2 rounded-xl hover:bg-yellow-600 transition duration-300"
              onClick={() => handleAdd(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
