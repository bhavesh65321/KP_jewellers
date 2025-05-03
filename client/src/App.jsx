import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      {/* Main Content */}
      <HomePage />
    </div>
  );
}
