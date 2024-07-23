import React from "react";

async function getProduct(productid) {
  const res = await fetch(`https://dummyjson.com/products/${productid}`);
  if (!res.ok) {
    throw new Error("could not get product");
  }
  const data = await res.json();
  return data;
}
const SingleProductPage = async ({ params }) => {
  const data = await getProduct(params?.productid);
  console.log("data", data);

  return <div>SingleProductPage</div>;
};

export default SingleProductPage;
