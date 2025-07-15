import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "../Components/login";
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      console.log(res.data);
      if (res.data) {
        alert("Signup successfully");
        navigate(from, { replace: true });
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    } catch (err) {
      if (err.response) {
        console.log(err);
        alert("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="relative">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-2xl text-center text-gray-800">Sign Up</h3>
            
            <div className="space-y-1">
              <label className="block text-gray-700">
                Full Name
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("fullname", { required: true })}
                  aria-label="Full Name"
                />
              </label>
              {errors.fullname && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700">
                Email
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("email", { required: true })}
                  aria-label="Email"
                />
              </label>
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700">
                Password
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("password", { required: true })}
                  aria-label="Password"
                />
              </label>
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>

            <div className="text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <button
                className="text-blue-500 underline"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Log in
              </button>
              <Login />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
