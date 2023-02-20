import Button from '@mui/material/Button';
import React from 'react';
import {Link} from "react-router-dom";

export default function MenuAdminTeacher(props) {
    let main_route = '/Admin/'
    let role = props.role
  return (<div>
    <Button component={Link} to={main_route + role + "/Add"}>Añadir</Button>
    <Button component={Link} 
      to={main_route + role + "/Edit/24894949-e24e-44ca-841e-d4683760d4ee"}
      state={{name: "dfghdf",
              username: "fdghdf@sdfasd",
              password: "asdf"}} >Editar</Button>
    </div>
  );
}