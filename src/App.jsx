import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CategoryPage } from "./pages/CategoryPage";
import { Home } from "./pages/Home";
import { MoviePage } from "./pages/MoviePage";

import { useState } from "react";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-zinc-800">
      <Navbar className="" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category/:selection/:page" element={<CategoryPage />} />

        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
