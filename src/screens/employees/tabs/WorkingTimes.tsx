import { useState, useEffect, ChangeEvent } from 'react';
import {
  Box,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  Checkbox,
  Grid,
} from '@mui/material';
import Switch from '../../../components/switch';
import Select from '../../../components/select';
import { CustomizedTextField } from '../../../globalStyle';
import { Item } from '../../../components/gridItem';
import Weekdays from '../../../components/weekdays';

function WorkingTimes() {
  return (
    <Stack spacing={1}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} justifyContent={'right'}>
          <Item sx={{ display: 'flex' }}>
            <Typography
              sx={{ alignSelf: 'center', width: '7rem', fontWeight: '600' }}
            >
              من الساعة
            </Typography>
            <Select
              options={[
                'من الساعة الرابعة عصرا',
                'من الساعة العاشرة صباحا',
                'من الساعة الواحدة ظهرا',
              ]}
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ display: 'flex' }}>
            <Typography
              sx={{ alignSelf: 'center', width: '7rem', fontWeight: '600' }}
            >
              الى الساعة
            </Typography>
            <Select
              options={[
                'من الساعة الرابعة عصرا',
                'من الساعة العاشرة صباحا',
                'من الساعة الواحدة ظهرا',
              ]}
            />
          </Item>
        </Grid>
      </Grid>
      <Typography style={{ marginTop: '2rem' }} fontWeight={600}>
        تبدأ جدولة اي حجز جديد بعد
      </Typography>
      <Select options={['3/18/2092', '10/9/2111', '3/17/2103', '9/19/2067']} />

      <FormControlLabel
        control={<Switch sx={{ m: 1 }} />}
        label={
          <Typography fontWeight={600}>متاح في كل ايام الاسبوع</Typography>
        }
      />
      <Weekdays />
    </Stack>
  );
}

export default WorkingTimes;
