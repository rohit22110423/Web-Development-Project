import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.error("Error:", error);
        setError("Failed to load courses. Please try again later.");
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          We welcome you to our courses.
          <span className="text-pink-500"> Happy Learning!</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quidem, 
          eligendi soluta sit voluptate suscipit? Qui ducimus consequuntur 
          inventore asperiores dicta sint laboriosam doloribus maxime, dolorem 
          itaque aliquam assumenda error.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors duration-300">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-12">
        {error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {book.map((data) => (
              <Cards key={data.id} data={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Course;
