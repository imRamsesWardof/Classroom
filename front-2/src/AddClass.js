
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import { useOutletContext } from 'react-router-dom';
import SelectTeacher from './SelectTeacher';
import DatePicker from './DatePicker';

function AddClass(){
  
      let obj = useOutletContext()
      return (
        <Container>
          <Typography variant="h5">Añadir {obj.actualCrud}</Typography>
        <form action="/Class/Post" method="post">
        <FormGroup sx={{padding: 2, borderRadius: 2, border: '1px solid', borderColor: 'primary.main'}}>
          <Grid container alignContent='stretch' spacing={2}>
          <Grid item xs={12}>
            <TextField
            name='Title'
            required
            fullWidth
            id="outlined-required"
            label="Título"
            />
          </Grid>
          <Grid item xs={12}>
            <SelectTeacher fullWidth/>
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
            />
          </Grid><Grid item xs={6}>
            <DatePicker fullWidth  name="StartDate" label="Inicia"
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker fullWidth  name='EndDate' label="Finaliza"
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
  
  export default AddClass;