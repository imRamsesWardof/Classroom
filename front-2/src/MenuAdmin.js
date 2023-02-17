import Button from '@mui/material/Button';
import React from 'react';
import {Link} from "react-router-dom";

export default function MenuAdmin(props) {
    let main_route = '/Admin/'
    let role = props.role
  return (<div>
    <Button component={Link} to={main_route + role + "/Add"}>Añadir</Button>
    <Button component={Link} to={main_route + role + "/Edit/1"}>Editar</Button>
    </div>
  );
}