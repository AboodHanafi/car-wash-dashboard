import React from 'react';
import { LocationsType } from '../../../types';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { Icons } from '../../../assets';
interface Props {
  location: LocationsType;
}
function LocationItem({ location }: Props) {
  const { id, employeesNumber, locationName } = location;
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: '2px solid #E6E6E6',
        borderRadius: '5px',
        width: '32%',
        minWidth: '20rem',
        padding: '1rem',
      }}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
    >
      <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
        <Typography display={'flex'} fontWeight={600} color={'#000'}>
          {Icons.gpsIcon}
          &nbsp;
          {locationName}
        </Typography>
      </Link>
      <Typography display={'flex'} alignItems={'center'} gap={1}>
        {Icons.personsIcon}
        {+employeesNumber > 10 || +employeesNumber === 1
          ? `${employeesNumber} موظف`
          : `${employeesNumber} موظفين`}
      </Typography>
    </Box>
  );
}

export default LocationItem;
