import React from 'react';
import CouponItem from './couponsItem';
import { CouponsType } from '../../utils/types';
import { Box } from '@mui/material';

interface Props {
  coupons: CouponsType[];
}

function ServicesList({ coupons }: Props) {
  const renderedServicesList = coupons?.map(coupon => (
    <CouponItem key={coupon.coupon_code} coupon={coupon} />
  ));

  return (
    <Box
      width={'100%'}
      display={'flex'}
      flexDirection={'row'}
      flexWrap={'wrap'}
      gap={2}
      marginBottom={3}
      marginTop={2}
    >
      {renderedServicesList}
    </Box>
  );
}

export default ServicesList;
