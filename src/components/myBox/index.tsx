import { memo } from 'react';
import { Box, Button } from '@mui/material';
import CustomDateRangePicker from '../dateRangePicker';
import { Icons } from '../../assets';

type Props = {
  deleteVacation: (id: number) => void;
};

const BoxDatePicker = memo(function BoxDatePicker({ deleteVacation }: Props) {
  const keyNumber = Math.random();
  return (
    <Box
      key={keyNumber}
      sx={{
        boxShadow: 1,
        gap: 4,
        bgcolor: theme => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: theme =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        p: 1,
        borderRadius: 2,
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: '700',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <CustomDateRangePicker />
      <Button onClick={() => deleteVacation(keyNumber)}>
        {Icons.deleteIcon('#FF0000')}
      </Button>
    </Box>
  );
});

export default BoxDatePicker;
