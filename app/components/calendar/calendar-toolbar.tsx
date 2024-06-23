import React, { memo } from "react";

export default memo(function CalendarToolBar({
  goToBack,
  goToNext,
  label,
}: {
  goToBack: () => any;
  goToNext: () => any;
  label: string;
}) {
  return (
    <div className='flex flex-row justify-center text-center gap-6 content-center'>
      <button
        onClick={goToBack}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Go Back
      </button>
      <label>{label}</label>
      <button
        onClick={goToNext}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Go Next
      </button>
    </div>
  );
});
