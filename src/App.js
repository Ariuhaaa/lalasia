import "./App.css";
import { Footer, NavBar, Product } from "./components";
import { Landing, Products, Services, Article, AboutUs } from "./pages";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import ProductFilter from "./components/ProductFilter";

function App() {
  const [current, setCurrent] = useState();
  return (
    <div className="Container flex flex-d aling-items justify-content">
      <NavBar current={current} setCurrent={setCurrent} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="product/*" element={<Products />}>
          <Route path="card" element={<Product />} />
          <Route path="productFilter" element={<ProductFilter />} />
        </Route>
        <Route path="userLogin" element={<LoginPage />} />
        <Route path="services" element={<Services />} />
        <Route path="article" element={<Article />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
