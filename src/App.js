import "./App.css";
import NavBar from "./components/navBar/NavBar.tsx";
import HomeSlider from "./components/homeSlider/HomeSlider.tsx";
import Categories from "./components/categories/Categories.tsx";

function App() {
  return (
    <>
      <NavBar />
      <HomeSlider />
      <Categories />
    </>
  );
}

export default App;
