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
import CouponsList from '../../components/couponsList';
import { CustomButton, CustomizedTextField } from '../../globalStyle';
import CRUDRequsests from '../../API';
import { useEffect, useState } from 'react';
import { CouponsType } from '../../types';
import { token } from '../../utils/global-var';

function DiscountCoupons() {
  const [coupons, setCoupons] = useState<CouponsType[]>();
  const bigLabtob = useMediaQuery('(max-width:1024px)');
  const navigate = useNavigate();
  const theme = useTheme();

  const fetchServices = async () => {
    const { data } = await CRUDRequsests.get('/coupons', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCoupons(data.data);
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
          كوبونات الخصم
        </Typography>
        <CustomButton
          style={{
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
          }}
          onClick={() => navigate('/coupons-form')}
        >
          كوبون جديد
        </CustomButton>
      </Stack>
      <Stack
        id='main'
        direction='column'
        justifyContent='space-between'
        alignItems='center'
      >
        <CouponsList coupons={coupons || []} />
      </Stack>
    </Stack>
  );
}

export default DiscountCoupons;
