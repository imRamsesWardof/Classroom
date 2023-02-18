import Button from '@mui/material/Button';
import React from 'react';
import {Link} from "react-router-dom";

export default function MenuAdminStudent(props) {
    let main_route = '/Admin/'
    let role = props.role
  return (<div>
    <Button component={Link} to={main_route + role + "/Add"}>Añadir</Button>
    <Button 
      component={Link} 
      to={main_route + role + "/Edit/4330bb8f-bf61-4fae-bf1f-994159c0b8e9"} 
      state={{name: "estudianteEstrella",
        username: "adf@gma",
        password: "esd"}
      }
    >Editar</Button>
    </div>
  );
}