import { useContext } from 'react';
import { Button } from '@mui/material';
import CustomDateRangePicker from '../dateRangePicker';
import { Icons } from '../../assets';
import BoxShadow from '../boxShadow';
import ContextVacation from '../../context/context-vacation';

const BoxDatePicker = ({ id }: { id: Number }) => {
  const { deleteVacation } = useContext(ContextVacation);

  return (
    <BoxShadow>
      <CustomDateRangePicker />
      <Button onClick={() => deleteVacation(Number(id))}>
        {Icons.deleteIcon('#FF0000')}
      </Button>
    </BoxShadow>
  );
};

export default BoxDatePicker;
