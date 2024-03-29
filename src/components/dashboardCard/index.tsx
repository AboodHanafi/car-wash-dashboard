import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

interface cardType extends React.PropsWithChildren {
  title: string;
  color: string;
  shadow: string;
  counter: string | number;
}

const DashCard: React.FC<cardType> = ({ title, counter, color, shadow }) => {
  return (
    <Card
      sx={{
        width: '23%',
        minWidth: '180px',
        height: 100,
        borderRadius: '10px',
        background: color,
        boxShadow: shadow,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <Typography color='#fff'>{counter}</Typography>
          <Typography fontSize='1rem' color='#fff'>
            {title}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashCard;
