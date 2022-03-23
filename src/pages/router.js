import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/index";
import Counter from "./counter/counter";
import Home from "./Home/index";
import GlobalLayout from "../Layout/index";
import LoginLayout from "../Layout/LoginLayout";

function Router() {
  return (
    <BrowserRouter>
      <GlobalLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </GlobalLayout>
    </BrowserRouter>
  );
}

export default Router;
