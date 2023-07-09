import { createTheme, ThemeProvider } from '@mui/material';
import LayOut from './layout';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { Route, Routes } from 'react-router-dom';
import HomePage from './screens/homePage';
import Reservations from './screens/reservations';
import ReservationForm from './screens/reservations/form';
import ServicesForm from './screens/services/form';
import ReservationDetails from './screens/reservations/details';
import Users from './screens/users';
import Employees from './screens/employees';
import Coupons from './screens/coupons';
import ReservationLocations from './screens/reservationLocations';
import { useEffect } from 'react';
import CRUDRequests from './API';
import Services from './screens/services';
import CouponsForm from './screens/coupons/form';
import { ConfirmProvider } from 'material-ui-confirm';
import EmployeesDetails from './screens/employees/details';
import SignIn from './screens/sign-in';
import SignUp from './screens/sign-up';
import { token } from './utils/global-var';
import Protected from './components/protected';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

function App() {
    const { isAuth } = useSelector((state: RootState) => state.auth);

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    const theme = createTheme({
        palette: {
            primary: {
                main: '#4C2784',
                dark: '#1a0056',
                light: '#7c52b4',
            },
            secondary: {
                main: '#1975FF',
            },
        },
        typography: {
            fontFamily: 'Tajawal',
            fontSize: 12,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
        },
    });
    // const token = '207|shlkWhsII1LoVeEYgoA5WOXBD3QiLs0nvaB7WK8b';
    // localStorage.setItem('car-wash-token', token);
    // const isAuth = !!token;
    // useEffect(() => {
    //     // Example usage
    //     const fetchData = async () => {
    //         try {
    //             const response = await CRUDRequests.get('/users', {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             });
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, []);
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <ConfirmProvider>
                    {!isAuth && (
                        <Routes>
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/signup" element={<SignUp />} />
                        </Routes>
                    )}
                    {isAuth && (
                        <LayOut>
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <Protected>
                                            <HomePage />
                                        </Protected>
                                    }
                                />

                                <Route
                                    path="/reservations"
                                    element={<Reservations />}
                                />
                                <Route
                                    path="/reservations/form"
                                    element={
                                        <Protected>
                                            <ReservationForm />
                                        </Protected>
                                    }
                                />
                                <Route
                                    path="/reservations/:id"
                                    element={<ReservationDetails />}
                                />
                                <Route
                                    path="/users"
                                    element={
                                        <Protected>
                                            <Users />
                                        </Protected>
                                    }
                                />
                                <Route
                                    path="/employees"
                                    element={
                                        <Protected>
                                            <Employees />
                                        </Protected>
                                    }
                                />
                                <Route
                                    path="/employees/:id"
                                    element={
                                        <Protected>
                                            <EmployeesDetails />
                                        </Protected>
                                    }
                                />
                                <Route
                                    path="/employees/form"
                                    element={
                                        <div>
                                            لا يوجد واجهة اضافة موظف في ال figma
                                        </div>
                                    }
                                />
                                <Route
                                    path="/services"
                                    element={
                                        <Protected>
                                            <Services />
                                        </Protected>
                                    }
                                />
                                <Route
                                    path="/services/form"
                                    element={
                                        <Protected>
                                            <ServicesForm />
                                        </Protected>
                                    }
                                />

                                <Route
                                    path="/locations"
                                    element={
                                        <Protected>
                                            <ReservationLocations />
                                        </Protected>
                                    }
                                />

                                <Route path="/coupons" element={<Coupons />} />
                                <Route
                                    path="/coupons/form"
                                    element={
                                        <Protected>
                                            <CouponsForm />
                                        </Protected>
                                    }
                                />
                            </Routes>
                        </LayOut>
                    )}
                </ConfirmProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;
