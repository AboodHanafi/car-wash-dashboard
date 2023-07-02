import { ChangeEvent } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { CustomButton, CustomizedTextField } from '../../globalStyle';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from 'dayjs';
import { getPropName } from '../../utils/global-func';

type Nullable<T> = T | null;

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
  // const [time, setTime] = useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

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
      .nonempty('يجب ادخال اسم الحجز')
      .min(2)
      .max(50, 'يجب ان يكون اسم الحجز اقل من 50 حرفا'),
    address: z.string().nonempty('الرجاء ادخال العنوان').min(2).max(100),
    tel: z
      .string()
      .regex(
        RegExp(/^((?:[+?0?0?966]+)(?:s?d{2})(?:s?d{7}))$/),
        'الرجاء ادخال رقم هاتف صحيح',
      ),
    resDate: z.date({ description: 'asdm' }),
    resHoure: z.string(),
    carData: z.object({
      carBrand: z.string().min(2, 'الرجاء تعبئة هذا الحقل').max(50),
      carModel: z.string().min(2, 'الرجاء تعبئة هذا الحقل').max(50),
      carColor: z.string().min(2, 'الرجاء تعبئة هذا الحقل').max(50),
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
    const propName = getPropName(name);

    setResCutsomerData(prev => {
      let updatedData = { ...resCutsomerData };
      if (propName.includes('car')) {
        updatedData = {
          ...updatedData,
          carData: { ...prev.carData, [propName]: value },
        };
      } else if (propName === 'pedals' || propName === 'redolent') {
        updatedData = {
          ...updatedData,
          extraServices: {
            ...prev.extraServices,
            [propName]: !prev.extraServices[propName],
          },
        };
      } else {
        updatedData = { ...updatedData, [propName]: value };
      }
      return updatedData;
    });
  };
  const submitData = (data: CutsomerData) => {
    console.log(data);
  };

  const handleResTime = (time: string | null) => {
    const hour = time?.toString();
    console.log('hour: ', hour);
    // setResCutsomerData({ ...resCutsomerData, resHoure: String(hour) });
    // console.log('resCutsomerData: ', resCutsomerData);
    // const formattedTime = format(String(time), 'HH:mm:ss');
    // console.log('formattedTime: ', formattedTime);
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
          <CustomizedTextField
            id='standard-basic'
            label='الأسم'
            value={resCutsomerData.name}
            {...register('name', {
              onChange: handleChangeInput,
            })}
          />
          {errors.name && (
            <Typography color={'#FF0000'}>{errors.name.message}</Typography>
          )}
          {/* <Typography>{errors.name?.message} </Typography> */}

          <CustomizedTextField
            id='standard-basic'
            label='رقم الهاتف'
            value={resCutsomerData.tel}
            {...register('tel', {
              onChange: handleChangeInput,
            })}
          />
          <Typography color={'#FF0000'}>{errors.tel?.message} </Typography>

          <CustomizedTextField
            id='standard-basic'
            label='العنوان'
            value={resCutsomerData.address}
            {...register('address', {
              onChange: handleChangeInput,
            })}
          />
          <Typography color={'#FF0000'}>{errors.address?.message}</Typography>

          <>
            <Typography fontWeight={500}>تاريخ الحجز</Typography>

            <DatePicker
              slotProps={{ textField: { size: 'small' } }}
              sx={{
                paddingTop: '0.4rem',
              }}
            />
          </>
          <Typography color={'#FF0000'}>{errors.resDate?.message} </Typography>

          <DemoContainer components={['TimePicker']}>
            <TimePicker
              value={resCutsomerData.resHoure}
              label='ساعة الحجز'
              onChange={handleResTime}
            />
          </DemoContainer>
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
            <CustomizedTextField
              id='standard-basic'
              label='ماركة السيارة'
              value={resCutsomerData.carData.carBrand}
              {...register('carData.carBrand', {
                onChange: handleChangeInput,
              })}
            />
            <Typography color={'#FF0000'}>{errors.address?.message}</Typography>

            <CustomizedTextField
              id='standard-basic'
              label='موديل السيارة'
              value={resCutsomerData.carData.carModel}
              {...register('carData.carModel', {
                onChange: handleChangeInput,
              })}
            />
            <Typography color={'#FF0000'}>{errors.address?.message}</Typography>

            <CustomizedTextField
              id='standard-basic'
              label='لون السيارة'
              value={resCutsomerData.carData.carColor}
              {...register('carData.carColor', {
                onChange: handleChangeInput,
              })}
            />
            <Typography color={'#FF0000'}>{errors.address?.message}</Typography>
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
