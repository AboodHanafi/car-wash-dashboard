import { ChangeEvent, FormEvent, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CustomButton } from '../../globalStyle';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type Location = { name: string; description: string; employees: string[] };

function LocationDialog({ isOpen, onClose }: Props) {
  const [location, setLocation] = useState<Location>({} as Location);
  const theme = useTheme();

  const handleLocationState =
    (setState: React.Dispatch<React.SetStateAction<Location>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setState({ ...location, [event.target.name]: event.target.value });
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(location);
  };
  return (
    <Dialog fullWidth open={isOpen} onClose={onClose}>
      <DialogTitle fontWeight={600} textAlign={'center'}>
        اضافة منطقة
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Typography paddingY={1} fontWeight={500}>
            اسم المنطقة
          </Typography>
          <TextField
            onChange={handleLocationState(setLocation)}
            name='name'
            value={location.name}
            fullWidth
            autoFocus
            placeholder='الاسم'
          />

          <Typography paddingY={1} fontWeight={500}>
            الوصف (اختياري)
          </Typography>
          <TextField
            onChange={handleLocationState(setLocation)}
            value={location.description}
            name='description'
            fullWidth
            multiline
            rows={4}
            placeholder='هذا النص هو مثال لنص قد يحل في نفس المساحة'
          />

          <Typography paddingY={1} fontWeight={500}>
            الموظفين
          </Typography>
          <TextField
            onChange={handleLocationState(setLocation)}
            value={location.employees}
            name='employees'
            fullWidth
            autoFocus
            placeholder='الموظفين'
          />
        </DialogContent>
        <DialogActions>
          <Box style={{ marginRight: 'auto' }}>
            <CustomButton
              style={{
                backgroundColor: theme.palette.primary.main,
                color: '#fff',
                marginLeft: '0.3rem',
              }}
              onClick={onClose}
              type='submit'
            >
              حفظ الخدمة
            </CustomButton>

            <CustomButton
              style={{
                backgroundColor: '#E6E6E6',
                color: theme.palette.primary.main,
              }}
              onClick={onClose}
            >
              إلغاء
            </CustomButton>
          </Box>
        </DialogActions>
      </form>
    </Dialog>
  );
}
export default LocationDialog;
