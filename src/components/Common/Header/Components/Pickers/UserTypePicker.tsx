import type { ChangeEvent } from 'react';

import { useState, useCallback } from 'react';
import { useAuthContext } from 'context/AuthContext';
import {
  allowedUserTypesArr,
  logIn,
  logOut,
  TEST_AGENT,
  TEST_HOTELIER,
  TEST_USER,
} from 'context/AuthContext/authReducer';
import scss from './UserTypePicker.module.scss';

export const UserTypePicker = ({ isAbsolute = false }: { isAbsolute?: boolean }) => {
  const [{ user }, dispatch] = useAuthContext();
  const [allowedTypes] = useState(allowedUserTypesArr);

  const loginAsTEST = useCallback(
    ({ currentTarget: { selectedIndex, value } }: ChangeEvent<HTMLSelectElement>) => {
      if (value === 'logOut') {
        dispatch(logOut());
        return;
      }

      const userType = allowedTypes[selectedIndex - 1];

      switch (userType) {
        case 'hotelier':
          dispatch(logIn(TEST_HOTELIER));
          return;

        case 'agent':
          dispatch(logIn(TEST_AGENT));
          return;

        case 'user':
          dispatch(logIn(TEST_USER));
          return;

        default:
          break;
      }
    },
    [allowedTypes, dispatch]
  );

  return (
    <select
      className={isAbsolute ? scss.selectUserTypeAbsolute : scss.selectUserType}
      name="userType"
      onChange={loginAsTEST}
      value={user?.userType ?? 'nobody'}
      title="Select user type"
    >
      <option className={scss.option} value="nobody" disabled hidden>
        Select user type
      </option>

      {allowedTypes.map(val => (
        <option key={val} value={val}>
          {`Log in: ${val}`}
        </option>
      ))}

      <option value="logOut">Log out</option>
    </select>
  );
};
