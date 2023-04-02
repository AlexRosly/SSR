import { useAuthContext } from 'context/AuthContext';
import { SubheaderUser } from '../SubheaderUser';
import { HeaderNobody } from '../../Components/HeaderNobody';
import { SubheaderHotelier } from '../SubheaderHotelier';

import scss from './SubheaderMain.module.scss';

/** Main
 *  @see MAIN '/main'
 * 1. userType - subheader
 * 2. NO BODY  - NO BODY ✅
 * 3. User     - User ✅
 * 4. Hotelier - Hotelier ✅
 * 5. Agent    - NO BODY ✅
 */
export const SubheaderMain = () => {
  const [{ isUser, isNobody, isAgent, isHotelier }] = useAuthContext();

  const showNobodyHeader = isNobody || isAgent;

  return (
    <div className={scss.subheaderMain}>
      {isHotelier && <SubheaderHotelier />}
      {isUser && <SubheaderUser />}
      {showNobodyHeader && <HeaderNobody />}
    </div>
  );
};
