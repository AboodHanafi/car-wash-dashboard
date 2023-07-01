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
import {
  CustomButton,
  CustomNumberField,
  CustomizedTextField,
} from '../../globalStyle';
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/counter';
import Switch from '../../components/switch';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CouponsForm = () => {
  const [activateDeactivateFlag, setActivateDeactivateFlag] = useState(false);
  const [cutomerUsageTimesFlag, setCutomerUsageTimesFlag] = useState(false);
  const [usageTimesFlag, setUsageTimesFlag] = useState(false);
  const [expirationDateFlag, setExpirationDateFlag] = useState(false);
  const [employeesTypesFlag, setEmployeesTypesFlag] = useState(false);
  const [allServicesFlag, setAllServicesFlag] = useState(false);

  const [services, setServices] = useState({
    bigCars: false,
    smallCars: false,
    environmentalSecurity: false,
    internalAndExternal: false,
  });

  const [employeesTypes, setEmployeesTypes] = useState({
    porna: false,
    santos: false,
    rajo: false,
    dona: false,
  });

  const [discountFlag, setDiscountFlag] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSwitch =
    (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
      setState(prev => !prev);
    };

  const handleChangeServices = (event: ChangeEvent<HTMLInputElement>) => {
    setServices({
      ...services,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeEmployeesTypes = (event: ChangeEvent<HTMLInputElement>) => {
    setEmployeesTypes({
      ...employeesTypes,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmitCoupon = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
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

  useEffect(() => {
    let key: keyof typeof employeesTypes;
    for (key in employeesTypes) {
      if (!employeesTypes[key]) {
        setEmployeesTypesFlag(false);
        return;
      } else {
        setEmployeesTypesFlag(true);
      }
    }
  }, [employeesTypes]);

  return (
    <Stack padding={'0.5rem 0 1.5rem 0'} spacing={2}>
      <Typography fontWeight={600}>كوبون جديد</Typography>
      <Stack direction='row' flexWrap='wrap' gap={3} pr='20px'>
        <Stack
          spacing={2}
          sx={{
            width: '100%',
            minWidth: '250px',
          }}
        >
          {/* <form onSubmit={handleSubmitCoupon}> */}
          {/* <FormControl sx={{ width: '100%' }}> */}
          <Typography fontWeight={500}>رمز الكوبون (الكود)</Typography>
          <CustomizedTextField placeholder='ادخل رمز الكوبون' />
          <Typography
            fontSize={10}
            color={'#aaa'}
            style={{ marginTop: '2px' }}
            fontWeight={500}
          >
            احرف انجليزية او ارقام فقط
          </Typography>
          <Typography fontWeight={500}>النوع</Typography>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
            style={{ marginRight: '1rem', marginTop: '0.4rem' }}
          >
            <FormControlLabel
              value='female'
              control={
                <Radio
                  checked={discountFlag}
                  onChange={() => setDiscountFlag(!discountFlag)}
                />
              }
              label='نسبة خصم على السعر'
            />
            <FormControlLabel
              value='male'
              control={
                <Radio
                  checked={!discountFlag}
                  onChange={() => setDiscountFlag(!discountFlag)}
                />
              }
              label='مبلغ خصم ثابت'
            />
          </RadioGroup>
          <Typography fontWeight={500}>
            {discountFlag ? 'نسبة الخصم' : 'مبلغ الخصم'}
          </Typography>
          <CustomNumberField
            placeholder={discountFlag ? 'نسبة الخصم' : 'مبلغ الخصم'}
            id='standard-adornment-weight'
            InputProps={{
              type: 'number',
              endAdornment: (
                <InputAdornment position='end'>
                  {discountFlag ? '%' : 'ريال سعودي'}
                </InputAdornment>
              ),
            }}
          />
          <Typography fontWeight={500}>اقل سعر لتطبيق الكوبون</Typography>
          <CustomNumberField
            placeholder='اقل سعر لتطبيق الكوبون'
            id='standard-adornment-weight'
            InputProps={{
              type: 'number',
              endAdornment: (
                <InputAdornment position='end'>ريال سعودي</InputAdornment>
              ),
            }}
          />
          <Typography fontWeight={500}>اقصى مبلغ خصم</Typography>
          <CustomNumberField
            placeholder='اقصى مبلغ خصم'
            id='standard-adornment-weight'
            InputProps={{
              type: 'number',
              endAdornment: (
                <InputAdornment position='end'>ريال سعودي</InputAdornment>
              ),
            }}
          />

          {/* Services section */}
          <Box>
            <Typography fontWeight={500}>الخدمات</Typography>
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
          </Box>

          {/* Employees section */}
          <Box>
            <Typography fontWeight={500}>الموظفين</Typography>
            <RadioGroup
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='employees'
              style={{ marginRight: '1rem', marginTop: '0.4rem' }}
            >
              <FormControlLabel
                value='allServices'
                control={
                  <Radio
                    checked={employeesTypesFlag}
                    onChange={() => {
                      setEmployeesTypesFlag(true);
                      for (const key in employeesTypes) {
                        setEmployeesTypes(prev => ({
                          ...prev,
                          [key]: true,
                        }));
                      }
                    }}
                  />
                }
                label='جميع الموظفين'
              />
              <FormControlLabel
                value='selection'
                control={
                  <Radio
                    checked={!employeesTypesFlag}
                    onChange={() => {
                      setEmployeesTypesFlag(false);
                      for (const key in employeesTypes) {
                        setEmployeesTypes(prev => ({
                          ...prev,
                          [key]: false,
                        }));
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
                    checked={employeesTypes.porna}
                    onChange={handleChangeEmployeesTypes}
                    name='porna'
                  />
                }
                label='البايكر بورنا'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={employeesTypes.santos}
                    onChange={handleChangeEmployeesTypes}
                    name='santos'
                  />
                }
                label='البايكر سانتوس'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={employeesTypes.rajo}
                    onChange={handleChangeEmployeesTypes}
                    name='rajo'
                  />
                }
                label='البايكر راجو'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={employeesTypes.dona}
                    onChange={handleChangeEmployeesTypes}
                    name='dona'
                  />
                }
                label='البايكر دونا'
              />
            </FormGroup>
          </Box>
          {/* End employees section */}
          <FormControlLabel
            control={
              <Switch
                onChange={handleSwitch(setUsageTimesFlag)}
                sx={{ m: 1 }}
              />
            }
            label={
              <Typography fontWeight={600}>
                تحديد اقصى عدد مرات الاستخدام
              </Typography>
            }
          />
          {usageTimesFlag && (
            <Box style={{ marginRight: '2rem', marginTop: '0.4rem' }}>
              <Typography fontWeight={500}>
                اقصى عدد مرات استخدام الكوبون
              </Typography>
              <Counter />
            </Box>
          )}

          <FormControlLabel
            control={
              <Switch
                onChange={handleSwitch(setCutomerUsageTimesFlag)}
                sx={{ m: 1 }}
              />
            }
            label={
              <Typography fontWeight={600}>
                تحديد اقصى عدد مرات الاستخدام للعميل الواحد
              </Typography>
            }
          />
          {cutomerUsageTimesFlag && (
            <Box style={{ marginRight: '2rem', marginTop: '0.4rem' }}>
              <Typography fontWeight={500}>
                أقصى عدد مرات استخدام الكوبون للعميل الواحد
              </Typography>
              <Counter />
            </Box>
          )}
          <FormControlLabel
            control={
              <Switch
                onChange={handleSwitch(setExpirationDateFlag)}
                sx={{ m: 1 }}
              />
            }
            label={
              <Typography fontWeight={600}>
                تحديد تاريخ صلاحية لتطبيق الكوبون
              </Typography>
            }
          />
          <Box
            style={{
              marginRight: '2rem',
              marginTop: '0.4rem',
              width: '100%',
            }}
          >
            {expirationDateFlag && (
              <>
                <Typography fontWeight={500}>ينتهي بتاريخ </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    slotProps={{ textField: { size: 'small' } }}
                    sx={{
                      paddingTop: '0.4rem',
                    }}
                  />
                </LocalizationProvider>
              </>
            )}
          </Box>
          <FormControlLabel
            control={
              <Switch
                onChange={handleSwitch(setActivateDeactivateFlag)}
                checked={activateDeactivateFlag}
                sx={{ m: 1 }}
                name='activateDeactivate'
              />
            }
            label={
              <Typography fontWeight={600}>تفعيل الكوبون او تعطيله </Typography>
            }
          />

          <Box style={{ marginRight: 'auto' }}>
            <CustomButton
              type='submit'
              style={{
                backgroundColor: theme.palette.primary.main,
                color: '#fff',
                marginLeft: '0.3rem',
              }}
            >
              حفظ ونشر
            </CustomButton>

            <CustomButton
              type='button'
              style={{
                backgroundColor: '#E6E6E6',
                color: theme.palette.primary.main,
              }}
            >
              إلغاء
            </CustomButton>
          </Box>
          {/* </FormControl> */}
          {/* </form> */}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CouponsForm;
