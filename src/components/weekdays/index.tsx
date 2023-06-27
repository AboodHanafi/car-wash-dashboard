import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
} from '@mui/material';
import React from 'react';
import { weekdays } from '../../utils/global-var';
import { Item } from '../gridItem';

function Weekdays() {
  const renderedDays = weekdays.map(day => (
    <Grid item xs>
      <Item>
        <FormControlLabel control={<Checkbox />} label={day} />
      </Item>
    </Grid>
  ));
  return (
    <Grid container spacing={3}>
      {renderedDays}
    </Grid>
  );
}

export default Weekdays;
