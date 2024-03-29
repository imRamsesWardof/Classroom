import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function AdminRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Default Page</h1>}></Route>
        <Route path="/Classes" element={<h1>Classes</h1>}></Route>
        <Route path="/Teachers" element={<h1>Teachers</h1>}></Route>
        <Route path="/Students" element={<h1>Students</h1>}></Route>
      </Routes>

    <Outlet />
    </BrowserRouter>
  );
}

export default AdminRoutes;