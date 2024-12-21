import "@/app/styles/calendar.scss";
import { useState } from "react";

export default function CalendarDays({ weeks }: { weeks: any[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<{
    week: number;
    day: number;
  } | null>(null);

  return (
    <div className='calendar'>
      <table>
        <tbody>
          {weeks.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((weekDay: any, dayIndex: any) => (
                <td
                  key={dayIndex}
                  className={`wrapper ${
                    hoveredIndex &&
                    (hoveredIndex.week !== weekIndex ||
                      hoveredIndex.day !== dayIndex)
                      ? "blur"
                      : ""
                  }`}
                  onMouseEnter={() =>
                    setHoveredIndex({ week: weekIndex, day: dayIndex })
                  }
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className='card'>{weekDay.date.split("-")[2]}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
