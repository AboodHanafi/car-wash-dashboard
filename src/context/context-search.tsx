import React, { createContext, useState } from 'react';

type DateRange = { startDate: string; endDate: string };

interface SearchTerms {
  clientBikerTerm: string;
  reservationStatus: number;
  dateRange: DateRange;
  handleClientBikerTerm: (term: string) => void;
  handleReservationStatus: (status: number) => void;
  handleDateRange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}
export const ContextSearch = createContext<SearchTerms>({} as SearchTerms);

export const ProviderSearch: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [clientBikerTerm, setClientBikerTerm] = useState('');
  const [reservationStatus, setReservationStatus] = useState(-1);
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: '',
    endDate: '',
  });

  const handleClientBikerTerm = (term: string) => {
    setClientBikerTerm(term);
  };
  const handleReservationStatus = (status: number) => {
    setReservationStatus(status);
  };
  const handleDateRange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDateRange(prev => ({ ...prev, [name]: value }));
  };
  const contextOperations = {
    clientBikerTerm,
    handleClientBikerTerm,
    reservationStatus,
    handleDateRange,
    handleReservationStatus,
    dateRange,
  };

  return (
    <ContextSearch.Provider value={contextOperations}>
      {children}
    </ContextSearch.Provider>
  );
};

export default ContextSearch;
