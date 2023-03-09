
import React from 'react';
import { Outlet, Link, Routes, Route } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
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

class App extends React.Component {
  render() {
    return (<>
      <AppBar position="static">
        <Toolbar>
          <MenuItem component={Link} to="/Admin" key="Admin">
            <Typography textAlign="center">Administrador</Typography>
          </MenuItem>
          <MenuItem component={Link} to="/Teachers" key="Teachers">
            <Typography textAlign="center">Maestros</Typography>
          </MenuItem>

          <MenuItem component={Link} to="/Students" key="Students">
            <Typography textAlign="center">Estudiantes</Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<h1>Default Page</h1>}></Route>
        <Route path="/Home" element={<h1>Home Page</h1>}></Route>
        <Route path="/Login" element={<LogIn/>}></Route>
        <Route path="/Register" element={<h1>Register Page</h1>}></Route>
        <Route path="/Students" element={<StudentHome/>}></Route>
        <Route path="/Teachers" element={<TeacherHome/>}></Route>
        <Route path="/Test" element={<h1>Test Page</h1>}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
        <Route path="/Admin" element={<AdminLayout />}>
          <Route index element={<Typography textAlign="center"> Bienvenido Admin</Typography>}></Route>
          <Route path="Classes" element={<AppAdmin actualCrud="Clase"/>}>
            <Route index element={<MenuAdminClass role="Classes"/>}></Route>
            <Route path='Add' element={<AddClass action="Post"/>}></Route>
            <Route path='Edit/:id' element={<AddClass action="Put"/>}></Route>
            <Route path='Assign/' element={<ListAssign  />}></Route>
            <Route path='Details/:id' element={<ListDetails />}></Route>
          </Route>
          <Route path="Teachers" element={<AppAdmin actualCrud="Teacher" />}>
            <Route index element={<MenuAdminTeacher role="Teachers" />}></Route>
            <Route path='Add' element={<UserData role="Teacher" action="Post" />}></Route>
            <Route path='Edit/:id' element={<UserData role="Teacher" action="Put" />}></Route>
          </Route>
          <Route path="Students" element={<AppAdmin actualCrud="Student"/>}>
            <Route index element={<MenuAdminStudent role="Students"/>}></Route>
            <Route path='Add' element={<UserData role="Student" action="Post"/>}></Route>
            <Route path='Edit/:id' element={<UserData role="Student" action="Put"/>}></Route>
            <Route path='Delete/:id' element={<DeleteModal role="Student" id='21965c0a-56e9-4425-a1c4-78649c996d71'/>}></Route>
          </Route>
        </Route>
      </Routes>
      <Outlet />
    </>)
  }
}

export default App;