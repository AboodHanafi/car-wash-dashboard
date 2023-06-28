import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';

const BoxShadow: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        boxShadow: 1,
        gap: 4,
        bgcolor: theme => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: theme =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        p: 1,
        borderRadius: 2,
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: '700',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default BoxShadow;
