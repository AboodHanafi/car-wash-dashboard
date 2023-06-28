import { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import CustomDateRangePicker from '../dateRangePicker';
import { Icons } from '../../assets';
import BoxShadow from '../boxShadow';
import ContextVacation from '../../context/context-employee';
import DeleteButton from '../deleteButton';

const BoxDatePicker = ({ id }: { id: number }) => {
  const { deleteVacation } = useContext(ContextVacation);

  const handleDeleteVacation = (id: number) => {
    deleteVacation(id);
  };

  return (
    <BoxShadow>
      <CustomDateRangePicker />
      <DeleteButton deleteHandler={() => handleDeleteVacation(id)} />
    </BoxShadow>
  );
};

export default BoxDatePicker;
