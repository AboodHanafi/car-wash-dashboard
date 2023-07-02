import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Employee } from '../../../../services/employees';
interface Props {
  employee: Employee;
}
function EmployeeItem({ employee }: Props) {
  const { pathname } = useLocation();

  const { id, name, address, photo } = employee;
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: '2px solid #E6E6E6',
        borderRadius: '5px',
        width: '32%',
        minWidth: '20rem',
        padding: '1rem',
        alignItems: 'center',
      }}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
    >
      <Avatar alt={name || ''} src={photo} />
      <Link to={`${pathname}/${id}`} style={{ textDecoration: 'none' }}>
        <Typography fontWeight={600} color={theme.palette.secondary.main}>
          {name}
        </Typography>
      </Link>
      <Typography display={'flex'} alignItems={'center'} gap={1}>
        {address}
      </Typography>
    </Box>
  );
}

export default EmployeeItem;
