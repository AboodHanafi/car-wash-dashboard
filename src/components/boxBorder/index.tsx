import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  flexDirection?: 'row' | 'column';
  mb?: string;
  mt?: string;
}
const BoxBorder = ({ children, flexDirection = 'column', ...rest }: Props) => {
  return (
    <Box
      sx={{
        border: '1px dotted #ccc',
        borderRadius: '6px',
        padding: '0.6rem',
        minWidth: '12rem',
        ...rest,
      }}
      display={'flex'}
      flexDirection={flexDirection}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={0.5}
    >
      {children}
    </Box>
  );
};

export default BoxBorder;
