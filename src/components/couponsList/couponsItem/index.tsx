import React from 'react';
import { CouponsType, ServicesType } from '../../../types';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import SVGCoupon from '../../../assets/svg/SVGCoupon';
interface Props {
  coupon: CouponsType;
}
function CouponItem({ coupon }: Props) {
  const { coupon_code, number } = coupon;
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: '2px solid #E6E6E6',
        borderRadius: '5px',
        width: '32%',
        minWidth: '20rem',
        padding: '1rem',
      }}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
    >
      <Link to={`/${coupon_code}`} style={{ textDecoration: 'none' }}>
        <Typography fontWeight={600} color={theme.palette.secondary.main}>
          {coupon_code}
        </Typography>
      </Link>
      <Typography display={'flex'} alignItems={'center'} gap={1}>
        <SVGCoupon />
        تم استعماله{' '}
        {+number > 10 || +number === 1 ? `${number} مرة` : `${number} مرات`}
      </Typography>
    </Box>
  );
}

export default CouponItem;
