import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CustomButton, CustomizedTextField } from '../../globalStyle';
import { Button } from '@mui/material';
import axios from 'axios';
import useAuth from '../../hooks/use-auth';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
    // const [loginHandler, results] = useLoginMutation();

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'include',
        };
        const body = {
            email: 'admin@admin.com',
            password: 'password',
        };
        axios
            .post(
                'https://car-wash.eltamiuz.net/api/dashboard/v1/login',
                body,
                { headers: headers, withCredentials: true }
            )
            .then(res => console.log(res));

        // if (data.get('email') && data.get('password')) {
        //     loginHandler({
        //         email: String(data.get('email')),
        //         password: String(data.get('password')),
        //     });
        // }
        // console.log('results: ', results);
    };

    // React.useEffect(() => {
    //     console.log('auth resutls: ', results);
    // }, [results]);

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
                        إنشاء حساب{' '}
                    </Typography>
                    <Typography>يرجى ادخال بيانات التسجيل</Typography>
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            إنشاء حساب{' '}
                        </Button>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} gap={1}>
                        <Typography>لديك حساب</Typography>
                        <Link to={'/signin'} style={{ color: '#1975FF' }}>
                            تسجيل دخول
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${require('../../assets/images/sign-up.webp')})`,
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

export default SignUp;
