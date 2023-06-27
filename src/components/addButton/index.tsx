import { Button, Theme } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClick?: () => void;
  left?: boolean;
  right?: boolean;
}

const CustomAddButton = ({ left, children, ...rest }: Props) => {
  return (
    <Button
      {...rest}
      sx={{
        padding: '0.5rem',
        width: '8rem',
        backgroundColor: '#F1E8FF',
        border: 1,
        borderColor: (them: any) => them.palette.primary.dark,
      }}
      style={{ [left ? 'marginRight' : 'marginLeft']: 'auto' }}
    >
      {children}
    </Button>
  );
};

export default CustomAddButton;
