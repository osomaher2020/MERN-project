import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages container mt-2">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
