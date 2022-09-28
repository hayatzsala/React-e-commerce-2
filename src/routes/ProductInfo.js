import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [dataReady, setDataReady] = useState(false);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setDataReady(true);
      });
  }, [id]);
  return (
    dataReady && (
      <div>
        <h1>Title: {product.title}</h1>
        <p>Price :{product.price}</p>
        <p>Description: {product.description}</p>
        <p>Rate : {product.rating.rate}</p>
        <p>
          <img src={product.image} alt={product.title} />
        </p>
      </div>
    )
  );
};
export default ProductInfo;
