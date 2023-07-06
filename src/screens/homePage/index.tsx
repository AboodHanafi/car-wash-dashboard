import { Autocomplete, Stack, Typography } from '@mui/material';
import { Months } from '../../assets';
import { useState } from 'react';
import { CustomizedTextField } from '../../globalStyle';
import DashCard from '../../components/dashboardCard';
import BasicTable from '../../components/table';
import ChartBar from '../../components/chartBar';
import {
  useFetchHomeInfoQuery,
  useLazyFetchHomeInfoByMonthQuery,
} from '../../app/store';
import { Response } from '../../services/homeInfo';
import { Nullable } from '../../utils/types';

interface Month {
  label: string;
  id: number;
}

const HomePage = () => {
  const { data } = useFetchHomeInfoQuery();

  const [monthValue, setMonthValue] = useState<Nullable<Month>>(null);
  const [fetchHomeInfoByMonth, results] = useLazyFetchHomeInfoByMonthQuery();

  let reservations: Response | undefined = monthValue ? results.data : data;

  let charData = [
    { name: 'الاسبوع الرابع', حجز: 0 },
    { name: 'الاسبوع الثالث', حجز: 0 },
    { name: 'الاسبوع الثاني', حجز: 0 },
    { name: 'الاسبوع الأول', حجز: 0 },
  ];

  reservations?.data.reservations.forEach((res, index) => {
    const date = new Date(res.created_at.split(' ')[0]);
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const dayOfWeekFirstDay = firstDayOfMonth.getDay();
    const dayOfMonth = date.getDate();
    const offset = (dayOfWeekFirstDay + dayOfMonth - 1) % 7;
    const weekOfMonth = Math.ceil((dayOfMonth + offset) / 7);
    const clone = charData.map((item, index) =>
      index + 1 !== weekOfMonth ? item : { ...item, حجز: item.حجز + 1 },
    );
    charData = clone;
  });

  const handleChangeMonth = (
    event: React.SyntheticEvent<Element, Event>,
    value: Nullable<Month>,
  ) => {
    setMonthValue(value);
    fetchHomeInfoByMonth(String(value?.id).padStart(2, '0'));
  };

  return (
    <Stack spacing={2} marginTop={1}>
      <Stack
        id='header'
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography fontWeight='bold' fontSize='0.9rem' color='#191919'>
          الصفحة الرئيسية
        </Typography>
      </Stack>
      <Autocomplete
        sx={{
          width: '150px',
          '& .MuiAutocomplete-input': {
            color: '#191919',
            fontWeight: 400,
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
        onChange={handleChangeMonth}
        renderInput={params => (
          <CustomizedTextField
            placeholder='حدد الشهر'
            {...params}
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />
      <Stack direction='row' flexWrap='wrap' gap={2}>
        <DashCard
          title='الحجوزات'
          counter={reservations?.data.reservations_count ?? 0}
          color='rgba(126, 77, 200, 0.65)'
          shadow='0px 2px 5px rgba(167, 134, 217, 0.5)'
        />
        <DashCard
          title='الحجوزات قيد التنفيذ'
          counter={reservations?.data.reservations_current ?? 0}
          color='rgba(0, 128, 0, 0.64)'
          shadow='0px 2px 5px rgba(71, 163, 71, 0.5)'
        />
        <DashCard
          title='الحجوزات السابقة'
          counter={reservations?.data.reservations_previous ?? 0}
          color='rgba(98, 112, 242, 0.64)'
          shadow='0px 2px 5px rgba(138, 148, 245, 0.5)'
        />
        <DashCard
          title='المدفوعات'
          counter={`${reservations?.data.reservations_count ?? 0} ريال`}
          color='rgba(255, 177, 57, 0.64)'
          shadow='0px 2px 5px rgba(254, 201, 120, 0.5)'
        />
      </Stack>
      <Stack width='100%' direction='row' flexWrap='wrap' gap={3}>
        <Stack minWidth={'650px'}>
          <BasicTable reservations={reservations?.data} />
        </Stack>
        <Stack>
          {monthValue && (
            <>
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
                {/* <Autocomplete
              sx={{
                width: '150px',
                '& .MuiAutocomplete-input': {
                  color: '#191919',
                  fontWeight: 400,
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
              onChange={(e: any, value: Month | null) =>
                setMonthValue(value)
              }
              renderInput={params => (
                <CustomizedTextField
                  placeholder='حدد الشهر'
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                  }}
                />
              )}
            /> */}
              </Stack>
              <ChartBar charData={charData} />
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomePage;
