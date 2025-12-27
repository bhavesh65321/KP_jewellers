
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetailsPage from "./pages/ProductDetailsPage";


export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:category" element={<ProductDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
