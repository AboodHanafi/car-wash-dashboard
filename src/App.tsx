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
import CustomizedSteppers from './components/stepper';
import Users from './screens/users';
import Employees from './screens/employees';
import DiscountCoupons from './screens/discountCoupons';
import ReservationLocations from './screens/reservationLocations';
import { useEffect } from 'react';
import CRUDRequests from './API';
import Services from './screens/services';
import CouponsForm from './screens/discountCoupons/form';
import { ConfirmProvider } from 'material-ui-confirm';
import EmployeesDetails from './screens/employees/details';

function App() {
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
  const token = '207|shlkWhsII1LoVeEYgoA5WOXBD3QiLs0nvaB7WK8b';
  localStorage.setItem('car-wash-token', token);
  useEffect(() => {
    // Example usage
    const fetchData = async () => {
      try {
        const response = await CRUDRequests.get('/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <ConfirmProvider>
          <LayOut>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/reservations' element={<Reservations />} />
              <Route path='/reservations-form' element={<ReservationForm />} />
              <Route
                path='/reservations/:id'
                element={<ReservationDetails />}
              />
              <Route path='/users' element={<Users />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/employees/:id' element={<EmployeesDetails />} />
              <Route
                path='//employee-form'
                element={<div>لا يوجد واجهة اضافة موظف في ال figma</div>}
              />
              <Route path='/services' element={<Services />} />
              <Route path='/services-form' element={<ServicesForm />} />

              <Route path='/locations' element={<ReservationLocations />} />

              <Route path='/discount-coupons' element={<DiscountCoupons />} />
              <Route path='/coupons-form' element={<CouponsForm />} />
              {/* <Route path="/stepper" element={<CustomizedSteppers />} /> */}
            </Routes>
          </LayOut>
        </ConfirmProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
