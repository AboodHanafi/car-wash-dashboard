import React, { PropsWithChildren, createContext, useState } from 'react';
import BoxDatePicker from '../components/boxDatePicker';

interface Vacation {
  vacationList: JSX.Element[];
  addVacation: () => void;
  deleteVacation: (key: number) => void;
}
export const ContextVacation = createContext<Vacation>({} as Vacation);

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [vacationList, setVacationList] = useState<JSX.Element[]>([]);

  const addVacation = () => {
    const randNumber = Math.random();
    setVacationList(prev => [
      ...prev,
      <BoxDatePicker key={randNumber} id={randNumber} />,
    ]);
  };
  const deleteVacation = (id: number) => {
    const newList = vacationList?.filter(item => Number(item.key) !== id);
    setVacationList(newList);
  };
  const contextOperations = { vacationList, addVacation, deleteVacation };

  return (
    <ContextVacation.Provider value={contextOperations}>
      {children}
    </ContextVacation.Provider>
  );
};

export default ContextVacation;
