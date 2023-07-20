import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CustomButton, CustomizedTextField } from '../../globalStyle';
import { Button } from '@mui/material';
import { useLoginMutation } from '../../app/store';
// import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { z, ZodType } from 'zod';

function SignIn() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [loginHandler, results] = useLoginMutation();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        if (data.get('email') && data.get('password')) {
            loginHandler({
                email: String(data.get('email')),
                password: String(data.get('password')),
            });
        }
    };

    React.useEffect(() => {
        if (results.data?.status) {
            localStorage.setItem('car-wash-token', results.data.data.api_token);
            navigate('/');
        }
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
                    <Box display={'flex'} justifyContent={'center'} gap={1}>
                        <Typography>ليس لديك حساب؟</Typography>
                        <Link to={'/signup'} style={{ color: '#1975FF' }}>
                            إنشاء حساب
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
