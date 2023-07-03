export function getPropName(text: string) {
  let split = text.split('.');
  let propName = split[split.length - 1];
  return propName;
}

export function isValidDate(date: string) {
  const parsedDate = new Date(date);

  if (Object.prototype.toString.call(parsedDate) === '[object Date]') {
    if (!isNaN(parsedDate.getTime())) {
      return true;
    }
  }

  return false;
}
interface DateRange {
  startDate: string;
  endDate: string;
}

export function areValidDates(dateRange: DateRange): boolean {
  const { startDate, endDate } = dateRange;

  function isValidDate(date: string): boolean {
    const dateRegex = /^(\d{2})[-/](\d{2})[-/](\d{4})$/;
    if (!date.match(dateRegex)) {
      return false;
    }
    const [_, day, month, year] = date.match(dateRegex) as string[];
    const parsedDate = new Date(`${year}-${month}-${day}`);
    if (Object.prototype.toString.call(parsedDate) === '[object Date]') {
      if (!isNaN(parsedDate.getTime())) {
        return true;
      }
    }
    return false;
  }

  if (isValidDate(startDate) && isValidDate(endDate)) {
    return true;
  }

  return false;
}
