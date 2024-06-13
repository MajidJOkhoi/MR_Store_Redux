import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Auth from "../components/auth/index"; // Import your Auth component here

const Navbar = () => {
  // Get the cart items count from the Redux store
  const cartItemCount = useSelector((state) => state.cart.length);
  const user = useSelector((state) => state.user); // Assuming you store user authentication state in Redux

  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold"> <Link to='/'> MR Store </Link> </div>


        <div className="flex space-x-8 items-center">
          <Link
            to="/"
            className="hover:text-gray-400 transition duration-300 ease-in-out"
          >
            Home
          </Link>

          <Link
            to="/contact"
            className="hover:text-gray-400 transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex space-x-4 items-center">
          {user ? ( // If user is logged in, show user profile icon
            <div
              className="cursor-pointer"
              onClick={() => navigate("/profile")}
              title="User Profile" // Tooltip for user icon
            >
              <FontAwesomeIcon
                icon={faUser}
                className="hover:text-gray-400 transition duration-300 ease-in-out text-2xl"
              />
            </div>
          ) : ( // If user is not logged in, show Auth component
            <Auth />
          )}
          <div
            className="relative flex items-center cursor-pointer"
            onClick={handleCart}
            title="View Cart" // Tooltip for cart icon
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-pink-200 hover:text-pink-600 transition duration-300 ease-in-out text-2xl"
            />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
