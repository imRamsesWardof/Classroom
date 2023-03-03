import Button from '@mui/material/Button';
import React from 'react';
import {Link} from "react-router-dom";
import List from './List'
export default function MenuAdminTeacher(props) {
    let main_route = '/Admin/'
    let role = props.role
    
  return (<div>
    <Button component={Link} to={main_route + role + "/Add"}>Añadir</Button>
    <List userList='Teachers'/>
    </div>
  );
}