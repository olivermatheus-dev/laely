import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CategoryPage } from "./pages/CategoryPage";
import { Home } from "./pages/Home";
import { MoviePage } from "./pages/MoviePage";
import { SeriePage } from "./pages/SeriePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/tv/:id" element={<SeriePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
