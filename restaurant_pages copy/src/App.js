import "./App.css";
import ChefPage from "./pages/ChefPage";
import AllRecipe from "./pages/AllRecipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Home from "./pages/home";
import CreateRecipe from "./pages/CreateRecipe";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChefPage" element={<ChefPage />} />
        <Route path="/AllRecipe" element={<AllRecipe />} />
        <Route path="/CreateRecipe" element={<CreateRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
