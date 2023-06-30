import React, { createContext, useState } from 'react';
// import BoxDatePicker from '../components/boxDatePicker';
// import WorkingPeriod from '../components/workingPeriod';

// interface Employee {
//   vacationList: JSX.Element[];
//   addVacation: () => void;
//   deleteVacation: (id: number) => void;
//   workingTimesList: JSX.Element[];
//   addWorkingTime: () => void;
//   deleteWorkingTime: (id: number) => void;
// }
// export const ContextEmployee = createContext<Employee>({} as Employee);

// export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
//   const randNumber = Math.random();

//   const [vacationList, setVacationList] = useState<JSX.Element[]>([
//     // <BoxDatePicker key={randNumber} id={randNumber} />,
//   ]);
//   const [workingTimesList, setWorkingTimesList] = useState<JSX.Element[]>([
//     <WorkingPeriod key={randNumber} id={randNumber} />,
//   ]);

//   // Vacation operations
//   const addVacation = () => {
//     const randNumber = Math.random();
//     setVacationList(prev => [
//       ...prev,
//       // <BoxDatePicker key={randNumber} id={randNumber} />,
//     ]);
//   };

//   const deleteVacation = (id: number) => {
//     const newList = vacationList?.filter(item => Number(item.key) !== id);
//     setVacationList(newList);
//   };

//   // WorkingTime operations
//   const addWorkingTime = () => {
//     const randNumber = Math.random();
//     setWorkingTimesList(prev => [
//       ...prev,
//       <WorkingPeriod key={randNumber} id={randNumber} />,
//     ]);
//   };
//   const deleteWorkingTime = (id: number) => {
//     const newList = workingTimesList?.filter(item => Number(item.key) !== id);
//     setWorkingTimesList(newList);
//   };

//   const contextOperations = {
//     vacationList,
//     addVacation,
//     deleteVacation,
//     workingTimesList,
//     deleteWorkingTime,
//     addWorkingTime,
//   };

//   return (
//     <ContextEmployee.Provider value={contextOperations}>
//       {children}
//     </ContextEmployee.Provider>
//   );
// };

// export default ContextEmployee;
