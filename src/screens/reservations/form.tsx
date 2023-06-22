import { Dispatch, SetStateAction, ChangeEvent } from 'react';
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

type CutsomerData = {
  name: string;
  tel: string;
  address: string;
  resDate: Date;
  resHoure: string;
};
type ModCarData = { carBrand: string; carModel: string; carColor: string };
type ExtraServices = { pedals: boolean; redolent: boolean };

const ReservationForm = () => {
  const [extraServices, setExtraServices] = useState<ExtraServices>(
    {} as ExtraServices,
  );
  const [resCutsomerData, setResCutsomerData] = useState<CutsomerData>(
    {} as CutsomerData,
  );
  const [resCarData, setResCarData] = useState<ModCarData>({} as ModCarData);

  const handleChangeInput =
    (
      setState:
        | Dispatch<SetStateAction<CutsomerData>>
        | Dispatch<SetStateAction<ModCarData>>,
    ) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setState((prev: any) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    };

  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Stack spacing={2}>
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
            name='name'
            onChange={handleChangeInput(setResCutsomerData)}
            value={resCutsomerData.name}
          />
          <TextField
            id='standard-basic'
            label='رقم الهاتف'
            variant='standard'
            name='tel'
            onChange={handleChangeInput(setResCutsomerData)}
            value={resCutsomerData.tel}
          />
          <TextField
            id='standard-basic'
            label='العنوان'
            variant='standard'
            name='address'
            onChange={handleChangeInput(setResCutsomerData)}
            value={resCutsomerData.address}
          />
          <TextField
            id='standard-basic'
            label='تاريخ الحجز'
            variant='standard'
            name='resDate'
            onChange={handleChangeInput(setResCutsomerData)}
            value={resCutsomerData.resDate}
          />
          <TextField
            id='standard-basic'
            label='ساعة الحجز'
            variant='standard'
            name='resHoure'
            onChange={handleChangeInput(setResCutsomerData)}
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
              onChange={handleChangeInput(setResCarData)}
              value={resCarData.carBrand}
            />
            <TextField
              id='standard-basic'
              label='موديل السيارة'
              variant='standard'
              name='carModel'
              onChange={handleChangeInput(setResCarData)}
              value={resCarData.carModel}
            />
            <TextField
              id='standard-basic'
              label='لون السيارة'
              variant='standard'
              name='carColor'
              onChange={handleChangeInput(setResCarData)}
              value={resCarData.carColor}
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
                    icon={<CheckCircleOutlineIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    checked={extraServices?.pedals}
                    onChange={e =>
                      setExtraServices({
                        ...extraServices,
                        pedals: !extraServices.pedals,
                      })
                    }
                  />
                }
                label='تلبيس دعاسات'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckCircleOutlineIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    checked={extraServices?.redolent}
                    onChange={e =>
                      setExtraServices({
                        ...extraServices,
                        redolent: !extraServices.redolent,
                      })
                    }
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
