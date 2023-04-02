import { useState } from 'react';
import { useAuthContext } from 'context/AuthContext';

import scss from './PersonInfo.module.scss';

export const PersonInfo = () => {
  const [userKarma] = useState(3);
  const [{ user }] = useAuthContext();
  if (!user) return null;

  const { name, surname } = user;

  const fullName = `${name} ${surname}`;

  return (
    <div className={scss.personWrapper}>
      <span className={scss.userName}>{fullName}</span>

      <p>
        <span className={scss.karmaNumber}>{`${userKarma}`} </span>
        <span className={scss.bookingKarma}>Booking Karma</span>
      </p>
    </div>
  );
};
