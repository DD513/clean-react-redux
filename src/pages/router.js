import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteApp from "../components/RouteApp";

import Login from "./Login/index";
import Counter from "./counter/counter";
import Home from "./Home/index";
import GlobalLayout from "../Layout/index";

function Router() {
  return (
    <BrowserRouter>
      <GlobalLayout>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="counter" element={<Counter />} />
        </Routes>
      </GlobalLayout>
    </BrowserRouter>
  );
}

export default Router;
