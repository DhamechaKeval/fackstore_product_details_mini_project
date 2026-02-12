import React, { createContext, useEffect, useState } from "react";
import { getAllProductsData, } from "../api/ProductAPI";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductDataContext = createContext();

function ProductContext({ children }) {
  const [allProductsData, setAllProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setAllProductsData(await getAllProductsData());
    };

    fetchData();
  }, []);
  

  return (
    <div>
      <ProductDataContext.Provider value={allProductsData}>
        {children}
      </ProductDataContext.Provider>
    </div>
  );
}

export default ProductContext;
