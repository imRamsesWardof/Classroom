import * as React from "react";
import { NativeRouter, Routes, Route, Outlet } from "react-router-native";
import { StyleSheet, View, Text } from 'react-native';
import Login from '../Views/Login'
import NoAuthorized from '../Views/NoAuthorized'
import Home from '../Views/Home'

export default function MobileRoutes() {
  return (
    <NativeRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Estadisticas" element={<NoAuthorized/>}></Route>
        <Route path="/NoAuthorizado" element={<NoAuthorized/>}></Route>
      </Routes>
      <Outlet/>
    </NativeRouter>
  );
}
