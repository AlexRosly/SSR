import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import next from './image/Vector next.svg';
import prew from './image/Vector back.svg';
import './Calendar.scss';

export const CalendarOnMonth = ({
  setAllActiveDay,
  allActiveDay,
  showNotOurService,
  calendarValue,
  setOnChange,
  notOurService,
  setNotOurService,
}) => {
  const [isOurService] = useState([new Date('September 29, 2022'), new Date('September 26, 2022')]);
  const [isAlreadyBooking] = useState([new Date('September 14, 2022')]);
  const minDate = new Date();

  useEffect(() => {
    if (calendarValue && !showNotOurService) {
      setAllActiveDay(prevState => {
        const addDay = prevState.findIndex(activeDay => activeDay.getDate() === calendarValue.getDate());
        if (Number(addDay) !== -1) {
          const newActivesDay = [...prevState].filter((el, index) => index !== addDay);
          return newActivesDay;
        }
        return [...prevState, calendarValue];
      });
    }
    if (calendarValue && showNotOurService) {
      setNotOurService(prevState => {
        const addDay = prevState.findIndex(activeDay => activeDay.getDate() === calendarValue.getDate());
        if (Number(addDay) !== -1) {
          const newActivesDay = [...prevState].filter((el, index) => index !== addDay);
          return newActivesDay;
        }
        return [...prevState, calendarValue];
      });
    }
  }, [calendarValue, setAllActiveDay, setNotOurService, showNotOurService]);

  function tileClassName({ date, view }) {
    const result =
      calendarClassName(date, view, notOurService, 'notOurService') ||
      calendarClassName(date, view, allActiveDay, 'myClassName') ||
      calendarClassName(date, view, isOurService, 'isOurService') ||
      calendarClassName(date, view, isAlreadyBooking, 'isAlreadyBooking');
    return result;
  }

  function calendarClassName(date, view, arr, className) {
    if (view === 'month' && arr.length !== 0) {
      const finds = arr.find(activeDay => activeDay.getTime() === date.getTime());

      if (finds) {
        return className;
      }
    }
  }

  return (
    <Calendar
      onChange={setOnChange}
      value={calendarValue}
      minDetail="month"
      tileClassName={tileClassName}
      defaultView="month"
      prev2Label={null}
      next2Label={null}
      minDate={minDate}
      showNeighboringMonth={false}
      nextLabel={<img src={next} alt="arrow right" />}
      prevLabel={<img src={prew} alt="arrow left" />}
    />
  );
};
