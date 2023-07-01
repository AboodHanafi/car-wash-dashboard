import { useState } from 'react';
import { Stack } from '@mui/material';
import CustomAddButton from '../../../components/addButton';
import BoxDatePicker from '../../../components/boxDatePicker';

function Vacations() {
  const [vacationList, setVacationList] = useState<string[]>([
    new Date().toISOString(),
  ]);

  const addVacation = () => {
    setVacationList(prev => [...prev, new Date().toISOString()]);
  };

  const deleteVacation = (id: string) => {
    setVacationList(prev => prev.filter(vacationId => vacationId !== id));
  };

  return (
    <Stack spacing={1} rowGap={2}>
      {vacationList.map(vacationId => (
        <BoxDatePicker
          key={vacationId}
          id={vacationId}
          deleteVacation={deleteVacation}
        />
      ))}

      <CustomAddButton onClick={addVacation} left>
        اضافة اجازة
      </CustomAddButton>
    </Stack>
  );
}

export default Vacations;
