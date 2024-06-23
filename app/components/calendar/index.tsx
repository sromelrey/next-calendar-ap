"use client";
import React, { useMemo, useState, memo, useCallback } from "react";
import { CalendarMonth } from "./calendar-month";
import CalendarWeekView from "./calendar-week";
import CalendarResource from "./calendar-resource";
import { getMonthDays } from "@/app/utils/dateUtils";
import moment from "moment";
import "@/app/styles/calendar.scss";

const now = new Date();

const Calendar: React.FC<{ type: string }> = ({ type }) => {
  const [currentDate, setCurrentDate] = useState({
    day: moment(now).day(),
    month: moment(now).month(),
    year: moment(now).year(),
  });

  const monthDays: MonthData = useMemo(() => {
    // Generate calendar data memoized based on year and month
    return getMonthDays(currentDate.month, currentDate.year);
  }, [currentDate]);

  const handleSetCurrentDate = useCallback((newDate: any) => {
    setCurrentDate((prevDate) => ({
      ...prevDate,
      ...newDate,
    }));
  }, []);

  return (
    <div className='calendar'>
      {type === "calendar-month" && (
        <CalendarMonth
          toolbar={true}
          monthDays={monthDays}
          setCurrentDate={handleSetCurrentDate}
        />
      )}
      {type === "calendar-week" && <CalendarWeekView />}
      {type === "calendar-resource" && <CalendarResource />}
    </div>
  );
};

export default memo(Calendar);
