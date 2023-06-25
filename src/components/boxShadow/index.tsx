import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';

const BoxShadow: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        border: '1px dotted #ccc',
        borderRadius: '6px',
        padding: '0.6rem',
        width: '12rem',
        mt: 3,
      }}
      display={'flex'}
      flexDirection={'column'}
      gap={0.5}
    >
      {children}
    </Box>
  );
};

export default BoxShadow;
