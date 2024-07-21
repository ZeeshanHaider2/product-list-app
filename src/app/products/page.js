import React from "react";
import ProductList from "../components";
async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("could not get product data");
  }
  const data = await res.json();
  return data.products;
}

const ProductPage = async () => {
  const data = await getProducts();
  console.log("data", data);
  return (
    <div>
      <ProductList ProductsData={data} />
    </div>
  );
};

export default ProductPage;
