import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { SeriePage } from "./pages/SeriePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv/:tv_id" element={<SeriePage />} />
      </Routes>
    </div>
  );
}

export default App;
