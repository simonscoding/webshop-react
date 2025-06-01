// ProductList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/ProductList.css"; // Import the CSS file for styling
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="grid">
      {products.map((product) => (
        <div key={product.id} className="card">
          <Link to={`/product/${product.id}`} className="link">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="thumbnail"
            />
            <h2 className="title">{product.title}</h2>
            <p className="price">${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
