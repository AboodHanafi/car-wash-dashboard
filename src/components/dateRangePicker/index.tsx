import React, { memo, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { DateRange } from '../../context/context-search';

const CustomDateRangePicker = ({
  onDateRangeChange,
}: {
  onDateRangeChange?: (dates: DateRange) => void;
}) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const todayDate = new Date().toISOString().split('T')[0];
  const handleValueChange = (newValue: any) => {
    if (onDateRangeChange) onDateRangeChange(newValue as DateRange);
    setValue(newValue);
  };

  return (
    <Datepicker
      separator={'          إلى          '}
      primaryColor={'blue'}
      i18n={'ar'}
      toggleClassName='absolute bg-main rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed'
      value={value}
      onChange={handleValueChange}
      showShortcuts={true}
      configs={{
        shortcuts: {
          today: {
            text: 'اليوم',
            period: {
              start: todayDate,
              end: todayDate,
            },
          },
        },
      }}
    />
  );
};
export default CustomDateRangePicker;
