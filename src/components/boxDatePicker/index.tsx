import { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import CustomDateRangePicker from '../dateRangePicker';
import BoxShadow from '../boxShadow';
import DeleteButton from '../deleteButton';

const BoxDatePicker = ({
  id,
  deleteVacation,
}: {
  id: string;
  deleteVacation?: (id: string) => void;
}) => {
  return (
    <BoxShadow>
      <CustomDateRangePicker />
      {deleteVacation && (
        <DeleteButton deleteHandler={() => deleteVacation(id)}>
          حذف
        </DeleteButton>
      )}
    </BoxShadow>
  );
};

export default BoxDatePicker;
