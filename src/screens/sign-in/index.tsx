import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CustomButton, CustomizedTextField } from '../../globalStyle';
import { Button } from '@mui/material';
import { useLoginMutation } from '../../app/store';
import { authenticated } from '../../features/isAuth';
// import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function SignIn() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [loginHandler, results] = useLoginMutation();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        // const headers = {
        //     'Content-Type': 'application/json',
        // };
        // const body = {
        //     email: 'admin@admin.com',
        //     password: 'password',
        // };
        // axios
        //     .post(
        //         'https://car-wash.eltamiuz.net/api/dashboard/v1/login',
        //         body,
        //         { headers: headers }
        //     )
        //     .then(res => console.log(res));

        if (data.get('email') && data.get('password')) {
            loginHandler({
                email: String(data.get('email')),
                password: String(data.get('password')),
            });
        }
        if (results.data?.status) {
            localStorage.setItem('car-wash-token', results.data.data.api_token);
            dispatch(authenticated());
            navigate('/');
        }
        console.log('results: ', results);
    };

    React.useEffect(() => {
        console.log('auth resutls: ', results);
    }, [results]);

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />

            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square>
                <Box
                    sx={{
                        my: 16,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                    }}>
                    <Typography fontWeight={600} component="h2" variant="h5">
                        تسجيل دخول{' '}
                    </Typography>
                    <Typography>
                        اهلا بعودتك! يرجى ادخال البيانات بالاسفل
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}>
                        <Typography>البريد الإلكرتوني</Typography>

                        <CustomizedTextField
                            margin="dense"
                            required
                            fullWidth
                            id="email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            placeholder="البريد الإلكرتوني"
                        />
                        <Typography>كلمة المرور</Typography>
                        <CustomizedTextField
                            margin="dense"
                            required
                            fullWidth
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            placeholder="كلمة المرور"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="حفظ بيانات الدخول"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            تسجيل الدخول{' '}
                        </Button>
                    </Box>
                </Box>
            </Grid>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${require('../../assets/images/sign-in.webp')})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: t =>
                        t.palette.mode === 'light'
                            ? t.palette.grey[50]
                            : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
        </Grid>
    );
}

export default SignIn;
