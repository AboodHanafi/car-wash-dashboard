import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  InputAdornment,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useTheme,
  Checkbox,
} from '@mui/material';
import { CustomizedTextField } from '../../../globalStyle';
import Select from '../../../components/select';

type EmpInfo = { name: string; description: string; employees: string[] };

function EmployeeInfo() {
  const [empInfo, setEmpInfo] = useState<EmpInfo>({} as EmpInfo);

  const [allServicesFlag, setAllServicesFlag] = useState(false);

  const [services, setServices] = useState({
    bigCars: false,
    smallCars: false,
    environmentalSecurity: false,
    internalAndExternal: false,
  });

  const handleLocationState =
    (setState: React.Dispatch<React.SetStateAction<EmpInfo>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setState({ ...empInfo, [event.target.name]: event.target.value });
    };

  const handleChangeServices = (event: ChangeEvent<HTMLInputElement>) => {
    setServices({
      ...services,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    let key: keyof typeof services;
    for (key in services) {
      if (!services[key]) {
        setAllServicesFlag(false);
        return;
      } else {
        setAllServicesFlag(true);
      }
    }
  }, [services]);
  return (
    <Stack spacing={1}>
      <Typography fontWeight={500}>الاسم</Typography>
      <CustomizedTextField placeholder='ادخل رمز الكوبون' />

      <Typography fontWeight={500}>رقم الهاتف</Typography>
      <CustomizedTextField placeholder='رقم الهاتف' />

      <Box component={'fieldset'} style={{ marginTop: '2rem' }}>
        <legend>الخدمات المسموح له بتقديمها</legend>
        <RadioGroup
          aria-labelledby='demo-row-radio-buttons-group-label'
          name='services'
          style={{ marginRight: '1rem', marginTop: '0.4rem' }}
        >
          <FormControlLabel
            value='allServices'
            control={
              <Radio
                checked={allServicesFlag}
                onChange={() => {
                  setAllServicesFlag(true);
                  for (const key in services) {
                    setServices(prev => ({ ...prev, [key]: true }));
                  }
                }}
              />
            }
            label='جميع الخدمات'
          />
          <FormControlLabel
            value='selection'
            control={
              <Radio
                checked={!allServicesFlag}
                onChange={() => {
                  setAllServicesFlag(false);
                  for (const key in services) {
                    setServices(prev => ({ ...prev, [key]: false }));
                  }
                }}
              />
            }
            label='تحديد'
          />
        </RadioGroup>

        <FormGroup style={{ marginRight: '2rem', marginTop: '0.4rem' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={services.smallCars}
                onChange={handleChangeServices}
                name='smallCars'
              />
            }
            label='غسيل سيارات حجم صغير '
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={services.bigCars}
                onChange={handleChangeServices}
                name='bigCars'
              />
            }
            label='غسيل سيارات حجم كبير '
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={services.environmentalSecurity}
                onChange={handleChangeServices}
                name='environmentalSecurity'
              />
            }
            label='غسيل القوات الخاصة للامن البيئي'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={services.internalAndExternal}
                onChange={handleChangeServices}
                name='internalAndExternal'
              />
            }
            label='غسيل داخلي وخاردي'
          />
        </FormGroup>
        {/* <Typography fontWeight={400}>الخدمات المسموح له بتقديمها</Typography> */}
      </Box>

      <Typography paddingY={1} fontWeight={500}>
        الوصف (اختياري)
      </Typography>
      <TextField
        onChange={handleLocationState(setEmpInfo)}
        value={empInfo.description}
        name='description'
        fullWidth
        multiline
        rows={4}
        placeholder='هذا النص هو مثال لنص قد يحل في نفس المساحة'
      />
      <Typography paddingY={1} fontWeight={500}>
        المنطقة
      </Typography>
      <Select
        label='المنطقة'
        options={[
          'حي ( الزعتير والتيسير والنخيل والروابي )',
          'حي ( التفاح والتيسير والنخيل والروابي )',
          'حي ( المروج والتيسير والنخيل والروابي )',
        ]}
      />

      <Typography fontWeight={500}>اعدادت الرسائل</Typography>
      <Typography fontWeight={400}>
        من يمكنه تلقي تنبيهات طلبات الحجز ( تنبيهات الالغاء او التذكير)
      </Typography>
      <RadioGroup
        aria-labelledby='demo-row-radio-buttons-group-label'
        name='services'
        style={{ marginRight: '1rem', marginTop: '0.4rem' }}
      >
        <FormControlLabel
          value='accountOwner'
          control={<Radio />}
          label='صاحب الحساب'
        />
        <FormControlLabel value='employee' control={<Radio />} label='الموظف' />
        <FormControlLabel value='both' control={<Radio />} label='كلاهما' />
      </RadioGroup>
    </Stack>
  );
}

export default EmployeeInfo;
