import React, { useEffect, useState } from "react";
import FilterBar from "../filterBar/FilterBar";
import Category from "../category/Category";
import { categoriesTitles, menu } from "../data";

function Categories() {
  const [selectedCategory, setSelectedCategory] =
    useState("All Time Favorites");

  const [products, setProducts] = useState(menu["All Time Favorites"]);

  useEffect(() => {
    setProducts(menu[selectedCategory]);
  }, [selectedCategory]);

  const handleChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="my-10">
      <FilterBar
        selectedCategory={selectedCategory}
        categories={categoriesTitles}
        handleChange={handleChange}
      />
      <Category selectedCategory={selectedCategory} data={products} />
    </div>
  );
}

export default Categories;
