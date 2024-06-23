import moment from "moment";

export const getMonthDays = (month: number, year: number) => {
  const startOfMonth = moment([year, month]).startOf("month");
  const endOfMonth = moment(startOfMonth).endOf("month");

  const startDayOfWeek = startOfMonth.day();
  const endDayOfWeek = endOfMonth.day();

  const startCalendar = moment(startOfMonth).subtract(startDayOfWeek, "days");
  const endCalendar = moment(endOfMonth).add(6 - endDayOfWeek, "days");

  const dates = Array.from(
    { length: endCalendar.diff(startCalendar, "days") + 1 },
    (_, i) => {
      const currentDate = moment(startCalendar).add(i, "days");
      return {
        date: currentDate.format("YYYY-MM-DD"),
        dateOfWeek: currentDate.format("dddd"),
        isCurrentMonth: currentDate.month() === month,
      };
    }
  );

  return {
    month: moment().month(month).format("MM"),
    year: moment().year(year).format("YYYY"),
    dates,
  };
};
