
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

function UserData(props){
      let id = useParams()
      let route
      if (props.action === 'Post'){
        route = "/" + props.role + "/" + props.action
      }
      else if (props.action === 'Put'){
        route = "/" + props.role + "/" + props.action + "/" + id
      }
      const [password, setPassword] = useState('')
      const [confirm, setConfirm] = useState('')
      const [errorConfirm, setErrorConfirm] = useState('')

      const checkPassword = e => {
        if(e.target.name == 'Password'){
          setPassword(e.target.value)
        }
        if(e.target.name == 'Confirm'){
          setConfirm(e.target.value)
        }
      } 
      useEffect(()=>{
        if (password === confirm){
          setErrorConfirm('')
        }
        else{
          setErrorConfirm('La contraseña y la confirmación no son iguales, favor de verificar')
        }}, [password, confirm])
      return (
        <Container>
          <Typography variant="h5">Añadir {props.actualCrud}</Typography>
        <form action={route} method="post">
        <FormGroup sx={{padding: 2, borderRadius: 2, border: '1px solid', borderColor: 'primary.main'}}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
            name='Name'
            required
            fullWidth
            id="outlined-required"
            label="Nombre"
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
            onChange = {checkPassword}
            error={!!errorConfirm}
            helperText={errorConfirm}
          />
          </Grid>
          <Grid item xs={11} >
          </Grid>
          <Grid item xs={1}>
            <Button type="submit" variant="outlined">Enviar </Button>
          </Grid>
        
        </Grid>
        </FormGroup>
        </form>
        </Container>
        
      );

    
  }
  
  export default UserData;