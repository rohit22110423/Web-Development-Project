import React from "react";
import Home from "./home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./Components/Signup";
import { useAuth } from "./context/Authprovider";
import Contact from "./Components/Contact";
import About from "./Components/About";
export default function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
