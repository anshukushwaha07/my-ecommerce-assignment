import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

const Products = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const data = await getProducts({
      page: 1,
      limit: 10,
      sort: "price",
      order: "asc",
    });

    setProducts(data.products);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      {products.map((p) => (
        <div key={p._id}>
          <h3>{p.name}</h3>
          <p>Rs. {p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
