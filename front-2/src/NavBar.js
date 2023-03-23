import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonLogInOut from './ButtonLogInOut';
import MenuItem from '@mui/material/MenuItem';

export default function NavBar() {
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
                <MenuItem>
                    <ButtonLogInOut/>
                </MenuItem>
            </Toolbar>
        </AppBar>
    </>)
}