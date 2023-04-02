import { useState } from 'react';
import { Description } from 'components/UserCabinet/Description/';

import Calendar from 'components/MainPage/Calendar/Calendar';
import UsersCard from 'components/UserCabinet/UsersCard/UsersCard';
import s from './BookingMainPage.module.scss';

interface Props {
  fetchProposes: () => void;
}

export const BookingMainPage = ({ fetchProposes }: Props) => {
  const [openSelector, setSelector] = useState(false);

  return (
    <>
      <Calendar suggest={openSelector} setSuggest={setSelector} onSubmit={fetchProposes} />
      <div>
        <div className={s.section}>
          <Description openSelector={() => setSelector(true)} />
          <UsersCard />
        </div>
        {/* //test button */}
        {/* <button className="btn__fetch" onClick={fetchProposes}>
          Get Cards
        </button> */}
        {/* //test button */}
      </div>
    </>
  );
};
