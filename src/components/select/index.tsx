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
  label?: string;
}
const Select = ({ options, label }: Props) => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const renderedOptions = options.map((option, index) => (
    <MenuItem key={index} value={option}>
      {option}
    </MenuItem>
  ));
  return (
    <FormControl fullWidth>
      {label && <InputLabel id='demo-simple-select-label'>{label}</InputLabel>}
      <MUISelect
        id='demo-simple-select'
        value={age}
        displayEmpty
        labelId='demo-simple-select-label'
        label={label}
        onChange={handleChange}
      >
        {!label && (
          <MenuItem disabled value={''}>
            <em style={{ color: '#ccc' }}>حدد الساعة ...</em>
          </MenuItem>
        )}
        {renderedOptions}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
