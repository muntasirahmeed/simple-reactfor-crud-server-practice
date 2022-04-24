import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MangeProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const deleteProducts = (id) => {
    const procced = window.confirm("Are you sure ?");
    if (procced) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  const navigate = useNavigate();

  return (
    <div>
      <h1>Manage Your Products</h1>
      {products.map((product) => (
        <div className="fs-4" key={product._id}>
          <li>
            {" "}
            {product.name}---{product.tagLine}--{product.price}--{" "}
            <button
              onClick={() => navigate(`/update/${product._id}`)}
              className="btn btn-success me-2"
            >
              Update
            </button>
            <button
              className="btn btn-danger"
              onClick={() => deleteProducts(product._id)}
            >
              x
            </button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default MangeProducts;
