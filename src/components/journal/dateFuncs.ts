import { addDays, startOfYear } from "date-fns";

export function convertDateStrToNormalDate(dateStr: string): string {
  const year = dateStr.substring(0, 4);
  const month = dateStr.substring(4, 6);
  const day = dateStr.substring(6, 8);

  const months = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun',
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
  ];

  const monthIndex = parseInt(month) - 1;
  const monthName = months[monthIndex];
  
  return `${monthName} ${parseInt(day)} ${year}`;
}

export function convertDateStrToDateObj(dateStr: string): Date {
  const year = parseInt(dateStr.substring(0, 4));
  const month = parseInt(dateStr.substring(4, 6)) - 1; // Month is zero-indexed in JavaScript
  const day = parseInt(dateStr.substring(6, 8));
  return new Date(year, month, day)
}

export function convertDateObjToDateStr(date: Date): string {
  return `${date.getFullYear()}` +
  `${date.getMonth() + 1}`.padStart(2, "0") +
  `${date.getDate()}`.padStart(2, "0");
}


export function convertIndexToDateStr(year: number, month: number, index: number): string {
  if (month != -1){
    return `${year}${`${Number(month)+1}`.padStart(2, "0")}${`${index+1}`.padStart(2, "0")}`;
  }

  // Returning based on full year.
  const startOfGivenYear: Date = startOfYear(new Date(year, 0, 1)); // Jan 1 of the specified year
  const resultDate: Date = addDays(startOfGivenYear, index); // Subtract 1 as index starts from 1

  return convertDateObjToDateStr(resultDate);
}

export function convertIndexToDateObj(year: number, month: number, index: number): Date {
  return convertDateStrToDateObj(convertIndexToDateStr(year, month, index));
}
