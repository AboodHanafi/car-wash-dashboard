import React from 'react';
import EmployeeItem from './EmployeeItem';
import { Box } from '@mui/material';
import { EmployeesType } from '../../../utils/types';

interface Props {
  employees: EmployeesType[];
}

function EmployeesList({ employees }: Props) {
  const renderedEmployeesList = employees?.map(employee => (
    <EmployeeItem key={employee.id} employee={employee} />
  ));

  return (
    <Box
      width={'100%'}
      display={'flex'}
      flexDirection={'row'}
      flexWrap={'wrap'}
      gap={2}
      marginBottom={3}
      marginTop={2}
    >
      {renderedEmployeesList}
    </Box>
  );
}

export default EmployeesList;
