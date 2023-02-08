import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function IndexRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Default Page</h1>}></Route>
        <Route path="/Home" element={<h1>Home Page</h1>}></Route>
        <Route path="/Login" element={<h1>Login Page</h1>}></Route>
        <Route path="/Register" element={<h1>Register Page</h1>}></Route>
        <Route path="/Test" element={<h1>Test Page</h1>}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default IndexRoutes;
