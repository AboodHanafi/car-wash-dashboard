import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { EmployeesType } from '../../../../utils/types';
interface Props {
  employee: EmployeesType;
}
function EmployeeItem({ employee }: Props) {
  const { id, name, location } = employee;
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
      <Avatar alt={name || ''} src='/static/images/avatar/1.jpg' />
      <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
        <Typography fontWeight={600} color={theme.palette.secondary.main}>
          {name}
        </Typography>
      </Link>
      <Typography display={'flex'} alignItems={'center'} gap={1}>
        {location}
      </Typography>
    </Box>
  );
}

export default EmployeeItem;
