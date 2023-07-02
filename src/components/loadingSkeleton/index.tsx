import { Box, Skeleton } from '@mui/material';

const LoadingSkeleton = ({ count = 7 }: { count?: number }) => (
  <Box
    sx={{
      height: 'max-content',
    }}
  >
    {[...Array(count)].map((_, index) => (
      <Skeleton key={index} variant='rectangular' sx={{ my: 4, mx: 1 }} />
    ))}
  </Box>
);

export default LoadingSkeleton;
