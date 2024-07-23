import React from "react";
import SingleProductList from "@/app/components/single-product-list";
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

  return (
    <div>
      <SingleProductList singleProductData={data} />
    </div>
  );
};

export default SingleProductPage;
