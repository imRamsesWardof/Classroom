import * as React from "react";
import { NativeRouter, Routes, Route, Outlet } from "react-router-native";
import { StyleSheet, View, Text } from 'react-native';
import Login from '../views/Login'
import NoAuthorized from '../views/NoAuthorized'
import Statistics from '../views/Statistics'
import Home from '../views/Home'
import ProtectedRoutes from '../ProtectedRoutes'

export default function MobileRoutes() {
  return (
    <NativeRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Admin" element={<ProtectedRoutes/>}>
          <Route path="Estadisticas" element={<Statistics />}></Route>
          <Route path="NoAuthorizado" element={<NoAuthorized />}></Route>
        </Route>
      </Routes>
      <Outlet />
    </NativeRouter>
  );
}
