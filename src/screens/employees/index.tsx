import {
  Alert,
  Autocomplete,
  CircularProgress,
  FormLabel,
  Icon,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { CustomButton, CustomizedTextField } from '../../globalStyle';
import { useNavigate } from 'react-router-dom';
import EmployeesTable from '../../components/employees';
import useFetchEmployees from '../../hooks/use-fetch-data';
import EmployeesList from './employeesList';
import { useFetchEmployeesQuery } from '../../app/store';

const Employees = () => {
  const { data: employees, isLoading, isError } = useFetchEmployeesQuery('');
  // const { data: employees, isLoading, error } = useFetchEmployees('/users');

  const bigLabtob = useMediaQuery('(max-width:1024px)');
  const navigate = useNavigate();
  const theme = useTheme();

  let content: JSX.Element;
  if (isLoading) {
    content = <CircularProgress sx={{ mt: 12 }} />;
  } else if (isError) {
    content = (
      <Alert
        variant='outlined'
        sx={{ mt: 12, fontWeight: 600, color: '#FF0000' }}
        icon={false}
        severity='error'
      >
        يوجد خطأ ما في جلب البيانات{' '}
      </Alert>
    );
  } else {
    content = <EmployeesList employees={employees!} />;
  }

  return (
    <Stack id='mainWrapper' pr='20px' spacing={2} marginTop={1}>
      <Stack
        id='header'
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography fontWeight='bold' fontSize='0.9rem' color='#191919'>
          الموظفين
        </Typography>
        <CustomButton
          style={{
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
          }}
          onClick={() => navigate('/reservations-form')}
        >
          إضافة موظف
        </CustomButton>
      </Stack>

      <Stack
        id='main'
        direction='column'
        justifyContent='space-between'
        alignItems='center'
      >
        {content}
      </Stack>

      {/* <Stack
        borderRadius="10px"
        direction="row"
        justifyContent="space-between"
        bgcolor="#F6F6F6"
        padding="16px 24px"
        flexWrap="wrap"
        gap={1}
      >
        <Stack
          id="range date"
          spacing={1}
          //   width={bigLabtob ? "30%" : "35%"}
          minWidth="150px"
        >
          <FormLabel
            sx={{
              color: "#191919",
              fontSize: "0.7rem",
            }}
          >
            عدد الطلبات المستلمة
          </FormLabel>
          <Stack direction="row" alignItems="center">
            <CustomizedTextField
              sx={{
                width: "50px",
              }}
              value={"1"}
            />
            <IconButton>{Icons.fromToDate}</IconButton>
            <CustomizedTextField
              sx={{
                width: "50px",
              }}
              value={"5"}
            />
          </Stack>
        </Stack>
        <Stack id="status" spacing={1} minWidth="215px">
          <FormLabel
            sx={{
              color: "#191919",
              fontSize: "0.7rem",
            }}
          >
            عدد الطلبات المنجزة
          </FormLabel>
          <Stack direction="row" alignItems="center">
            <CustomizedTextField
              sx={{
                width: "80px",
              }}
              value={"00"}
            />
            <IconButton>{Icons.fromToDate}</IconButton>
            <CustomizedTextField
              sx={{
                width: "80px",
              }}
              value={"150"}
            />
          </Stack>
        </Stack>
        <Stack
          id="search"
          spacing={1}
          width={bigLabtob ? "24%" : "30%"}
          minWidth="200px"
          justifyContent="center"
        >
          <FormLabel
            sx={{
              color: "#191919",
              fontSize: "0.7rem",
            }}
          >
            أبحث عن إسم الموظف
          </FormLabel>
          <Stack spacing={1} direction="row">
            <CustomizedTextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {Icons.search}
                  </InputAdornment>
                ),
              }}
              placeholder="ابحث هنا"
            />
          </Stack>
        </Stack>
        <Stack
          id="pdf"
          spacing={1}
          width={bigLabtob ? "14%" : "17%"}
          justifyContent="center"
          mt="25px"
          minWidth="100px"
        >
          <CustomButton
            sx={{
              color: "#404040",
              bgcolor: "#FCFCFC",
              border: "1px solid #DDDDDD",
              borderRadius: "10px",
            }}
            fullWidth
            startIcon={Icons.pdfButton}
          >
            تصدير pdf
          </CustomButton>
           <CustomButton
                sx={{
                  color: "#404040",
                  bgcolor: "#FCFCFC",
                  border: "1px solid #DDDDDD",
                  borderRadius: "10px",
                }}
                fullWidth
                startIcon={Icons.pdfButton}
              >
                تصدير excel
              </CustomButton> 
        </Stack>
      </Stack>
      <Stack id="table">
        <EmployeesTable />
      </Stack> */}
    </Stack>
  );
};

export default Employees;
