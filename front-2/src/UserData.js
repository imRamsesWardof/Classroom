
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import { useOutletContext, useParams } from 'react-router-dom';

function UserData(props){
      let id = useParams()
      let obj = useOutletContext()
      let route
      if (obj.action === 'Post'){
        route = "/" + props.role + "/" + props.action
      }
      else if (obj.action === 'Put'){
        route = "/" + props.role + "/" + props.action + "/" + id
      }
      
      return (
        <Container>
          <Typography variant="h5">Añadir {obj.actualCrud}</Typography>
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
          />
          </Grid>
          <Grid item xs={6}>
            <TextField
            required
            fullWidth
            id="outlined-password-input"
            type="password"
            label="Confirmar Contraseña"
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