import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { borderRadius } from '@mui/system';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 5, 
};


export default function DeleteModal(props) {
  const [open, setOpen] = React.useState(false);
  const [translated, setTranslated] = React.useState('');

  let type_spanish
  const handleOpen = () => {
    setOpen(true)
    switch(props.role){
      case "Student":
        setTranslated("Alumno")
        break;
      case "Teacher":
        setTranslated("Maestro")
        break;
      case "Class":
        setTranslated("Clase")
        break;
    }
  };
  const handleClose = () => setOpen(false);
  let route = "/" + props.role + "/Delete/" + props.id
  const deleteButton = () => {
    fetch(route, {method: 'DELETE',})
    .catch(alert("No se eliminó"))
  }
  
  return (
    <div>
      <IconButton onClick={handleOpen} color="error"><DeleteOutlineIcon/></IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Confirmación de eliminación de datos
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            ¿Está seguro de eliminar "{props.name}"<br/>
            Tipo : {translated}
          </Typography>
          <Button onClick={handleClose} variant="contained" sx={{ m: 2 }}> Cancelar</Button>
          <Button onClick={deleteButton} color="error" variant="contained" sx={{ m: 2 }}> Eliminar</Button>
        </Box>
      </Modal>
    </div>
  );
}