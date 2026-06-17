import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import App from "./pages/App.jsx";
import Review from "./pages/Review.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
