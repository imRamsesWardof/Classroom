import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react';
import { UserContext } from './App';
import { useNavigate } from "react-router-dom";

export default function App() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    
    // const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
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
                    <Button variant="contained" onClick={()=> { setUser({}); navigate('/Login');}}>LogOut</Button>
                </MenuItem>
            </Toolbar>
        </AppBar>
    </>)
}