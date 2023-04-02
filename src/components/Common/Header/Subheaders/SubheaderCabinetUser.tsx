import { SubheaderUser } from './SubheaderUser';
import scss from './SubheaderCabinetUser.module.scss';

/** CabinetUser
 *  @see CABINET_USER '/cabinet-user'
 * 1. userType - subheader
 * 2. NO BODY  - Log in page ✅
 * 3. User     - User ✅
 * 4. Hotelier - # ✅
 * 5. Agent    - # ✅
 */
export const SubheaderCabinetUser = () => {
  return (
    <div className={scss.subheaderCabinetUser}>
      <SubheaderUser />
    </div>
  );
};
