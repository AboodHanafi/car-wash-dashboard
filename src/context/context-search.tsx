import React, { createContext, useState } from 'react';

export type DateRange = { startDate: string; endDate: string };

interface SearchTerms {
  clientBikerTerm: string;
  reservationStatus: number;
  dateRange: DateRange;
  handleClientBikerTerm: (term: string) => void;
  handleReservationStatus: (status: number) => void;
  handleDateRange: (dates: DateRange) => void;
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
    setDateRange({ endDate: '', startDate: '' });
    setClientBikerTerm(term);
  };

  const handleReservationStatus = (status: number) => {
    setDateRange({ endDate: '', startDate: '' });
    setReservationStatus(status);
  };

  const handleDateRange = (dates: DateRange) => {
    setDateRange(dates);
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
