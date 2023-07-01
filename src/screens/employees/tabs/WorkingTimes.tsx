import { useContext, useState } from 'react';
import { Stack } from '@mui/material';
import CustomAddButton from '../../../components/addButton';
// import useWorkingTimes from '../../../context/context-employee';
import WorkingPeriod from '../../../components/workingPeriod';

function WorkingTimes() {
  // const { workingTimesList, addWorkingTime } = useContext(useWorkingTimes);
  const [workingTimesList, setWorkingTimesList] = useState<string[]>([
    new Date().toISOString(),
  ]);

  const addWorkingTime = () => {
    setWorkingTimesList(prev => [...prev, new Date().toISOString()]);
  };

  const deleteWorkingTime = (id: string) => {
    setWorkingTimesList(prev => prev.filter(vacationId => vacationId !== id));
  };
  return (
    <Stack spacing={1} rowGap={2}>
      {workingTimesList.map(workingTimeId => (
        <WorkingPeriod
          key={workingTimeId}
          id={workingTimeId}
          deleteWorkingTime={deleteWorkingTime}
        />
      ))}
      <CustomAddButton onClick={addWorkingTime} left>
        اضافة اجازة
      </CustomAddButton>
    </Stack>
  );
}

export default WorkingTimes;
