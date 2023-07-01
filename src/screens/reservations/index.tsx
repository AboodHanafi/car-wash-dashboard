import {
  Autocomplete,
  FormLabel,
  Icon,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { CustomButton, CustomizedTextField } from '../../globalStyle';
import { useEffect, useState } from 'react';
import { Icons } from '../../assets';
import ReservationsTable from '../../components/reservationsTable';
import { useNavigate } from 'react-router-dom';
import useFetchReservations from '../../hooks/use-fetch-data';
import { useFetchReservationsQuery } from '../../services/reservations';

interface autoType {
  label: string;
  id: number;
}
const Reservations = () => {
  const {
    data: reservations,
    error,
    isLoading,
  } = useFetchReservationsQuery('reservations');

  // const { data } = useFetchReservationsQuery();
  if (!isLoading && reservations !== undefined)
    console.log('useFetchReservationsQuery data: ', reservations);
  // const { data, error, isLoading } = useFetchReservations('/reservations');

  // if (!isLoading) console.log('Reservations data: ', data[0].user_name);

  useEffect(() => {}, []);
  const reservationStatus = [
    {
      id: 0,
      label: 'الكل',
    },
    {
      id: 1,
      label: 'قيد التنفيذ',
    },
    {
      id: 2,
      label: 'تم التنفيذ',
    },
    {
      id: 3,
      label: 'ملغي',
    },
  ];
  const [status, setStatus] = useState<autoType | null>(reservationStatus[0]);
  const bigLabtob = useMediaQuery('(max-width:1024px)');
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Stack id='mainWrapper' pr='20px' spacing={2}>
      <Stack
        id='header'
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography fontWeight='bold' fontSize='0.9rem' color='#191919'>
          الحجوزات
        </Typography>
        <CustomButton
          style={{
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
          }}
          onClick={() => navigate('/reservations-form')}
        >
          حجز جديد
        </CustomButton>
      </Stack>
      <Stack
        borderRadius='10px'
        direction='row'
        bgcolor='#F6F6F6'
        padding='16px 24px'
        flexWrap='wrap'
        gap={1}
      >
        <Stack
          id='range date'
          spacing={1}
          width={bigLabtob ? '30%' : '35%'}
          minWidth='240px'
        >
          <FormLabel
            sx={{
              color: '#191919',
              fontSize: '0.7rem',
            }}
          >
            تاريخ الحجز
          </FormLabel>
          <Stack direction='row' alignItems='center'>
            <CustomizedTextField fullWidth value={'16-12-2022'} />
            <IconButton>{Icons.fromToDate}</IconButton>
            <CustomizedTextField fullWidth value={'16-12-2022'} />
          </Stack>
        </Stack>
        <Stack
          id='status'
          spacing={1}
          width='15%'
          justifyContent='center'
          minWidth='140px'
        >
          <FormLabel
            sx={{
              color: '#191919',
              fontSize: '0.7rem',
            }}
          >
            حالة الحجز
          </FormLabel>
          <Stack spacing={1} direction='row'>
            <Autocomplete
              fullWidth
              sx={{
                // width: "150px",
                '& .MuiAutocomplete-input': {
                  color: '#191919',
                  fontWeight: 300,
                  fontSize: '0.7rem',
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
              options={reservationStatus}
              getOptionLabel={(option: autoType) => option.label}
              ListboxProps={{
                style: {
                  fontSize: '0.7rem',
                  color: '#191919',
                },
              }}
              value={status}
              onChange={(e: any, value: autoType | null) => setStatus(value)}
              renderInput={(params: any) => (
                <CustomizedTextField
                  placeholder='status'
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                  }}
                />
              )}
            />
          </Stack>
        </Stack>
        <Stack
          id='search'
          spacing={1}
          width={bigLabtob ? '24%' : '30%'}
          minWidth='200px'
          justifyContent='center'
        >
          <FormLabel
            sx={{
              color: '#191919',
              fontSize: '0.7rem',
            }}
          >
            أبحث عن أسم العميل أو البايكر
          </FormLabel>
          <Stack spacing={1} direction='row'>
            <CustomizedTextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {Icons.search}
                  </InputAdornment>
                ),
              }}
              placeholder='ابحث هنا'
            />
          </Stack>
        </Stack>
        <Stack
          id='pdf'
          spacing={1}
          width={bigLabtob ? '14%' : '17%'}
          justifyContent='center'
          mt='25px'
          minWidth='100px'
        >
          <CustomButton
            sx={{
              color: '#404040',
              bgcolor: '#FCFCFC',
              border: '1px solid #DDDDDD',
              borderRadius: '10px',
            }}
            fullWidth
            startIcon={Icons.pdfButton}
          >
            تصدير pdf
          </CustomButton>
          {/* <CustomButton
            sx={{
              color: "#404040",
              bgcolor: "#FCFCFC",
              border: "1px solid #DDDDDD",
              borderRadius: "10px",
            }}
            fullWidth
            startIcon={Icons.pdfButton}
          >
            تصدير excel
          </CustomButton> */}
        </Stack>
      </Stack>
      <Stack id='table'>
        {!isLoading && <ReservationsTable data={reservations?.data} />}
      </Stack>
    </Stack>
  );
};

export default Reservations;
