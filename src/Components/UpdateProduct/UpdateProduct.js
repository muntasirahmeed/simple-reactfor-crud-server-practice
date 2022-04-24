import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const tagLine = event.target.tagLine.value;
    const image = event.target.image.value;
    const product = { name, price, tagLine, image };
    // send data to server
    // ------------
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    //   -------
    alert("Porduct Updated successfuly");
    event.target.reset();
  };
  return (
    <div>
      <h1 className="text-center mt-2 text-success">
        Please Update your Product
      </h1>
      <h2>{product.name}</h2>
      <form onSubmit={handleSubmit}>
        <input required placeholder="Name" type="text" name="name" />
        <input required placeholder="Price" type="number" name="price" />
        <textarea
          required
          placeholder="Descrption"
          type="text"
          name="tagLine"
        />
        <input required placeholder="Photo Url" type="text" name="image" />
        <input required placeholder="" type="submit" value="Update Products" />
      </form>
    </div>
  );
};

export default UpdateProduct;
