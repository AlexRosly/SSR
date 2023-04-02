import { isProd } from 'config';
import { useAuthContext } from 'context/AuthContext';
import { LoginOrRegisterBtn } from '../LoginOrRegisterBtn';
import { UserTypePicker } from '../Pickers';
import scss from './DrawerFooter.module.scss';

export const DrawerFooter = () => {
  const [{ isNobody }] = useAuthContext();

  return (
    <div className={scss.drawerFooter}>
      {isNobody && <LoginOrRegisterBtn />}

      {!isProd && (
        <div className={scss.pickerAbsolute}>
          <UserTypePicker />
        </div>
      )}
    </div>
  );
};
