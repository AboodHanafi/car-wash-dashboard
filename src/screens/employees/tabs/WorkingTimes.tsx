import { useContext } from 'react';
import { Stack } from '@mui/material';
import CustomAddButton from '../../../components/addButton';
import useWorkingTimes from '../../../context/context-employee';

function WorkingTimes() {
  const { workingTimesList, addWorkingTime } = useContext(useWorkingTimes);
  return (
    <Stack spacing={1}>
      {workingTimesList}
      <CustomAddButton onClick={addWorkingTime} left>
        اضافة اجازة
      </CustomAddButton>
    </Stack>
  );
}

export default WorkingTimes;
