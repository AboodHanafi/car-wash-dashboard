import {
  Box,
  Button,
  Rating,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useConfirm } from 'material-ui-confirm';
import { Icons } from '../../assets';
import CustomizedSteppers from '../../components/stepper';
import { useParams } from 'react-router-dom';
import useCustomConfirm from '../../hooks/use-custom-confirm';

type IdType = string | number | undefined;
const ReservationDetails = () => {
  let { id } = useParams();
  const confirm = useCustomConfirm();
  const theme = useTheme();

  const handleDelete = (id: IdType) => {
    confirm('هل أنت متأكد من حذف هذا الحجز');
  };
  return (
    <Stack id='mainWrapper' spacing={2}>
      <Stack id='header'>
        <Stack direction='row' spacing={1}>
          <Typography fontWeight={600}>رقم الحجز</Typography>
          <Typography fontWeight='medium' color={theme.palette.primary.main}>
            008
          </Typography>
        </Stack>
        <Stack direction='row' spacing={1}>
          <Typography fontWeight={600}>حالة الحجز</Typography>
          <Typography fontWeight='medium' color='#FF9A00'>
            قيد التنفيذ
          </Typography>
        </Stack>
      </Stack>
      <Stack id='buttons' direction='row' spacing={2} alignItems='center'>
        <Button
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
        </Button>
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
              إبراهيم جمال
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='medium'>رقم الهاتف</Typography>
            <Typography color={theme.palette.primary.main}>
              +236 659 425
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
            <Typography color={theme.palette.primary.main}>مرسيدس </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='medium'> موديل السيارة</Typography>
            <Typography color={theme.palette.primary.main}>جي كلاس</Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='medium'> لون السيارة</Typography>
            <Typography color={theme.palette.primary.main}>ابيض</Typography>
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
            <Typography color={theme.palette.primary.main}>
              خدمة توبابلز 32 ريال
            </Typography>
            <Typography color={theme.palette.primary.main}>
              تلبي دعاسات 5ريال
            </Typography>
            <Typography color={theme.palette.primary.main}>
              فواحة عطرية 3 ريال
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='medium'> سعر الحجز</Typography>
            <Typography color={theme.palette.primary.main}>40.00</Typography>
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
              السبت 11-2-2022
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='medium'>ساعة الحجز</Typography>
            <Typography color={theme.palette.primary.main}>11-30</Typography>
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
          <Typography color={theme.palette.primary.main}>علي احمد</Typography>
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
          <Rating precision={0.5} value={3.5} readOnly />
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
            لا يوجد ملاحظات
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ReservationDetails;
