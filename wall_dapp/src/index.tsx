import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./App"
// Import DAppProvider
import { DAppProvider } from "@usedapp/core";
import Portfolio from "./Portfolio";

const router = createBrowserRouter([
  {
    path: "portfolio",
    element: <Portfolio />
    
  },
  {
    path: "/",
    element: <App />
    
  }
])

ReactDOM.render(
  <React.StrictMode>
    {/* 
       Wrap our app in the provider, config is required, 
        but can be left as an empty object: 
    */}
    <RouterProvider router={router}/>
    <DAppProvider config={{}}><BrowserRouter>
      <App /></BrowserRouter>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);