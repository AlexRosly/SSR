import { useAuthContext } from 'context/AuthContext';
import { HeaderNobody } from '../Components/HeaderNobody';
import { SubheaderAgent } from './SubheaderAgent';

import scss from './SubheaderMainAgent.module.scss';

/** Main Agent
 * @see MAIN_AGENT '/main-agent'
 * 1. userType - subheader
 * 2. NO BODY  - NO BODY ✅
 * 3. User     - NO BODY ✅
 * 4. Hotelier - NO BODY ✅
 * 5. Agent    - Agent ✅
 */
export const SubheaderMainAgent = () => {
  const [{ isAgent }] = useAuthContext();

  return (
    <div className={scss.mainAgentHeader}>
      {!isAgent && <HeaderNobody />}
      {isAgent && <SubheaderAgent />}
    </div>
  );
};
