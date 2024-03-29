import { useState } from 'react';
import {
  Box,
  InputAdornment,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import {
  CustomButton,
  CustomNumberField,
  CustomizedTextField,
} from '../../globalStyle';
import UploadImage from '../../components/uploadImage';
import Counter from '../../components/counter';
import Switch from '../../components/switch';

const ServicesForm = () => {
  const [priceFlag, setPriceFlag] = useState(false);
  const [payEarnestFlag, setPayEarnestFlag] = useState(false);
  const [incPercentageFlag, setIncPercentageFlag] = useState(false);
  const theme = useTheme();

  const handleSwitch =
    (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
      setState(prev => !prev);
    };
  return (
    <Stack padding={'0.5rem 0 1.5rem 0'} spacing={2}>
      <Typography fontWeight={600}>خدمة جديدة</Typography>
      <Stack direction='row' flexWrap='wrap' gap={3} pr='20px'>
        <Stack
          spacing={2}
          sx={{
            width: '100%',
            minWidth: '250px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#F6F6F6',
              border: '1px solid #1975FF',
              borderRadius: '10px',
              padding: '20px',
              gap: 1,
              width: '30%',
              marginTop: '1rem',
            }}
          >
            <UploadImage />
          </Box>
          <Typography fontWeight={500}>اسم او نوع الحجز</Typography>
          <CustomizedTextField placeholder='اسم او نوع الحجز' />
          <Typography fontWeight={500}>المدة (بالدقائق)</Typography>
          <Counter />

          <Typography fontWeight={500}>الوصف (اختياري)</Typography>
          <CustomizedTextField
            placeholder='هذا النص هو مثال لنص قد يحل في نفس المساحة'
            multiline
            rows={4}
            maxRows={6}
          />

          <FormControlLabel
            control={
              <Switch onChange={handleSwitch(setPriceFlag)} sx={{ m: 1 }} />
            }
            label='وضع سعر على الخدمة'
          />
          {priceFlag && (
            <>
              <CustomNumberField
                name='servicePrice'
                placeholder='سعر الخدمة'
                id='standard-adornment-weight'
                InputProps={{
                  type: 'number',
                  endAdornment: (
                    <InputAdornment position='end'>ريال سعودي</InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={payEarnestFlag}
                    onChange={handleSwitch(setPayEarnestFlag)}
                    sx={{ m: 1 }}
                  />
                }
                label='دفع عربون عند الحجز'
              />
              {payEarnestFlag && (
                <CustomNumberField
                  name='payEarnest'
                  placeholder='العربون'
                  id='standard-adornment-weight'
                  InputProps={{
                    type: 'number',
                    endAdornment: (
                      <InputAdornment position='end'>ريال سعودي</InputAdornment>
                    ),
                  }}
                />
              )}
              <FormControlLabel
                control={
                  <Switch
                    checked={incPercentageFlag}
                    onChange={handleSwitch(setIncPercentageFlag)}
                    sx={{ m: 1 }}
                  />
                }
                label='زيادة السعر عند اختيار موعد قريب'
              />
              {incPercentageFlag && (
                <CustomNumberField
                  name='incPercentage'
                  placeholder='نسبة الزيادة'
                  id='standard-adornment-weight'
                  InputProps={{
                    type: 'number',
                    endAdornment: (
                      <InputAdornment position='end'>%</InputAdornment>
                    ),
                  }}
                />
              )}
            </>
          )}
          <FormLabel id='demo-row-radio-buttons-group-label'>
            المجحوعة ( اختياري)
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='مجموعة موجودة مسبقا '
            />
            <FormControlLabel
              value='male'
              control={<Radio />}
              label='مجموع جديدة'
            />
          </RadioGroup>
          <CustomizedTextField name='groupName' placeholder='اسم المجموعة' />
          <Box style={{ marginRight: 'auto' }}>
            <CustomButton
              style={{
                backgroundColor: theme.palette.primary.main,
                color: '#fff',
                marginLeft: '0.3rem',
              }}
            >
              حفظ الخدمة
            </CustomButton>

            <CustomButton
              style={{
                backgroundColor: '#E6E6E6',
                color: theme.palette.primary.main,
              }}
            >
              إلغاء
            </CustomButton>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ServicesForm;
