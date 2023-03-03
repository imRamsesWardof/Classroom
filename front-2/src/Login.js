import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                UPA - All rights reserved
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function PositionedSnackbar() {
    const [open, setOpen] = React.useState(true);

    const handleClick = (newState) => {
        setState({
            open: true,
            ...newState
        });
    };


    const handleClose = (newState) => {
        setState({ ...newState, open: false });
    };

    return (
        <React.Fragment>
            <Snackbar
                open={open}
                onClose={(event, reason) => {
                    // `reason === 'escapeKeyDown'` if `Escape` was pressed
                    setOpen(false);
                    // call `event.preventDefault` to only close one Snackbar at a time.
                }}
            />
            <Snackbar open={open} onClose={() => setOpen(false)} />
        </React.Fragment>
    );
}

export default function LogIn() {
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        var accessData = {
            email: data.get('email'),
            password: data.get('password'),
        };

        //! Configurar el envio de las credenciales con fetch.
        fetch('login/auth', {   // Cambiar a la ruta que haga el match de contraseñas y otorgue el jwt.
            method: 'POST',
            body: accessData,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                if (!response.ok) {
                    alert("Something went wrong");
                }
                else {
                    console.log(response);
                    navigate('/Login');
                }
            })
            .catch(error => {
                alert(error)
            });
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid item md={12} sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <PositionedSnackbar />

                <Paper sx={{ p: 8, margin: 30, maxWidth: 500, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <HistoryEduIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log In
                    </Typography>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, justify: 'center' }}>
                        <TextField margin="normal" required fullWidth id="email" label="Email"
                            name="email" autoComplete="email" autoFocus />
                        <TextField margin="normal" required fullWidth name="password" label="Password"
                            type="password" id="password" autoComplete="current-password" />
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, marginLeft: 'auto' }}>
                            Log In
                        </Button>
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}
