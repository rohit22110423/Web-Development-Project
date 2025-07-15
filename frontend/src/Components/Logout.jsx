import React from "react";
import { useAuth } from "../context/Authprovider";

const Logout = () => {
  const [authUser , setAuthUser ] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser ((prevAuthUser ) => ({
        ...prevAuthUser ,
        user: null,
      }));
      localStorage.removeItem("Users");
      alert("Logged out successfully");
      
      // Reload the page after a brief delay
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Logout error:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;