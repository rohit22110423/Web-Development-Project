import React, { useState, useEffect } from "react";
import Login from "../Components/login";
import { useAuth } from "../context/Authprovider";
import Logout from "./Logout";

export default function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a href="/" className="text-lg font-medium hover:text-pink-600">Home</a></li>
      <li><a href="/Course" className="text-lg font-medium hover:text-pink-600">Course</a></li>
      <li><a href="/Contact" className="text-lg font-medium hover:text-pink-600">Contact</a></li>
      <li><a href="/About" className="text-lg font-medium hover:text-pink-600">About</a></li>
    </>
  );

  return (
    <div className={`w-full fixed top-0 left-0 z-50 transition-shadow ${sticky ? "shadow-lg bg-white dark:bg-gray-900" : "bg-transparent"}`}>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        <div className="navbar flex justify-between items-center py-3">
          {/* LEFT */}
          <div className="navbar-start flex items-center gap-4">
            {/* Mobile Menu */}
            <div className="dropdown lg:hidden">
              <button tabIndex={0} className="btn btn-ghost">
                <svg className="h-6 w-6 text-gray-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </button>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navItems}
              </ul>
            </div>

            {/* Logo */}
            <a href="/" className="text-2xl font-bold text-indigo-600 dark:text-white">
              Book Alchemy
            </a>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-6">{navItems}</ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end space-x-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center border rounded-md px-3 py-2 bg-gray-100 dark:bg-gray-700">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm text-gray-700 dark:text-white"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 dark:text-gray-300" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Dark/Light Toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {theme === "light" ? (
                <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z..." />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3a9 9 0 00-8.25 12.78..." />
                </svg>
              )}
            </button>

            {/* Login/Logout */}
            {authUser ? (
              <Logout />
            ) : (
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
            )}
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
