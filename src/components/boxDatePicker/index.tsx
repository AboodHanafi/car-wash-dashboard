import { memo } from 'react';
import { Button } from '@mui/material';
import CustomDateRangePicker from '../dateRangePicker';
import { Icons } from '../../assets';
import BoxShadow from '../boxShadow';

type Props = {
  deleteVacation: (id: number) => void;
};

const BoxDatePicker = memo(function BoxDatePicker({ deleteVacation }: Props) {
  const keyNumber = Math.random();
  return (
    <BoxShadow>
      <CustomDateRangePicker />
      <Button onClick={() => deleteVacation(keyNumber)}>
        {Icons.deleteIcon('#FF0000')}
      </Button>
    </BoxShadow>
  );
});

export default BoxDatePicker;
