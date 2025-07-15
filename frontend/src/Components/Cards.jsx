import React from "react";

function Cards({ data }) {
  return (
    <div className="mt-4 p-3">
      <div className="card bg-white w-92 shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white border dark:border-gray-700">
        <figure>
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-xl font-semibold mb-2">
            {data.name}
            <span className="badge badge-secondary ml-2 text-xs px-2 py-1 rounded-full">
              {data.category}
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{data.title}</p>
          <div className="card-actions flex justify-between items-center">
            <span className="badge badge-outline text-lg font-bold">
              ${data.price}
            </span>
            <button className="px-4 py-2 bg-pink-500 text-white rounded-full border-2 border-transparent hover:bg-pink-600 transition-colors duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
