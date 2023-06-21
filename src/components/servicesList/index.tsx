import React from 'react';
import ServiceItem from './serviceItem';
import { ServicesType } from '../../types';
import { Box } from '@mui/material';

interface Props {
  services: ServicesType[];
}

function ServicesList({ services }: Props) {
  const renderedServicesList = services.map(service => (
    <ServiceItem key={service.id} service={service} />
  ));

  return (
    <Box
      width={'100%'}
      display={'flex'}
      flexDirection={'row'}
      flexWrap={'wrap'}
      gap={2}
    >
      {renderedServicesList}
    </Box>
  );
}

export default ServicesList;
