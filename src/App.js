import "./App.css";
import Home from "./components/Home/Home";
import Signin from "./components/signin/Signin";
import Info from "./components/info/info";
import Verification from "./components/verification/Verification";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signin/verify" element={<Verification />} />
      <Route
        path="/signin/info"
        element={<Info setIsLoggedIn={setIsLoggedIn} />}
      />
      <Route path="/profile" element={<>profile</>} />
      <Route path="/terms" element={<>terms</>} />
      <Route path="/Conditions" element={<>Conditions</>} />
      <Route path="/Privacy" element={<>Privacy Policy</>} />
    </Routes>
  );
}

export default App;
