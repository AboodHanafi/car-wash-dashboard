import { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Rating,
  Snackbar,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useConfirm } from 'material-ui-confirm';
import { Icons } from '../../assets';
import CustomizedSteppers from '../../components/stepper';
import { useParams } from 'react-router-dom';
import useCustomConfirm from '../../hooks/use-custom-confirm';
import DeleteButton from '../../components/deleteButton';
import useFetchReservations from '../../hooks/use-fetch-data';
import {
  useFetchReservationByIdQuery,
  useDeleteReservationByIdMutation,
} from '../../app/store';

type Id = string | number | undefined;

const ReservationDetails = () => {
  const [open, setOpen] = useState(false);
  let { id } = useParams();
  const [deleteReservation, result] = useDeleteReservationByIdMutation();

  const { data: reservation, isLoading } = useFetchReservationByIdQuery(
    String(id),
  );
  // if (!isLoading && reservation !== undefined)
  //   console.log('useFetchReservationQuery data: ', reservation.data);

  const confirm = useCustomConfirm();
  const theme = useTheme();

  // const { data, error, isLoading } = useFetchReservations(
  //   `/reservations/${id}`,
  // );
  const handleDelete = (id: Id) => {
    // deleteReservation(String(id));
    console.log('result: ', result);

    confirm(id, deleteReservation, 'هل أنت متأكد من حذف هذا الحجز');
  };

  useEffect(() => {
    if (result.isError || result.isSuccess) {
      setOpen(true);
    }
  }, [result.isSuccess, result.isError]);
  if (isLoading) {
    return <CircularProgress />;
  }
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Stack id='mainWrapper' spacing={2}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={`${result.isSuccess ? 'success' : 'error'}`}
          sx={{ width: '100%' }}
        >
          {result.isSuccess ? 'تم حذف الحجز' : 'حدث خطأ ما'}
        </Alert>
      </Snackbar>

      <Stack id='header'>
        <Stack direction='row' spacing={1}>
          <Typography fontWeight={600}>رقم الحجز</Typography>
          <Typography fontWeight='medium' color={theme.palette.primary.main}>
            {reservation?.data.id}
          </Typography>
        </Stack>
        <Stack direction='row' spacing={1}>
          <Typography fontWeight={600}>حالة الحجز</Typography>
          <Typography fontWeight='medium' color='#FF9A00'>
            {reservation?.data.status_string}
          </Typography>
        </Stack>
      </Stack>
      <Stack id='buttons' direction='row' spacing={2} alignItems='center'>
        {/* <Button
          sx={{
            border: '1px solid #191919',
            borderRadius: '5px',
            color: '#191919',
            filter: 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.25))',
          }}
          startIcon={Icons.deleteIcon('#FF0000')}
          onClick={() => handleDelete(id)}
        >
          حذف الحجز
        </Button> */}
        <DeleteButton deleteHandler={() => handleDelete(id)}>
          حذف الحجز
        </DeleteButton>
        <Button
          sx={{
            border: '1px solid #191919',
            borderRadius: '5px',
            color: '#191919',
            filter: 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.25))',
          }}
          startIcon={Icons.editIcon}
        >
          تعديل الحجز
        </Button>
        <Button
          sx={{
            border: '1px solid #191919',
            borderRadius: '5px',
            color: '#191919',
            filter: 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.25))',
          }}
          startIcon={Icons.sendIcon}
        >
          إرسال لبايكر
        </Button>
      </Stack>
      <Stack id='boxes' direction='row' flexWrap='wrap' gap={1}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            minWidth: '200px',
            backgroundColor: '#F6F6F6',
            border: '1px solid #DDDDDD',
            borderRadius: '10px',
            padding: '20px',
            gap: 1,
          }}
        >
          <Stack>
            <Typography fontWeight='medium'>الإسم</Typography>
            <Typography color={theme.palette.primary.main}>
              {reservation?.data.user_name}{' '}
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='medium'>رقم الهاتف</Typography>
            <Typography color={theme.palette.primary.main}>
              {reservation?.data.user_phone}{' '}
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='medium'> العنوان</Typography>
            <Typography color={theme.palette.primary.main}>
              جدة -شارع الملك عبد العزيز - بجوارمسجد السلام
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            minWidth: '200px',
            backgroundColor: '#F6F6F6',
            border: '1px solid #DDDDDD',
            borderRadius: '10px',
            padding: '20px',
            gap: 1,
          }}
        >
          <Stack>
            <Typography fontWeight='medium'>ماركة السيارة</Typography>
            <Typography color={theme.palette.primary.main}>
              {reservation?.data.car_brand}{' '}
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='medium'> موديل السيارة</Typography>
            <Typography color={theme.palette.primary.main}>
              {reservation?.data.car_model}
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='medium'> لون السيارة</Typography>
            <Typography color={theme.palette.primary.main}>
              {reservation?.data.color}
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            minWidth: '200px',
            backgroundColor: '#F6F6F6',
            border: '1px solid #DDDDDD',
            borderRadius: '10px',
            padding: '20px',
            gap: 1,
          }}
        >
          <Stack>
            <Typography fontWeight='medium'> الخدمات</Typography>

            {reservation?.data.services.map(service => (
              <Typography
                key={service.service_name}
                color={theme.palette.primary.main}
              >
                {service.service_name} ({service.service_cost + ' ريال '})
              </Typography>
            ))}
            {/* <Typography color={theme.palette.primary.main}>
              خدمة توبابلز 32 ريال
            </Typography>
            <Typography color={theme.palette.primary.main}>
              تلبي دعاسات 5ريال
            </Typography>
            <Typography color={theme.palette.primary.main}>
              فواحة عطرية 3 ريال
            </Typography> */}
          </Stack>
          <Stack>
            <Typography fontWeight='medium'> سعر الحجز</Typography>
            <Typography color={theme.palette.primary.main}>
              {reservation?.data.total}
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            minWidth: '200px',
            backgroundColor: '#F6F6F6',
            border: '1px solid #DDDDDD',
            borderRadius: '10px',
            padding: '20px',
            gap: 1,
          }}
        >
          <Stack>
            <Typography fontWeight='medium'> تاريخ الحجز</Typography>
            <Typography color={theme.palette.primary.main}>
              {reservation?.data.created_at}
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='medium'>ساعة الحجز</Typography>
            <Typography color={theme.palette.primary.main}>
              {reservation?.data.time}
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            width: '60.6%',
            minWidth: '420px',
            backgroundColor: '#F6F6F6',
            border: '1px solid #DDDDDD',
            borderRadius: '10px',
            padding: '20px',
            gap: 2,
          }}
        >
          <Typography fontWeight='medium'>تتبع الحجز</Typography>
          <CustomizedSteppers />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            minWidth: '200px',
            backgroundColor: '#F6F6F6',
            border: '1px solid #DDDDDD',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          <Typography fontWeight='medium'>اسم البايكر</Typography>
          <Typography color={theme.palette.primary.main}>
            {reservation?.data.biker_name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            minWidth: '200px',
            backgroundColor: '#F6F6F6',
            border: '1px solid #DDDDDD',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          <Typography fontWeight='medium'> التقييم</Typography>
          <Rating
            precision={0.5}
            value={reservation?.data.rate.star_num}
            readOnly
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            minWidth: '200px',
            backgroundColor: '#F6F6F6',
            border: '1px solid #DDDDDD',
            borderRadius: '10px',
            padding: '20px',
            gap: 1,
          }}
        >
          <Typography fontWeight='medium'> ملاحظات</Typography>
          <Typography color={theme.palette.primary.main}>
            {reservation?.data.rate.notes}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ReservationDetails;
