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
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let accessData = JSON.stringify({
            "Username": data.get('Username'),
            "Password": data.get('Password'),
        })

        fetch('/LoginWeb', {
            method: 'POST',
            body: accessData,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                if (!response.ok) {
                    enqueueSnackbar('Password or user incorrect', {
                        variant: 'error',
                    });
                }
                else {
                    enqueueSnackbar('Login successful', {
                        variant: 'success'
                    });
                    navigate('/');
                }
                return response.json();
            })
            // .then(data => {
            //     navigate('/Login');
            // })
            .catch(error => {
                alert(error)
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
                        Log In
                    </Typography>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, justify: 'center' }}>
                        <TextField margin="normal" required fullWidth id="email" label="Email"
                            name="Username" autoComplete="email" autoFocus />
                        <TextField margin="normal" required fullWidth name="Password" label="Password"
                            type="Password" id="password" autoComplete="current-password" />
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
