import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/sections/Header";
import { Home } from "./pages/Home";
import { ShopifyLearnMore } from "./pages/ShopifyLearnMore";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopify-learn-more" element={<ShopifyLearnMore />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
