import * as React from 'react';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';

import NavBar from '../components/navBar';
import SideBar from '../components/sideBar';

const LayOut: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  // width={'100%'}
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <SideBar open={open} />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          paddingLeft: 3,
          paddingTop: 11,
          bgcolor: '#fff',
          overflow: 'auto',
          height: '100vh',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default LayOut;
