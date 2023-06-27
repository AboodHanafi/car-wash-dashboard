import React, { Fragment } from 'react';
import {
  Stack,
  Box,
  Typography,
  CircularProgress,
  Tab,
  FormControlLabel,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import uesFetchEmployee from '../../hooks/use-fetch-data';
import Image from '../../components/image';
import { Icons } from '../../assets';
import BoxShadow from '../../components/boxShadow';
import MoreMenu from '../../components/moreMenu';
import EmployeeInfo from './tabs/EmployeeInfo';
import WorkingTimes from './tabs/WorkingTimes';
import Vacations from './tabs/Vacations';
import { useParams } from 'react-router-dom';
import Switch from '../../components/switch';

const EmployeesDetails = () => {
  const [value, setValue] = React.useState('1');
  const id = useParams();

  const { data: employee, isLoading, error } = uesFetchEmployee(`/bikers/1`);

  if (!isLoading) console.log('employee data: ', employee);

  if (isLoading) {
    return <CircularProgress sx={{ mt: 5, mr: 5 }} />;
  }
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack id='mainWrapper' spacing={2}>
      {employee && (
        <Fragment>
          <Stack id='header'>
            <Box
              sx={{
                boxShadow: 1,
                // width: '95%',
                // height: '5rem',
                bgcolor: theme =>
                  theme.palette.mode === 'dark' ? '#101010' : '#fff',
                color: theme =>
                  theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                p: 1,
                m: 1,
                borderRadius: 2,
                textAlign: 'center',
                fontSize: '0.875rem',
                fontWeight: '700',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Image
                src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'
                alt='alt text'
                width={154}
                height={154}
                borderRadius={10}
              />
              <Box pl={2} textAlign={'left'} mr={'auto'}>
                <Typography fontWeight='bold' fontSize='1.5rem' color='#191919'>
                  {employee.biker.name}
                </Typography>
                <Box display={'flex'} gap={0.5}>
                  {Icons.phoneIcon(18)}
                  <Typography>{employee.biker.phone}</Typography>
                </Box>

                <Stack display={'flex'} flexDirection={'row'} gap={2}>
                  <BoxShadow>
                    <Typography
                      fontWeight={600}
                      fontSize={'1.2rem'}
                      color={'#000'}
                    >
                      {employee.reservations.length}
                    </Typography>
                    <Typography>عدد الحجوزات</Typography>
                  </BoxShadow>
                  <BoxShadow>
                    <Typography
                      fontWeight={600}
                      fontSize={'1.2rem'}
                      color={'#000'}
                    >
                      {employee.reservations.length}
                    </Typography>
                    <Typography>المبالغ المحصلة</Typography>
                  </BoxShadow>
                  <BoxShadow>
                    <Typography
                      fontWeight={600}
                      fontSize={'1.2rem'}
                      color={'#000'}
                    >
                      {employee.reservations.length}
                    </Typography>
                    <Typography>التقييم</Typography>
                  </BoxShadow>
                </Stack>
              </Box>
              <MoreMenu
                options={[
                  {
                    element: (
                      <FormControlLabel
                        label='تعطيل تلقي الحجوزات مؤقتا'
                        sx={{ m: 0 }}
                        labelPlacement='start'
                        control={<Switch sx={{ m: 1 }} />}
                      />
                    ),
                  },
                  { text: 'حذف الموظف' },
                ]}
              />
            </Box>
          </Stack>
          <Box sx={{ width: '99%', typography: 'body1', fontWeight: 600 }}>
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label='lab API tabs example'
                >
                  <Tab
                    sx={{ fontWeight: 'bold', color: '#000' }}
                    label='معلومات الموظف'
                    value='1'
                  />
                  <Tab
                    sx={{ fontWeight: 'bold', color: '#000' }}
                    label='اوقات العمل'
                    value='2'
                  />
                  <Tab
                    sx={{ fontWeight: 'bold', color: '#000' }}
                    label='الاجازات'
                    value='3'
                  />
                </TabList>
              </Box>
              <TabPanel value='1'>
                <EmployeeInfo />
              </TabPanel>
              <TabPanel value='2'>
                <WorkingTimes />
              </TabPanel>
              <TabPanel value='3'>
                <Vacations />
              </TabPanel>
            </TabContext>
          </Box>
        </Fragment>
      )}
    </Stack>
  );
};

export default EmployeesDetails;
