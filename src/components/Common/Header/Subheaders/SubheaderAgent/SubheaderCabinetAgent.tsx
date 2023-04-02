import { SubheaderAgent } from './SubheaderAgent';

import scss from './SubheaderCabinetAgent.module.scss';

/** CabinetAgent
 *  @see CABINET_AGENT /cabinet-agent
 * 1. userType - subheader
 * 2. NO BODY  - Log in page ✅
 * 3. User     - # ✅
 * 4. Hotelier - # ✅
 * 5. Agent    - Agent ✅
 */
export const SubheaderCabinetAgent = () => {
  return (
    <div className={scss.subheaderCabinetAgent}>
      <SubheaderAgent />
    </div>
  );
};
