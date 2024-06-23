interface DateInfo {
  date: string; // e.g., "2024-05-26"
  dateOfWeek: string; // e.g., "Sunday"
  isCurrentMonth: boolean; // e.g., false
}

interface MonthData {
  month: string; // e.g., "06"
  year: string; // e.g., "2024"
  dates: DateInfo[];
}

interface MonthComponentProps {
  monthDays: MonthData;
  toolbar: boolean;
  setCurrentDate: (args: any) => void;
}
