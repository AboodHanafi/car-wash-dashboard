import {
    Alert,
    Autocomplete,
    CircularProgress,
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
import { CustomButton } from '../../globalStyle';
import useFetchCoupons from '../../hooks/use-fetch-data';

function DiscountCoupons() {
    const { data: coupons, isLoading, error } = useFetchCoupons('/coupons');
    const bigLabtob = useMediaQuery('(max-width:1024px)');
    const navigate = useNavigate();
    const theme = useTheme();

    let content: JSX.Element;
    if (isLoading) {
        content = <CircularProgress sx={{ mt: 12 }} />;
    } else {
        content = <CouponsList coupons={coupons} />;
    }

    if (error) {
        content = (
            <Alert
                variant="outlined"
                sx={{ mt: 12, fontWeight: 600, color: '#FF0000' }}
                icon={false}
                severity="error">
                يوجد خطأ ما في جلب البيانات{' '}
            </Alert>
        );
    }

    return (
        <Stack id="mainWrapper" pr="20px" spacing={2} marginTop={1}>
            <Stack
                id="header"
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Typography fontWeight="bold" fontSize="0.9rem" color="#191919">
                    كوبونات الخصم
                </Typography>
                <CustomButton
                    style={{
                        backgroundColor: theme.palette.primary.main,
                        color: '#fff',
                    }}
                    onClick={() => navigate('/coupons/form')}>
                    كوبون جديد
                </CustomButton>
            </Stack>
            <Stack
                id="main"
                direction="column"
                justifyContent="space-between"
                alignItems="center">
                {content}
            </Stack>
        </Stack>
    );
}

export default DiscountCoupons;
