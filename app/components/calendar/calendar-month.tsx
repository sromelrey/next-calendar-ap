"use client";
import { useMemo, useCallback, memo } from "react";
import CalendarDays from "./calendar-days";
import CalendarToolbar from "./calendar-toolbar";

export const CalendarMonth: React.FC<MonthComponentProps> = ({
  monthDays,
  setCurrentDate,
  toolbar = false,
}: {
  toolbar: boolean;
  setCurrentDate: (args: any) => any;
  monthDays: MonthData;
}) => {
  const currentMonth = useMemo(
    () => Number(monthDays.month) - 1,
    [monthDays.month]
  );
  const currentYear = useMemo(() => Number(monthDays.year), [monthDays.year]);

  const weeks = useMemo(() => {
    const tempWeeks = [];
    for (let i = 0; i < monthDays.dates.length; i += 7) {
      tempWeeks.push(monthDays.dates.slice(i, i + 7));
    }
    return tempWeeks;
  }, [monthDays.dates]);

  const goToBack = useCallback(() => {
    if (currentMonth >= 1) {
      setCurrentDate({
        ...monthDays,
        month: (currentMonth - 1).toString(),
      });
    } else {
      setCurrentDate({
        ...monthDays,
        year: (currentYear - 1).toString(),
        month: "11",
      });
    }
  }, [currentMonth, currentYear, monthDays, setCurrentDate]);

  const goToNext = useCallback(() => {
    if (currentMonth <= 10) {
      setCurrentDate({
        ...monthDays,
        month: (currentMonth + 1).toString(),
      });
    } else {
      setCurrentDate({
        ...monthDays,
        year: (currentYear + 1).toString(),
        month: "0",
      });
    }
  }, [currentMonth, currentYear, monthDays, setCurrentDate]);

  return (
    <>
      {toolbar && (
        <CalendarToolbar
          goToBack={goToBack}
          goToNext={goToNext}
          label={`${monthDays.year} - ${monthDays.month}`}
        />
      )}
      <CalendarDays weeks={weeks} />
      <div>Calendar</div>
    </>
  );
};

export default memo(CalendarMonth);
