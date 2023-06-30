import { useState, useEffect, ChangeEvent, useContext } from 'react';
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
  Button,
} from '@mui/material';
import BoxShadow from '../boxShadow';
import { Item } from '../gridItem';
import Select from '../select';
import Switch from '../../components/switch';
import Weekdays from '../weekdays';
// import useWorkingTimes from '../../context/context-employee';
import { Icons } from '../../assets';
import { WorkDays } from '../../utils/types';
import DeleteButton from '../deleteButton';

const WorkDaysData: WorkDays[] = [
  { day: 'السبت', isworking: false },
  { day: 'الاحد', isworking: false },
  { day: 'الاثنين', isworking: false },
  { day: 'الثلاثاء', isworking: false },
  { day: 'الاربعاء', isworking: false },
  { day: 'الخميس', isworking: false },
  { day: 'الجمعة', isworking: false },
];

interface Props {
  id: string;
  deleteWorkingTime: (id: string) => void;
}

function WorkingPeriod({ id, deleteWorkingTime }: Props) {
  const [allDays, setAllDays] = useState(false);
  const [workDays, setWorkDays] = useState<WorkDays[]>(WorkDaysData);

  const handleWorkDays = (day: string) => {
    const updatedWorkDays = workDays.map(item =>
      item.day === day ? { ...item, isworking: !item.isworking } : item,
    );
    setWorkDays(updatedWorkDays);
  };
  const handleDeleteWorkingTime = (id: string) => {
    deleteWorkingTime(id);
  };

  useEffect(() => {
    const notAllDays = workDays.some(day => day.isworking !== true);
    setAllDays(!notAllDays);
  }, [workDays]);

  return (
    <BoxShadow>
      <Stack spacing={1} textAlign={'left'} style={{ width: '100%' }}>
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
        <Select
          options={['3/18/2092', '10/9/2111', '3/17/2103', '9/19/2067']}
        />

        <FormControlLabel
          control={
            <Switch
              checked={allDays}
              onChange={() => setAllDays(!allDays)}
              sx={{ m: 1 }}
            />
          }
          label={
            <Typography fontWeight={600}>متاح في كل ايام الاسبوع</Typography>
          }
        />
        {!allDays && (
          <Weekdays workDays={workDays} onWorkDaysChange={handleWorkDays} />
        )}

        <Box style={{ marginRight: 'auto' }}>
          <DeleteButton deleteHandler={() => handleDeleteWorkingTime(id)}>
            حذف
          </DeleteButton>
        </Box>
      </Stack>
    </BoxShadow>
  );
}

export default WorkingPeriod;
