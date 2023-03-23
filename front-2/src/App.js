import React, { useState, useMemo } from "react";
import { Outlet, Link, Routes, Route } from "react-router-dom";
import AppAdmin from './AppAdmin';
import AdminLayout from './AdminLayout';
import UserData from './UserData';
import AddClass from './AddClass';
import DeleteModal from './DeleteModal';
import MenuAdminTeacher from './MenuAdminTeacher';
import MenuAdminStudent from './MenuAdminStudent';
import MenuAdminClass from './MenuAdminClass';
import ListDetails from './ListDetails';
import ListAssign from './ListAssign';
import LogIn from './Login';
import StudentHome from './views/StudentHome/StudentHome.jsx';
import TeacherHome from './views/TeacherHome/TeacherHome.jsx';
import NoAuth from './NoAuthorized';
import { createContext } from 'react';
import NavBar from './NavBar';
import ProtectedRoutes from "./ProtectedRoutes";

export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState({});
  // const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (<>
    <UserContext.Provider value={{ user, setUser }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Current user: {JSON.stringify(user)}</h1>}></Route>
        <Route path="/Home" element={<h1>Home Page</h1>}></Route>
        <Route path="/Login" element={<LogIn />}></Route>
        <Route path="/NoAuthorized" element={<NoAuth />}></Route>
        <Route path="/Register" element={<h1>Register Page</h1>}></Route>
        <Route path="/Students" element={<StudentHome/>}></Route>
        <Route path="/Teachers" element={<TeacherHome/>}></Route>
        <Route path="/Test" element={<h1>Test Page</h1>}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
        <Route path="/Admin" element={<ProtectedRoutes role="Admin" />}>
          <Route index element={<AdminLayout />}></Route>
          <Route path="Classes" element={<AppAdmin actualCrud="Clase" />}>
            <Route index element={<MenuAdminClass role="Classes" />}></Route>
            <Route path='Add' element={<AddClass action="Post" />}></Route>
            <Route path='Edit/:id' element={<AddClass action="Put" />}></Route>
            <Route path='Assign/' element={<ListAssign />}></Route>
            <Route path='Details/:id' element={<ListDetails />}></Route>
          </Route>
          <Route path="Teachers" element={<AppAdmin actualCrud="Teacher" />}>
            <Route index element={<MenuAdminTeacher role="Teachers" />}></Route>
            <Route path='Add' element={<UserData role="Teacher" action="Post" />}></Route>
            <Route path='Edit/:id' element={<UserData role="Teacher" action="Put" />}></Route>
          </Route>
          <Route path="Students" element={<AppAdmin actualCrud="Student" />}>
            <Route index element={<MenuAdminStudent role="Students" />}></Route>
            <Route path='Add' element={<UserData role="Student" action="Post" />}></Route>
            <Route path='Edit/:id' element={<UserData role="Student" action="Put" />}></Route>
            <Route path='Delete/:id' element={<DeleteModal role="Student" id='21965c0a-56e9-4425-a1c4-78649c996d71' />}></Route>
          </Route>
        </Route>
        {/* LAS SIGUIENTES RUTAS SON DE PRUEBA: */}
        <Route path="/Teachers" element={<ProtectedRoutes role="Teacher" />}>
          <Route index element={<h1>Welcome Teacher</h1>}></Route>
        </Route>

        <Route path="/Students" element={<ProtectedRoutes role="Student" />}>
          <Route index element={<h1>Welcome Student</h1>}></Route>
          <Route path="CurrentClass" element={<h1>Chemistry</h1>}>
            <Route index element={<h1>U are in Chemistry class</h1>}></Route>
          </Route>
        </Route>
      </Routes>
    </UserContext.Provider >
    <Outlet />
  </>)
}
