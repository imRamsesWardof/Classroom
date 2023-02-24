import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
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
      default:
        setTranslated("")
        break;

    }
  };
  console.log(props.role)
  
  const handleClose = () => setOpen(false);
 
  const deleteButton = () => {
    props.ConfirmAssign()
    navigate('/Admin/Classes/Details/'+props.idclase);
  }
  
  return (
    <div>
      <IconButton onClick={handleOpen} color="primary">Asignar </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Confirmación de asignacion de alumnos
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Se agregaran "{props.elementos}" elementos<br/>
            clase : {props.clase}
          </Typography>
          <Button onClick={handleClose} variant="contained" sx={{ m: 2 }}> Cancelar</Button>
          <Button onClick={deleteButton} color="success" variant="contained" sx={{ m: 2 }}> Asignar</Button>
        </Box>
      </Modal>
    </div>
  );
}