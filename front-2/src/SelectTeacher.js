import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectTeacher(props) {
  let list = []
  console.log(props.teacherId)
  fetch("/Teacher/Get", {method : "GET"})
    .then((response) => {return response.json()})
    .then((data) =>{ 
      data.forEach(element => {
        list.push(<MenuItem value={element.Id} key={element.Id}>{element.Name}</MenuItem>)
      });
    })
    .catch((error)=>console.log(error))
  console.log(props.teacherId)
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-teacher-lable">Maestro</InputLabel>
        <Select
          required
          name='Teacher_Id'
          labelId="select-teacher-lable"
          id="select-teacher"
          defaultValue={props.teacherId}
          label="Maestro"
          onChange={e => {props.onChange(e.target.value)}}
          
        >
          <MenuItem value="">Seleccione las opciones</MenuItem>
          {list}
        </Select>
      </FormControl>
    </Box>
  );
}