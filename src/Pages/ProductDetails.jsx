import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDataContext } from "../context/ProductContext";
import ProductSkeleton from "../components/ProductSkeleton";
// import { getSelectedProductData } from "../api/ProductAPI";

const ProductDetails = () => {
  const { productId } = useParams();

  const allProductsData = useContext(ProductDataContext);

  const product = allProductsData.find((item) => item.id === Number(productId));

  //   const [product, setProduct] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await getSelectedProductData(productId);
  //       setProduct(data);
  //     };

  //     fetchData();
  //   }, [productId]);

  if (!product) {
    return <ProductSkeleton />;
  }

  return (
    <div className="min-h-screen w-full bg-gray-950 flex items-center justify-center">
      <div
        className="w-80 bg-gray-900 p-6 rounded-xl
                      shadow-[0_0_35px_rgba(254,243,206,0.9)]"
      >
        {/* Image */}
        <div className="flex justify-center items-center h-48">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-amber-100 text-lg font-semibold text-center">
          {product.title}
        </h2>

        {/* Category */}
        <p className="text-sm text-amber-300 text-center mt-1">
          {product.category}
        </p>

        {/* Description */}
        <p className="text-gray-300 text-sm mt-3 line-clamp-3">
          {product.description}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-amber-400 font-bold">${product.price}</span>
          <span className="text-gray-400 text-sm">
            ⭐ {product.rating.rate} ({product.rating.count})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
