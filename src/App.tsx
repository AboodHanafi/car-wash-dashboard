import { createTheme, ThemeProvider } from "@mui/material";
import LayOut from "./layout";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/homePage";
import Reservations from "./screens/reservations";
import ReservationForm from "./screens/reservations/form";
import ReservationDetails from "./screens/reservations/details";
import CustomizedSteppers from "./components/stepper";
import Users from "./screens/users";
import Employees from "./screens/employees";
import ReservationLocations from "./screens/reservationLocations";

function App() {
  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4C2784",
        dark: "#1a0056",
        light: "#7c52b4",
      },
    },
    typography: {
      fontFamily: "Tajawal",
      fontSize: 12,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  });
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <LayOut>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/reservations/:id" element={<ReservationDetails />} />

            <Route path="/reservations" element={<Reservations />} />
            <Route path="/users" element={<Users />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/locations" element={<ReservationLocations />} />
            {/* <Route path="/stepper" element={<CustomizedSteppers />} /> */}
          </Routes>
        </LayOut>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
