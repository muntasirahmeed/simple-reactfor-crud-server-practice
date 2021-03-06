import React from "react";
import "./AddProducts.css";
const AddProducts = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const tagLine = event.target.tagLine.value;
    const image = event.target.image.value;
    const product = { name, price, tagLine, image };
    // send data to server
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    alert("Porduct addede successfuly");
    event.target.reset();
  };
  return (
    <div>
      <h1>Please Add Your Products</h1>
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
        <input required placeholder="" type="submit" value="Add Products" />
      </form>
    </div>
  );
};

export default AddProducts;
