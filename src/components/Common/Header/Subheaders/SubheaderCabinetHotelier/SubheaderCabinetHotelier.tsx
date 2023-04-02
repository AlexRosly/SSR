import { SubheaderHotelier } from '../SubheaderHotelier';

import scss from './SubheaderCabinetHotelier.module.scss';

/** CabinetHotelier
 *  @see CABINET_HOTELIER /cabinet-hotelier
 * 1. userType - subheader
 * 2. NO BODY  - Log in page ✅
 * 3. User     - # ✅
 * 4. Hotelier - Hotelier ✅
 * 5. Agent    - # ✅
 */
export const SubheaderCabinetHotelier = () => {
  return (
    <div className={scss.subheaderCabinetHotelier}>
      <SubheaderHotelier />
    </div>
  );
};
