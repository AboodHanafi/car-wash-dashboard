import {
  Alert,
  Autocomplete,
  Box,
  CircularProgress,
  InputAdornment,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { CustomButton, CustomizedTextField } from '../../globalStyle';
import { Icons, Months } from '../../assets';
import ChartBar from '../../components/chartBar';
import { useState } from 'react';
import LocationsChartBar from '../../components/locationsChartBar';
import { useNavigate } from 'react-router-dom';
import LocationsList from '../../components/locationsList';
import LocationDialog from '../../components/locationDialog/LocationDialog';
import useFetchLocation from '../../hooks/use-fetchData';

interface autoType {
  label: string;
  id: number;
}
const DUMMY_LOCATIONS = [
  {
    id: '2',
    locationName: 'حي ( الرغامة والتيسير والنخيل والروابي )',
    employeesNumber: 14,
  },
  {
    id: '47',
    locationName: 'حي ( الرغامة والتيسير والنخيل والروابي )',
    employeesNumber: 58,
  },
  {
    id: '44',
    locationName: 'حي ( الرغامة والتيسير والنخيل والروابي )',
    employeesNumber: 1,
  },
  {
    id: '65',
    locationName: 'حي ( الرغامة والتيسير والنخيل والروابي )',
    employeesNumber: 81,
  },
  {
    id: '51',
    locationName: 'حي ( الرغامة والتيسير والنخيل والروابي ) ',
    employeesNumber: 33,
  },
  {
    id: '7',
    locationName: 'حي ( الرغامة والتيسير والنخيل والروابي )',
    employeesNumber: 14,
  },
  {
    id: '44',
    locationName: 'حي ( الرغامة والتيسير والنخيل والروابي )',
    employeesNumber: 4,
  },
  {
    id: '92',
    locationName: 'حي ( الرغامة والتيسير والنخيل والروابي )',
    employeesNumber: 65,
  },
];
const ReservationLocations = () => {
  const { data: locations, isLoading, error } = useFetchLocation('/cities');

  const [open, setOpen] = useState(false);
  const [monthValue, setMonthValue] = useState<autoType | null>(Months[0]);
  const navigate = useNavigate();

  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let content: JSX.Element;
  if (isLoading) {
    content = <CircularProgress sx={{ mt: 12 }} />;
  } else {
    content = <LocationsList locations={DUMMY_LOCATIONS} />;
  }

  if (error) {
    content = (
      <Alert
        variant='outlined'
        sx={{ mt: 12, fontWeight: 600, color: '#FF0000' }}
        icon={false}
        severity='error'
      >
        يوجد خطأ ما في جلب البيانات{' '}
      </Alert>
    );
  }

  return (
    <Stack id='mainWrapper' spacing={3} pr='30px' marginTop={1}>
      <Stack
        id='header'
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography fontWeight='bold' fontSize='0.9rem' color='#191919'>
          مناطق التغطية
        </Typography>
        <CustomButton
          style={{
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
          }}
          onClick={handleClickOpen}
        >
          إضافة منطقة
        </CustomButton>
        <LocationDialog isOpen={open} onClose={handleClose} />
      </Stack>

      <Stack
        id='main'
        direction='column'
        justifyContent='space-between'
        alignItems='center'
      >
        {content}
      </Stack>
      {/* <Stack id='header' spacing={1}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '10%',
            minWidth: '150px',
            backgroundColor: '#F6F6F6',
            // border: "1px solid #DDDDDD",
            borderRadius: '5px',
            padding: '5px 10px',
            gap: 1,
          }}
        >
          <Stack>
            <Typography fontWeight='medium'>حي السامر</Typography>
            <Typography color={theme.palette.primary.main}>55 حجز </Typography>
          </Stack>
        </Box>
      </Stack>
      <Stack>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          boxShadow='0px 1px 3px rgba(0, 0, 0, 0.25)'
          bgcolor='#FCFCFC'
          padding='5px 10px'
          borderRadius='10px 10px 0 0'
        >
          <Typography fontSize='0.9rem' color='#191919'>
            عدد الحجوزات
          </Typography>
          <Autocomplete
            sx={{
              width: '150px',
              '& .MuiAutocomplete-input': {
                color: '#191919',
                fontWeight: 400,
                fontSize: '0.9rem',
              },
              '&& .MuiSvgIcon-root': {
                fontSize: '1rem',
              },
              '&& .MuiPopperUnstyled-root': {
                backgroundColor: 'red',
                color: 'red',
              },
            }}
            disablePortal
            id='combo-box-demo'
            size='small'
            options={Months}
            getOptionLabel={option => option.label}
            ListboxProps={{
              style: {
                fontSize: '0.9rem',
                color: '#191919',
              },
            }}
            value={monthValue}
            onChange={(e: any, value: autoType | null) => setMonthValue(value)}
            renderInput={params => (
              <CustomizedTextField
                placeholder='Month'
                {...params}
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />
        </Stack>
        <LocationsChartBar />
      </Stack> */}
    </Stack>
  );
};

export default ReservationLocations;
