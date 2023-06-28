import { Button, Typography } from '@mui/material';
import React from 'react';
import { Icons } from '../../assets';

function DeleteButton({ deleteHandler }: { deleteHandler: () => void }) {
  return (
    <Button onClick={deleteHandler}>
      {Icons.deleteIcon('#FF0000')}{' '}
      <Typography sx={{ color: '#FF0000', fontWeight: 600, paddingLeft: 1 }}>
        حذف
      </Typography>
    </Button>
  );
}

export default DeleteButton;
