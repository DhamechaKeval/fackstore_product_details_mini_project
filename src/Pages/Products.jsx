import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const data = useContext(ProductDataContext);

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-amber-200">
        Loading...
      </div>
    );
  }
  return (
    <div className="h-full w-full bg-gray-950 flex flex-wrap gap-10 justify-around p-5 ">
      {data.map((e, idx) => {
        return (
          <div className="w-60  pt-6 rounded-2xl bg-gray-900 hover:scale-95 hover:shadow-[0_0_35px_rgba(254,243,206,0.9)]">
            <Link key={idx} to={`/products/${e.id}`}>
              <div className="flex justify-center items-center">
                <img src={e.image} className="h-40 w-40 object-contain" />
              </div>
              <h1 className="text-amber-100 text-center my-4">{e.title}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
