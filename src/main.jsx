import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Sweeper from "./pages/Sweeper";
//import PaymentRotation from "./pages/PaymentRotation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Navbar from "./components/Navvbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="sweeper" element={<Sweeper />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
