import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";
import User from "./Pages/User";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<User />} />
      <Route path="/Admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);
