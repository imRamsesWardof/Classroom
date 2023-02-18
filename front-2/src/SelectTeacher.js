import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectTeacher() {
  const [teacher, setTeacher] = React.useState("");
  let list = []
  fetch("/Teacher/Get", {method : "GET"})
    .then((response) => {return response.json()})
    .then((data) =>{ 
      data.forEach(element => {
        list.push(<MenuItem value={element.Id} key={element.Id}>{element.Name}</MenuItem>)
      });
    })
    .catch((error)=>console.log(error))
  const handleChange = (event) => {
    setTeacher(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-teacher-lable">Maestro</InputLabel>
        <Select
          required
          name='Teacher_Id'
          labelId="select-teacher-lable"
          id="select-teacher"
          defaultValue={""}
          value={teacher}
          label="Maestro"
          onChange={handleChange}
          
        >
          {list}
        </Select>
      </FormControl>
    </Box>
  );
}