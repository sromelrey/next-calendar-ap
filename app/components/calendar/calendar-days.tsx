import "@/app/styles/calendar.scss";

export default function CalendarDays({ weeks }: { weeks: any[] }) {
  return (
    <div className='calendar'>
      <table>
        {weeks.map((week, weekIndex) => (
          <tr key={weekIndex}>
            {week.map((weekDay: any, dayIndex: any) => (
              <td key={dayIndex}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {weekDay.date.split("-")[2]}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
