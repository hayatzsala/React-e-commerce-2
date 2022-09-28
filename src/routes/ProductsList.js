import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductsList() {
  const ALL_PRODUCTS_URL = "https://fakestoreapi.com/products";
  const [data, setData] = useState();
  const [dataReady, setDataReady] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(ALL_PRODUCTS_URL);
      const data = await result.json();
      setData(data);
      setDataReady(true);
      console.log(data);
    };

    fetchData();
  }, [ALL_PRODUCTS_URL]);

  return (
    dataReady && (
      <div>
        {data.map((product) => (
          <div
            className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20"
            key={product.id}
          >
            <div>
              <Link
                to={`/products/${product.id}`}
                className="text-gray-800 no-underline text-3xl font-semibold"
              >
                <h2>Name: {product.title}</h2>
              </Link>

              <p className="mt-2 text-gray-600">Price: {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

export default ProductsList;
