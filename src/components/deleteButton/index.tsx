import { Button, Typography } from '@mui/material';
import React from 'react';
import { Icons } from '../../assets';

interface Props {
  children?: React.ReactNode;
  deleteHandler: () => void;
}
function DeleteButton({ deleteHandler, children }: Props) {
  return (
    <Button
      sx={{ border: '1px solid #FF0000', width: '6rem' }}
      onClick={deleteHandler}
    >
      {Icons.deleteIcon('#FF0000')}{' '}
      <Typography sx={{ color: '#FF0000', fontWeight: 600, paddingLeft: 1 }}>
        {children}
      </Typography>
    </Button>
  );
}

export default DeleteButton;
