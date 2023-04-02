import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

import './CalendarDouble.scss';
import { useSelector } from 'react-redux';
import next from './image/Vector next.svg';
import prew from './image/Vector back.svg';
import { selectActiveLang } from 'features/common';

export const CalendarDouble = ({ setOnChange }) => {
  const [calendarValue, onChange] = useState();
  useEffect(() => {
    setOnChange(calendarValue);
  }, [calendarValue, setOnChange]);
  const today = new Date();
  const [activeStartDate, setActiveDay] = useState(today);

  const activeLanguageCode = useSelector(selectActiveLang);
  const minDate = new Date();

  const date = new Date();
  const maxDate = new Date(date.setFullYear(date.getFullYear() + 1));

  const onActiveStartDateChange = e => {
    setActiveDay(e.activeStartDate);
    // eslint-disable-next-line eqeqeq
    if (e.action == 'next') {
      setActiveDay(e.activeStartDate);
    }
    // eslint-disable-next-line eqeqeq
    if (e.action == 'onChange') {
      setActiveDay(activeStartDate);
    }
  };

  return (
    <>
      <Calendar
        onChange={onChange}
        value={calendarValue}
        showDoubleView={true}
        selectRange={true}
        activeStartDate={activeStartDate}
        onActiveStartDateChange={onActiveStartDateChange}
        locale={activeLanguageCode}
        minDetail="month"
        defaultView="month"
        prev2Label={null}
        next2Label={null}
        maxDate={maxDate}
        minDate={minDate}
        showFixedNumberOfWeeks={false}
        showNeighboringMonth={false}
        nextLabel={<img src={next} alt="img-next" />}
        prevLabel={<img src={prew} alt="img-prev" />}
      />
    </>
  );
};
