import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ClasCardv2() {

    const navigate = useNavigate()
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874_640.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" 
          onClick={() => {
/*             window.location.href =
              "http://localhost:3000/Admin/Classes/Edit/" + "Class_Id";
 */          
                navigate('/Login')
            }}
          >
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ClasCardv2;
