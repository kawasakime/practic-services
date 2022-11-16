import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { config } from "./configs/config";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

document.title = config.title;

root.render(
  <BrowserRouter basename="/services-sweetshop">
  {/* <BrowserRouter> */}
    <App />
  </BrowserRouter>
);
