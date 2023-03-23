import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export default function NoAuth() {
    const navigate = useNavigate();

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card elevation={6} sx={{ p: 8, margin: 30, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardContent>
                        <Typography variant="h1" component="h2">
                            401 Unauthorized
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ pt: 5 }}>
                        <Button variant="contained" size="large" onClick={()=> navigate('/Login')}>Go to login</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}
