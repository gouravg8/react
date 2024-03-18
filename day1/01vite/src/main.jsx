import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  CurrencyConvo,
  BgChanger,
  PassGen,
  Home,
  homeLoader,
} from "./components/index";
import Layout from "./Layout/Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} loader={homeLoader} />
      <Route path="passgen" element={<PassGen />} />
      <Route path="bgchanger" element={<BgChanger />} />
      <Route path="currencyconvo" element={<CurrencyConvo />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
