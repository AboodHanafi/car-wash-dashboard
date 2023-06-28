import { useContext } from 'react';
import { Stack } from '@mui/material';
import CustomAddButton from '../../../components/addButton';
import ContextVacation from '../../../context/context-vacation';
function Vacations() {
  const { vacationList, addVacation } = useContext(ContextVacation);
  return (
    <Stack spacing={1}>
      {vacationList}

      <CustomAddButton onClick={addVacation} left>
        اضافة اجازة
      </CustomAddButton>
    </Stack>
  );
}

export default Vacations;
