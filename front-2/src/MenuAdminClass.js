import Button from '@mui/material/Button';
import React from 'react';
import {Link} from "react-router-dom";
import  List  from './ListClass';

export default function MenuAdminClass(props) {
    let main_route = '/Admin/'
    let role = props.role
    /*
     */
     console.log('ejec')
  return (<div>
    <Button component={Link} to={main_route + role + "/Add"}>Añadir</Button>
    <Button component={Link} to={main_route + role + "/Assign"}>Asignar Clases</Button>
    <List userList='Classes'/>
    </div>
  );
}