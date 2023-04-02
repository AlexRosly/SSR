import { useAuthContext } from 'context/AuthContext';
import { HeaderNobody } from '../Components/HeaderNobody';
import { SubheaderHotelier } from './SubheaderHotelier';
import scss from './SubheaderMainHotelier.module.scss';

/** Main Hotelier
 *  @see MAIN_HOTELIER '/main-hotelier'
 * 1. userType - subheader
 * 2. NO BODY  - NO BODY ✅
 * 3. User     - NO BODY ✅
 * 4. Hotelier - Hotelier ✅
 * 5. Agent    - NO BODY ✅
 */
export const SubheaderMainHotelier = () => {
  const [{ isHotelier }] = useAuthContext();

  return (
    <div className={scss.subheaderMainHotelier}>
      {!isHotelier && <HeaderNobody />}
      {isHotelier && <SubheaderHotelier />}
    </div>
  );
};
