import {useState, useEffect} from "react";

// import {apiGetAllProducts} from "../admin/db/DbActions";
import {apiGetAllProducts} from "../database/db_utils";

import ProductCard from "./ProductCard";

export const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const data = await apiGetAllProducts();

    console.log("PRODUCTOS: ", data);

    if (data.response === "success") {
      setProducts(data.data);
    } else {
      console.error("No hay prodcutos");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="font-bold text-2xl font-Montserrat p-4">New Arrivals</div>
      <div className="flex flex-row place-content-around gap-x-6 px-6">
        {products &&
          products.map((q) => {
            return <ProductCard key={q.id} data={q} />;
          })}
      </div>
    </div>
  );
};
