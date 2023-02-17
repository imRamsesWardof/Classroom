import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../App';

function IndexRoutes() {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );
}

export default IndexRoutes;
