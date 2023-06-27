import React, { memo, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

const CustomDateRangePicker = memo(function CustomDateRangePicker() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const todayDate = new Date().toISOString().split('T')[0];
  const handleValueChange = (newValue: any) => {
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
});
export default CustomDateRangePicker;
