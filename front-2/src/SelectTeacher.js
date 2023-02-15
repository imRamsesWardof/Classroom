import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';

export default function SelectTeacher() {
  const [teacher, setTeacher] = React.useState('');
  useEffect(()=>{ 
    fetch("/Teacher/Get", {method : "GET"})
    .then((response) => {return response.json()})
    .then((data) => console.log(data))
    .catch((error)=>console.log(error))
  })
  const handleChange = (event) => {
    setTeacher(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Maestro</InputLabel>
        <Select
        required
        name='Teacher_Id'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={teacher}
          label="Maestro"
          onChange={handleChange}
        >
          <MenuItem value={"Hola"}>Hola</MenuItem>
          <MenuItem value={"Como"}>Como</MenuItem>
          <MenuItem value={"Estas"}>Estas</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}