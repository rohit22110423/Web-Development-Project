import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

export default function Freebook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        setBooks(response.data.filter((book) => book.category === "Free"));
      } catch (error) {
        console.error("Error fetching books:", error);
        // Optional: handle error by showing a message to the user or redirecting
      }
    };
    fetchBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <section className="text-center my-8">
        <h1 className="font-semibold text-2xl pb-2">Free Offered Courses</h1>
        <p className="text-gray-700">
          Explore a variety of free courses available to expand your knowledge
          and skills. Enjoy learning new things every day!
        </p>
      </section>
      <div className="mt-8">
        <Slider {...settings}>
          {books.map((book) => (
            <Cards data={book} key={book.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}