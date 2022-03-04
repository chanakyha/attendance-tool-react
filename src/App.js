import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
