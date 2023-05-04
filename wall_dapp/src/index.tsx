import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DAppProvider } from "@usedapp/core";
import Portfolio from "./components/Portfolio";
import App from "./App";

<link rel="stylesheet" href="./index.css"></link>

const routes = () => {
  return (
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="*" element={<h1>Oops! Something went wrong.</h1>} />
    </Routes>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <BrowserRouter>
      {routes()}
      </BrowserRouter>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
