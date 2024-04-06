import React, { useEffect, useState } from "react";
import { categories } from "../data";
function FilterBar() {
  const [categoryes, setCategories] = useState<string[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("javascript");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCategories(categories);
    }, 2000);
    return clearTimeout(timeout);
  }, []);

  const handleChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div className="container flex justify-center items-center">
      <div className="filter-bar overflow-x-auto px-10 flex gap-10 h-auto w-fit max-w-full border-b-2 border-[#00000025]">
        {categories
          ? categories.map((el, index) => {
              return (
                <label
                  className={`
                  ${
                    el == selectedCategory
                      ? "border-b-2 text-main_color"
                      : "text-squant border-none"
                  }
                  text-nowrap pb-3 md:text-lg border-b-main_color cursor-pointer transition-colors duration-500`}
                  htmlFor={el}
                >
                  <input
                    className="hidden"
                    type="radio"
                    id={el}
                    name="category"
                    value={el}
                    checked={selectedCategory === el}
                    onChange={handleChange}
                  />
                  {el}
                </label>
              );
            })
          : "loading..."}
      </div>
    </div>
  );
}

export default FilterBar;
