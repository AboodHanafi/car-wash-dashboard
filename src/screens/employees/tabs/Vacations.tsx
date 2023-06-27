import { useState, useEffect, ChangeEvent } from 'react';
import {
  Box,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  Checkbox,
  Grid,
  Button,
} from '@mui/material';
import BoxShadow from '../../../components/boxShadow';
import CustomDateRangePicker from '../../../components/dateRangePicker';
import { Icons } from '../../../assets';
import { CustomButton } from '../../../globalStyle';
import CustomAddButton from '../../../components/addButton';
import BoxDatePicker from '../../../components/myBox';

function Vacations() {
  const [vacationNumber, setVacationNumber] = useState(1);
  const [vacationList, setVacationList] = useState<JSX.Element[]>();
  const handleAddNewVacation = () => {
    setVacationNumber(prev => prev + 1);
  };

  const handleDeleteVacation = (id: number) => {
    const newList = vacationList?.filter(item => Number(item.key) !== id);
    setVacationList(newList);
    setVacationNumber(prev => prev - 1);
  };

  const renderedVacations = Array.from(
    { length: vacationNumber },
    (_, index) => (
      <BoxDatePicker key={index} deleteVacation={handleDeleteVacation} />
    ),
  );
  useEffect(() => {
    setVacationList(renderedVacations);
  }, [vacationNumber]);
  return (
    <Stack spacing={1}>
      {vacationList ?? vacationList}

      <CustomAddButton onClick={handleAddNewVacation} left>
        اضافة اجازة
      </CustomAddButton>
    </Stack>
  );
}

export default Vacations;
