import {
  Autocomplete,
  FormLabel,
  Icon,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { CustomButton, CustomizedTextField } from '../../globalStyle';
import { useEffect, useState } from 'react';
import { Icons } from '../../assets';
import ReservationsTable from '../../components/reservationsTable';
import { useNavigate } from 'react-router-dom';
import { useFetchReservationsQuery } from '../../services/reservations';
import LoadingSkeleton from '../../components/loadingSkeleton';
import { reservationStatus } from '../../utils/global-lists';
import useSearch from '../../hooks/use-context-search';
import CustomDateRangePicker from '../../components/dateRangePicker';

interface autoType {
  label: string;
  id: number;
}

const Reservations = () => {
  const { handleReservationStatus } = useSearch();

  const { isLoading } = useFetchReservationsQuery();
  const [status, setStatus] = useState<autoType | null>(reservationStatus[0]);
  const { handleClientBikerTerm, handleDateRange, dateRange } = useSearch();
  const bigLabtob = useMediaQuery('(max-width:1024px)');
  const navigate = useNavigate();
  const theme = useTheme();

  const handleChangeReservationStatus = (
    event: React.SyntheticEvent<Element, Event>,
    value: autoType | null,
  ) => {
    setStatus(value);
    handleReservationStatus(Number(value?.id));
  };

  useEffect(() => {}, []);
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
          <CustomDateRangePicker onDateRangeChange={handleDateRange} />

          {/*<Stack direction='row' alignItems='center'>
            <CustomizedTextField
              name='startDate'
              onChange={handleDateRange}
              fullWidth
              value={dateRange.startDate}
            />
            <IconButton onClick={handleSearchByDateRange}>
              {Icons.fromToDate}
            </IconButton>
            <CustomizedTextField
              name='endDate'
              onChange={handleDateRange}
              fullWidth
              value={dateRange.endDate}
            />
          </Stack> */}
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
              // size='medium'
              options={reservationStatus}
              getOptionLabel={(option: autoType) => option.label}
              ListboxProps={{
                style: {
                  fontSize: '0.7rem',
                  color: '#191919',
                },
              }}
              value={status}
              size='small'
              onChange={handleChangeReservationStatus}
              renderInput={(params: any) => (
                <CustomizedTextField
                  // style={{ height: '2.6rem' }}
                  placeholder='حالة الحجز'
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
              onChange={e => handleClientBikerTerm(e.target.value)}
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
          {/* <CustomButton
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
          </CustomButton> */}
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
        {isLoading ? <LoadingSkeleton /> : <ReservationsTable />}
      </Stack>
    </Stack>
  );
};

export default Reservations;
