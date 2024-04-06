import React, { useEffect, useState } from "react";
import FilterBar from "../filterBar/FilterBar";
import Category from "../category/Category";
import { categoriesTitles, menu } from "../data";

function Categories() {
  const [categories, setCategories] = useState<string[]>(categoriesTitles);

  const [selectedCategory, setSelectedCategory] =
    useState("All Time Favorites");

  const handleChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="my-10">
      <FilterBar
        selectedCategory={selectedCategory}
        categories={categories}
        handleChange={handleChange}
      />
      <Category
        selectedCategory={selectedCategory}
        data={menu[selectedCategory]}
      />
    </div>
  );
}

export default Categories;
