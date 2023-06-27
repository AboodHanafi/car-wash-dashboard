import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// import Paper from '@mui/material/Paper';

export const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
