import { ChangeEvent } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { CustomButton } from '../../globalStyle';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type ExtraServices = { pedals: boolean; redolent: boolean };
type CutsomerData = {
  name: string;
  tel: string;
  address: string;
  resDate: Date;
  resHoure: string;
  carData: { carBrand: string; carModel: string; carColor: string };
  extraServices: ExtraServices;
};

const ReservationForm = () => {
  const [resCutsomerData, setResCutsomerData] = useState<CutsomerData>({
    name: '',
    address: '',
    tel: '',
    resDate: new Date(),
    resHoure: '',
    carData: { carBrand: '', carColor: '', carModel: '' },
    extraServices: { pedals: true, redolent: true },
  });

  const schema: ZodType<CutsomerData> = z.object({
    name: z
      .string()
      .min(2, 'يجب ادخال اسم الحجز')
      .max(50, 'يجب ان يكون اسم الحجز اقل من 50 حرفا'),
    address: z.string().min(2).max(100),
    tel: z
      .string()
      .regex(
        RegExp(/^((?:[+?0?0?966]+)(?:s?d{2})(?:s?d{7}))$/),
        'الرجاء ادخال رقم صحيح',
      ),
    resDate: z.date(),
    resHoure: z.string(),
    carData: z.object({
      carBrand: z.string().min(2).max(50),
      carModel: z.string().min(2).max(50),
      carColor: z.string().min(2).max(50),
    }),
    extraServices: z.object({
      pedals: z.boolean(),
      redolent: z.boolean(),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CutsomerData>({
    resolver: zodResolver(schema),
  });

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setResCutsomerData(prev => {
      let updatedData = { ...resCutsomerData };

      if (name.includes('car')) {
        updatedData = {
          ...updatedData,
          carData: { ...prev.carData, [name]: value },
        };
      } else if (name === 'pedals' || name === 'redolent') {
        updatedData = {
          ...updatedData,
          extraServices: {
            ...prev.extraServices,
            [name]: !prev.extraServices[name],
          },
        };
      } else {
        updatedData = { ...updatedData, [name]: value };
      }
      return updatedData;
    });
  };
  const submitData = (data: CutsomerData) => {
    console.log(data);
  };

  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Stack spacing={2} component={'form'} onSubmit={handleSubmit(submitData)}>
      <Typography fontWeight={600}>حجز جديد</Typography>
      <Stack direction='row' flexWrap='wrap' gap={3} pr='20px'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '40%',
            minWidth: '250px',
            backgroundColor: '#F6F6F6',
            border: '1px solid #DDDDDD',
            borderRadius: '10px',
            padding: '20px',
            gap: 1,
          }}
        >
          <TextField
            id='standard-basic'
            label='الأسم'
            variant='standard'
            value={resCutsomerData.name}
            {...register('name', {
              onChange: handleChangeInput,
            })}
          />
          {errors.name && (
            <Typography color={'#FF0000'}>{errors.name.message}</Typography>
          )}
          {/* <Typography>{errors.name?.message} </Typography> */}

          <TextField
            id='standard-basic'
            label='رقم الهاتف'
            variant='standard'
            value={resCutsomerData.tel}
            {...register('tel', {
              onChange: handleChangeInput,
            })}
          />
          <Typography color={'#FF0000'}>{errors.tel?.message} </Typography>

          <TextField
            id='standard-basic'
            label='العنوان'
            variant='standard'
            value={resCutsomerData.address}
            {...register('address', {
              onChange: handleChangeInput,
            })}
          />
          <Typography color={'#FF0000'}>{errors.address?.message}</Typography>
          <TextField
            id='standard-basic'
            label='تاريخ الحجز'
            variant='standard'
            name='resDate'
            onChange={handleChangeInput}
            value={resCutsomerData.resDate}
          />
          <TextField
            id='standard-basic'
            label='ساعة الحجز'
            variant='standard'
            name='resHoure'
            onChange={handleChangeInput}
            value={resCutsomerData.resHoure}
          />
        </Box>
        <Stack
          spacing={2}
          sx={{
            width: '40%',
            minWidth: '250px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#F6F6F6',
              border: '1px solid #DDDDDD',
              borderRadius: '10px',
              padding: '20px',
              gap: 1,
            }}
          >
            <TextField
              id='standard-basic'
              label='ماركة السيارة'
              variant='standard'
              name='carBrand'
              onChange={handleChangeInput}
              value={resCutsomerData.carData.carBrand}
            />
            <TextField
              id='standard-basic'
              label='موديل السيارة'
              variant='standard'
              name='carModel'
              onChange={handleChangeInput}
              value={resCutsomerData.carData.carModel}
            />
            <TextField
              id='standard-basic'
              label='لون السيارة'
              variant='standard'
              name='carColor'
              onChange={handleChangeInput}
              value={resCutsomerData.carData.carColor}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#F6F6F6',
              border: '1px solid #DDDDDD',
              borderRadius: '10px',
              padding: '20px',
              gap: 1,
            }}
          >
            <FormLabel>الخدمات الإضافية</FormLabel>
            <FormGroup
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    name='pedals'
                    icon={<CheckCircleOutlineIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    checked={resCutsomerData.extraServices.pedals}
                    onChange={handleChangeInput}
                  />
                }
                label='تلبيس دعاسات'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name='redolent'
                    icon={<CheckCircleOutlineIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    checked={resCutsomerData.extraServices.redolent}
                    onChange={handleChangeInput}
                  />
                }
                label='فواحة عطرية'
              />
            </FormGroup>
          </Box>
          <Stack id='buttons' direction='row' spacing={1}>
            <CustomButton
              style={{
                backgroundColor: theme.palette.primary.main,
                color: '#fff',
                width: '50%',
              }}
              type='submit'
            >
              حجز
            </CustomButton>
            <CustomButton
              style={{
                backgroundColor: '#fff',
                color: theme.palette.primary.main,
                width: '50%',
              }}
              onClick={() => navigate('/reservations')}
            >
              إلغاء
            </CustomButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ReservationForm;
