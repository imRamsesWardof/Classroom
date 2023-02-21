import Button from '@mui/material/Button';
import React from 'react';
import {Link} from "react-router-dom";

export default function MenuAdminClass(props) {
    let main_route = '/Admin/'
    let role = props.role
    /*
     */
  return (<div>
    <Button component={Link} to={main_route + role + "/Add"}>Añadir</Button>
    <Button component={Link} 
      to={main_route + role + "/Edit/5bcfad7f-de58-4a8f-a528-d948352c8a44"}
      state={{Title: "sfgdsfgds",
              Description: "asdfgdsfg",
              TeacherId: "24894949-e24e-44ca-841e-d4683760d4ee", 
              StartDate: new Date('2023-02-21 00:38:07'),
              EndDate: new Date('2023-02-22 00:00:00'),
              }} >Editar</Button>
    </div>
  );
}