import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

import { GiShoppingCart } from "react-icons/gi";
import { AuthContext } from "../../Context/AuthProvider";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        alert("Log out successful");
      })
      .catch((error) => {
        alert(`Error ${error.message}`);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "hover:text-blue-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "hover:text-blue-500"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop/dessert"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "hover:text-blue-500"
          }
        >
          Our Shop
        </NavLink>
      </li>
      <li className="relative group">
        <NavLink
          to="/parent"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "hover:text-blue-500"
          }
        >
          Parent
        </NavLink>
        <ul className="absolute left-0 hidden bg-white shadow-md p-2 group-hover:block">
          <li>
            <NavLink
              to="/submenu1"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 text-blue-500"
                  : "block px-4 py-2 hover:bg-gray-100"
              }
            >
              Submenu 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/submenu2"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 text-blue-500"
                  : "block px-4 py-2 hover:bg-gray-100"
              }
            >
              Submenu 2
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "hover:text-blue-500"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-opacity-30  bg-white/0 rounded-lg backdrop-blur-lg backdrop-opacity-95 p-4 fixed z-10 max-w-6xl text-white mx-auto w-full">
      <div className=" max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold">
          FoodHome
        </NavLink>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex text-xl font-medium space-x-6">
          {navItems}
        </ul>

        {/* Button */}
        <div className="flex gap-2 items-center">
          <Link to={"/dashboard/cart"}>
            <button
              className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Cart"
            >
              <GiShoppingCart className="bg-teal-700 text-4xl text-white rounded-2xl p-1" />
              <span className="absolute inset-0 object-right-top -mr-6">
                <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                  {cart.length}
                </div>
              </span>
            </button>
          </Link>
          {user ? (
            <button onClick={handleLogout} className="font-medium">
              Sign out
            </button>
          ) : (
            <Link className="font-medium" to={"/login"}>
              Sign up
            </Link>
          )}
          <FaRegUserCircle className="text-4xl" />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="lg:hidden bg-white shadow-md p-4 mt-2 space-y-4">
          {navItems}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
