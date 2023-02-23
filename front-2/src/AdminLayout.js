import React from 'react';
import { Outlet, Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

class AdminLayout extends React.Component{
    render(){
        return(<>
            <AppBar position="static">
            <Toolbar>
            <MenuItem component={Link} to="/Admin/Classes" key="Classes" href="/Classes">
                <Typography textAlign="center">Clases</Typography>
            </MenuItem>
            <MenuItem component={Link} to="/Admin/Teachers" key="Teachers" href="/Teachers">
                <Typography textAlign="center">Maestros</Typography>
            </MenuItem>
            <MenuItem component={Link} to="/Admin/Students" key="Students" href="/Students">
                <Typography textAlign="center">Estudiantes</Typography>
            </MenuItem>
            
        </Toolbar>
        </AppBar>
        <Outlet />
        </>)
    }
}


export default AdminLayout;