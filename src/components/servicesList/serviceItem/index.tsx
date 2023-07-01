import React from 'react';
import { ServicesType } from '../../../utils/types';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import SVGTime from '../../../assets/svg/SVGTime';
import SVGPrice from '../../../assets/svg/SVGPrice';
import { Link } from 'react-router-dom';
interface Props {
  service: ServicesType;
}
function ServiceItem({ service }: Props) {
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
      <Link to={`/${service.id}`} style={{ textDecoration: 'none' }}>
        <Typography fontWeight={600} color={theme.palette.secondary.main}>
          {service.name}
        </Typography>
      </Link>
      <Typography display={'flex'} alignItems={'center'} gap={1}>
        <SVGTime /> {service.time}
      </Typography>
      <Typography display={'flex'} alignItems={'center'} gap={1}>
        <SVGPrice /> {service.cost} ريال
      </Typography>
    </Box>
  );
}

export default ServiceItem;
