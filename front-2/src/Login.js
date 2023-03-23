import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useSnackbar } from 'notistack'
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './App';

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

export default function LogIn() {
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let accessData = JSON.stringify({
            "Username": data.get('Username'),
            "Password": data.get('Password'),
        })

        fetch('http://localhost:4000/LoginWeb', {
            method: 'POST',
            body: accessData,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                if (!response.ok) {
                    return response.json()
                        .then(error => Promise.reject({ message: `${response.status}: ${error.Message}`, severity: error.Severity }));
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                // {message: '!Login exitoso, Inicia sesión!', role: 'Teacher', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwM…jc4fQ.FvaacbLCYqa8P6PPVf4_cAPdyyxg3s2gdhYj_7W2KHI'}
                setUser({ role: data.role, token: data.token });
                enqueueSnackbar('Login successful', {
                    variant: 'success'
                });
                navigate('/');
            })
            .catch(error => {
                enqueueSnackbar('Password or user incorrect', {
                    variant: 'error',
                });
            });


    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid item md={12} sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Paper elevation={6} sx={{ p: 8, margin: 30, maxWidth: 500, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <HistoryEduIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        LogIn
                        {/* Log In, {JSON.stringify(user)} */}
                    </Typography>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, justify: 'center' }}>
                        <TextField margin="normal" required fullWidth id="email" label="Email"
                            name="Username" autoComplete="email" autoFocus />
                        <TextField margin="normal" required fullWidth name="Password" label="Password"
                            type="Password" id="password" autoComplete="current-password" />
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
