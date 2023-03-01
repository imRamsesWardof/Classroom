import * as React from "react";
import { NativeRouter, Routes, Route } from "react-router-native";
import { StyleSheet, View, Text } from 'react-native';
import Login from '../Views/Login'
import NoAuthorized from '../Views/NoAuthorized'
export default function MobileRoutes() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Estadisticas" element={<NoAuthorized/>}></Route>
      </Routes>
    </NativeRouter>
  );
}
