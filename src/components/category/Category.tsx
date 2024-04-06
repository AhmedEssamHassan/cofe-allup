import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import Product from "../product/Product";

type product = {
  name: string;
  image: string;
  price: number;
};

function Category({
  selectedCategory,
  data,
}: {
  selectedCategory: string;
  data: product[];
}) {
  console.log({ data });

  return (
    <div className="container py-10">
      <SectionTitle title={selectedCategory} />
      <div className="pt-5 lg:pt-10 grid gap-5 gap-y-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Category;
