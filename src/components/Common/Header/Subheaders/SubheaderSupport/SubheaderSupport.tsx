import { useAuthContext } from 'context/AuthContext';
import { HeaderNobody } from '../../Components/HeaderNobody';
import { SubheaderAgent } from '../SubheaderAgent';
import { SubheaderHotelier } from '../SubheaderHotelier';
import { SubheaderUser } from '../SubheaderUser';

import scss from './SubheaderSupport.module.scss';

/** Support
 *  @see SUPPORT '/support'
 * 1. userType - subheader
 * 2. NO BODY  - NO BODY ✅
 * 3. User     - User ✅
 * 4. Hotelier - Hotelier ✅
 * 5. Agent    - Agent ✅
 */
export const SubheaderSupport = () => {
  const [{ isNobody, isHotelier, isAgent, isUser }] = useAuthContext();

  return (
    <div className={scss.subheaderSupport}>
      {/* TODO: check correct header from figma  */}

      {isNobody && <HeaderNobody />}
      {isHotelier && <SubheaderHotelier />}
      {isAgent && <SubheaderAgent />}
      {isUser && <SubheaderUser />}
    </div>
  );
};
