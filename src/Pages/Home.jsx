import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nevigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gray-950 text-amber-100">
      <div className="absolute top-1/2 left-1/2 -translate-1/2 text-center text-shadow-[0_0_35px_rgba(254,243,206,0.9)]">
        <h1 className="text-7xl">Welcome to the Store</h1>
        <button
          className="bg-emerald-500 py-3 px-12 mt-8 text-2xl text-gray-950 font-semibold cursor-pointer rounded-2xl active:scale-95"
          onClick={() => {
            nevigate("/products");
          }}
        >
          Explore Products
        </button>
      </div>
    </div>
  );
};

export default Home;
