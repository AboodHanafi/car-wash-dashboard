import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { Item } from '../gridItem';
import { WorkDays } from '../../utils/types';

interface Props {
  onWorkDaysChange: (day: string) => void;
  workDays: WorkDays[];
}
function Weekdays({ onWorkDaysChange, workDays }: Props) {
  const renderedDays = workDays.map(curDay => (
    <Grid item xs style={{ paddingTop: 0, marginRight: '1.5rem' }}>
      <Item style={{ padding: 0 }}>
        <FormControlLabel
          checked={curDay.isworking}
          control={<Checkbox onChange={() => onWorkDaysChange(curDay.day)} />}
          label={curDay.day}
        />
      </Item>
    </Grid>
  ));
  return (
    <Grid container spacing={1} style={{ marginTop: 0 }}>
      {renderedDays}
    </Grid>
  );
}

export default Weekdays;
