import { Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ServicesList from '../../components/servicesList';
import { CustomButton } from '../../globalStyle';
import CRUDRequsests from '../../API';
import { useEffect, useState } from 'react';
import { ServicesType } from '../../utils/types';
import { token } from '../../utils/global-var';

function Services() {
  const [services, setServices] = useState<ServicesType[]>();
  const navigate = useNavigate();
  const theme = useTheme();

  const fetchServices = async () => {
    const { data } = await CRUDRequsests.get('/services', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setServices(data.data);
  };
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <Stack id='mainWrapper' pr='20px' spacing={2} marginTop={1}>
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
