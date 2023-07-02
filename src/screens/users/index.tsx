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
import { useState } from 'react';
import { Icons } from '../../assets';
import ReservationsTable from '../../components/reservationsTable';
import { useNavigate } from 'react-router-dom';
import UsersTable from '../../components/usersTable';
import { useFetchUsersQuery } from '../../app/store';

interface autoType {
  label: string;
  id: number;
}
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
const Users = () => {
  const { data: users, isLoading, isSuccess, isError } = useFetchUsersQuery();
  const [status, setStatus] = useState<autoType | null>(reservationStatus[0]);
  const bigLabtob = useMediaQuery('(max-width:1024px)');
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Stack id='mainWrapper' pr='20px' spacing={2}>
      <Stack id='header' justifyContent='center'>
        <Typography fontWeight='bold' fontSize='0.9rem' color='#191919'>
          المستخدمين
        </Typography>
      </Stack>
      <Stack
        borderRadius='10px'
        direction='row'
        justifyContent='space-between'
        bgcolor='#F6F6F6'
        padding='16px 24px'
        flexWrap='wrap'
        gap={1}
      >
        <Stack
          id='range date'
          spacing={1}
          //   width={bigLabtob ? "30%" : "35%"}
          minWidth='150px'
        >
          <FormLabel
            sx={{
              color: '#191919',
              fontSize: '0.7rem',
            }}
          >
            عدد الحجوزات
          </FormLabel>
          <Stack direction='row' alignItems='center'>
            <CustomizedTextField
              sx={{
                width: '50px',
              }}
              value={'1'}
            />
            <IconButton>{Icons.fromToDate}</IconButton>
            <CustomizedTextField
              sx={{
                width: '50px',
              }}
              value={'5'}
            />
          </Stack>
        </Stack>
        <Stack id='status' spacing={1} minWidth='215px'>
          <FormLabel
            sx={{
              color: '#191919',
              fontSize: '0.7rem',
            }}
          >
            المدفوعات
          </FormLabel>
          <Stack direction='row' alignItems='center'>
            <CustomizedTextField
              sx={{
                width: '80px',
              }}
              value={'00'}
            />
            <IconButton>{Icons.fromToDate}</IconButton>
            <CustomizedTextField
              sx={{
                width: '80px',
              }}
              value={'150'}
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
            أبحث عن إسم المستخدم
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
      <Stack component={'table'} id='table'>
        <UsersTable />
      </Stack>
    </Stack>
  );
};

export default Users;
