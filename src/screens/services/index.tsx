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
import { useNavigate } from 'react-router-dom';
import ServicesList from '../../components/servicesList';
import { CustomButton, CustomizedTextField } from '../../globalStyle';
import CRUDRequsests from '../../API';
import { useEffect, useState } from 'react';
import { ServicesType } from '../../types';

const DUMMY_SERVICES = [
  { id: 1, name: 'غسيل سيارة حجم صغير', time: '1 ساعة 40 دقيقة', cost: '30' },
  { id: 2, name: 'غسيل سيارة حجم كبيرة', time: '1 ساعة 40 دقيقة', cost: '30' },
  { id: 3, name: 'غسيل سيارة حجم صغير', time: '1 ساعة 40 دقيقة', cost: '30' },
  { id: 4, name: 'غسيل سيارة حجم صغير', time: '1 ساعة 40 دقيقة', cost: '30' },
  { id: 5, name: 'غسيل داخلي وخارجي', time: '1 ساعة 40 دقيقة', cost: '30' },
  { id: 6, name: 'غسيل سيارة حجم صغير', time: '1 ساعة 40 دقيقة', cost: '30' },
];

function Services() {
  const [services, setServices] = useState<ServicesType[]>();
  const bigLabtob = useMediaQuery('(max-width:1024px)');
  const navigate = useNavigate();
  const theme = useTheme();

  const fetchServices = async () => {
    const { data } = await CRUDRequsests.get('/services', {
      headers: {
        Authorization: `Bearer 207|shlkWhsII1LoVeEYgoA5WOXBD3QiLs0nvaB7WK8b`,
      },
    });
    setServices(data.data);
  };
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <Stack id='mainWrapper' pr='20px' spacing={2}>
      <Stack
        id='header'
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography fontWeight='bold' fontSize='0.9rem' color='#191919'>
          الخدمات
        </Typography>
        <CustomButton
          style={{
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
          }}
          onClick={() => navigate('/services-form')}
        >
          إضافة خدمة
        </CustomButton>
      </Stack>
      <Stack
        id='main'
        direction='column'
        justifyContent='space-between'
        alignItems='center'
      >
        <ServicesList services={services || []} />
      </Stack>
    </Stack>
  );
}

export default Services;
