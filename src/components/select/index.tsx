import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Select as MUISelect,
  MenuItem,
} from '@mui/material';

interface Props {
  options: string[];
  label: string;
}
const Select = ({ options, label }: Props) => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const renderedOptions = options.map(option => (
    <MenuItem value={option}>{option}</MenuItem>
  ));
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
      <MUISelect
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={age}
        label={label}
        onChange={handleChange}
      >
        {renderedOptions}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
