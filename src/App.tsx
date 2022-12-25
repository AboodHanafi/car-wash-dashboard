import { createTheme, ThemeProvider } from "@mui/material";
import LayOut from "./layout";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/homePage";

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
      fontSize: 21,
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
          </Routes>
        </LayOut>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
