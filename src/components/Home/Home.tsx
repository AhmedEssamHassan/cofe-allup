import React from "react";
import NavBar from "../navBar/NavBar";
import Categories from "../categories/Categories";
import HomeSlider from "../homeSlider/HomeSlider";

function Home({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <HomeSlider />
      <Categories />
    </div>
  );
}

export default Home;
