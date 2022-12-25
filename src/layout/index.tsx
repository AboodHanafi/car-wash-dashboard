import * as React from "react";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "../components/navBar";
import SideBar from "../components/sideBar";
import { minHeight } from "@mui/system";

const LayOut: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <SideBar open={open} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingLeft: 3,
          paddingTop: 10,
          paddingBottom: 1,
          bgcolor: "#E5E5E5",
          overflow: "auto",
          height: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default LayOut;
