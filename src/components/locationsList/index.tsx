import React from 'react';
import LocationItem from './locationItem';
import { LocationsType } from '../../types';
import { Box } from '@mui/material';

interface Props {
  locations: LocationsType[];
}

function LocationsList({ locations }: Props) {
  const renderedLocationsList = locations.map(location => (
    <LocationItem key={location.id} location={location} />
  ));

  return (
    <Box
      width={'100%'}
      display={'flex'}
      flexDirection={'row'}
      flexWrap={'wrap'}
      gap={2}
      marginBottom={3}
      marginTop={2}
    >
      {renderedLocationsList}
    </Box>
  );
}

export default LocationsList;
