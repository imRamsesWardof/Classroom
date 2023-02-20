
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Card from '@mui/material/Card';
import { useParams } from 'react-router-dom';
import { CardContent, CardHeader } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

function UserData(props) {
  let id = useParams().id
  let route
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location)
  const data = location.state 
  console.log(data)
  if (props.action === 'Post') {
    route = "/" + props.role + "/" + props.action
  }
  else if (props.action === 'Put') {
    route = "/" + props.role + "/" + props.action + "/" + id
  }
  let rol
  if (props.role === 'Teacher') {
    rol = 'Maestro'
  }
  if (props.role === 'Student') {
    rol = 'Estudiante'
  }
  let accion
  if (props.action === 'Post') {
    accion = "Añadir "
  }
  if (props.action === 'Put') {
    accion = "Actualizar "
  }
  let title = accion + rol
  const [password, setPassword] = useState(data ? data.password : "")
  const [confirm, setConfirm] = useState(data ? data.password : "")
  const [name, setName] = useState(data ? data.name : "")
  const [username, setUsername] = useState(data ? data.username : "")
  const [errorConfirm, setErrorConfirm] = useState('')
  const [disabled, setDisabled] = useState(true)
  const checkPassword = e => {
    if (e.target.name === 'Password') {
      setPassword(e.target.value)
    }
    if (e.target.name === 'Confirm') {
      setConfirm(e.target.value)
    }
  }
  useEffect(() => {
    if (password === confirm) {
      setErrorConfirm('')
    }
    else {
      setErrorConfirm('La contraseña y la confirmación no son iguales, favor de verificar')
    }
    if(password === '' || name === '' || username === '' || errorConfirm !== ''){
      setDisabled(true)
    }
    else{
      setDisabled(false)
    }
  }, [password, confirm, name, username, errorConfirm])
  const handleSubmit = (e) => {
    e.preventDefault()
    let requestData = JSON.stringify({ "Name": name, "Username": username, "Password": password })
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
            navigate(`/Admin/` + props.role + "s");
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
            navigate(`/Admin/` + props.role + "s");
          }
        })
        .catch(error => {
          alert(error)
        });
    }

  }
  return (
    <Card>
      <CardHeader title={title}></CardHeader>
      <CardContent m={2} >
        <form action={route} onSubmit={handleSubmit}>
          <FormGroup sx={{ padding: 2, borderRadius: 2, border: '1px solid', borderColor: 'primary.main' }}>
            <Grid container spacing={2} p={2}>
              <Grid item xs={12}>
                <TextField
                  name='Name'
                  required
                  fullWidth
                  id="outlined-required"
                  label="Nombre"
                  defaultValue={name}
                  onChange={e => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='Username'
                  required
                  fullWidth
                  id="username"
                  label="Usuario"
                  type="email"
                  defaultValue={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  id="outlined-password-input"
                  type="password"
                  label="Contraseña"
                  defaultValue={password}
                  onChange={checkPassword}
                  error={!!errorConfirm}
                  helperText={errorConfirm}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="outlined-password-input"
                  type="password"
                  label="Confirmar Contraseña"
                  name="Confirm"
                  onChange={checkPassword}
                  error={!!errorConfirm}
                  helperText={errorConfirm}
                  defaultValue={password}
                />
              </Grid>
              <Grid item xs={11} >
              </Grid>
              <Grid item xs={1}>
                <Button type="submit" variant="outlined" disabled={disabled}>Enviar </Button>
              </Grid>

            </Grid>
          </FormGroup>
        </form>
      </CardContent>

    </Card>

  );


}

export default UserData;