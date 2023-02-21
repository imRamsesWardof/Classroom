
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import SelectTeacher from './SelectTeacher';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function AddClass(props){
  let id = useParams().id
  let route
  const navigate = useNavigate();
  const location = useLocation()
  const data = location.state 
  if (props.action === 'Post') {
    route = "/Class/" + props.action
  }
  else if (props.action === 'Put') {
    console.log(id)
    route = "/Class/" + props.action + "/" + id
  }
  let accion
  if (props.action === 'Post') {
    accion = "Añadir "
  }
  if (props.action === 'Put') {
    accion = "Actualizar "
  }
  const [title, setTitle] = useState(data ? data.Title : '')
  const [description, setDescription] = useState(data ? data.Description : '')
  const [teacherid, setTeacherId] = useState(data ? data.TeacherId : '')
  const [startDate, setStartDate] = useState(data ? data.StartDate : new Date())
  const [endDate, setEndDate] = useState(data ? data.EndDate : new Date())
  const [disabled, setDisabled] = useState(true)
  const [errorDate, setErrorDate] = useState('')

  useEffect(() => {
    console.log("Inicio")
    console.log(title)
    console.log(description)
    console.log(teacherid)
    console.log(startDate)
    console.log(endDate)
    console.log(disabled)
    console.log(errorDate)
    if (dayjs(startDate).toDate().getTime() > dayjs(endDate).toDate().getTime()){
      setErrorDate("La fecha de finalización se muestra que es antes de la de inicio, favor de verificar")
    }
    else{
      setErrorDate('')
    }
    if(title === '' || description === '' || teacherid === "" || errorDate !== ''){
      setDisabled(true)
    }
    else{
      setDisabled(false)
    }
  }, [title, description, teacherid, startDate, endDate, errorDate])
  const handleSubmit = (e) => {
    e.preventDefault()
    let requestData = JSON.stringify({ 
      "Title": title,
      "Description": description, 
      "User_Id": teacherid, 
      "StartDate": dayjs(startDate).toDate(), 
      "EndDate": dayjs(endDate).toDate() })
    if (props.action === 'Put') {
      fetch(route, {
        method: 'PUT',
        body: requestData,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            alert("Something went wrong")
          }
          else {
            navigate('/Admin/Classes');
          }
        })
        .catch(error => {
          alert(error)
        });
    }
    else {
      fetch(route, {
        method: 'POST',
        body: requestData,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            alert("Something went wrong")
          }
          else {
            console.log(response)
            navigate('/Admin/Classes');
          }
        })
        .catch(error => {
          alert(error)
        });
    }

  }
  
      return (
        <Container>
          <Typography variant="h5">{accion} Clase</Typography>
        <form onSubmit={handleSubmit}>
        <FormGroup sx={{padding: 2, borderRadius: 2, border: '1px solid', borderColor: 'primary.main'}}>
          <Grid container alignContent='stretch' spacing={2}>
          <Grid item xs={12}>
            <TextField
            name='Title'
            required
            fullWidth
            id="outlined-required"
            label="Título"
            onChange={e=>setTitle(e.target.value)}
            defaultValue={title}
            />
          </Grid>
          <Grid item xs={12}>
            <SelectTeacher fullWidth onChange={(data) => setTeacherId(data)} teacherId={teacherid}/>
          </Grid>
          <Grid item xs={12}>
            <TextField
            name='Description'
            required
            fullWidth
            id="outlined-multiline-flexible"
            label="Descripción"
            multiline
            maxRows={4}
            defaultValue={description}
            onChange={e=>setDescription(e.target.value)}
            />
          </Grid><Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    fullWidth
                    required
                    name="StartDate"  
                    label="Inicia" 
                    inputFormat="MM/DD/YYYY"
                    value={startDate}
                    onChange={date => {setStartDate(date)}
                    }
                    renderInput={(params) => <TextField 
                      {...params} sx={{ width:"100%" }} 
                      error={!!errorDate}
                      helperText={errorDate}
                    />}
                  />
              </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  required
                  name="EndDate"
                  label="Finaliza"
                  inputFormat="MM/DD/YYYY"
                  value={endDate}
                  onChange={date => {setEndDate(date)}}
                  renderInput={(params) => <TextField 
                    {...params} sx={{ width:"100%" }} 
                    error={!!errorDate}
                    helperText={errorDate}
                  />}
                />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={11} >
          </Grid>
          <Grid item xs={1}>
            <Button type="submit" variant="outlined" disabled={disabled}>Enviar </Button>
          </Grid>
          
          
        </Grid>
        </FormGroup>
        </form>
        </Container>
        
      );

    
  }
  
  export default AddClass;


  