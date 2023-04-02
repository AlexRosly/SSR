import { ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { isProd } from 'config';

import { Header } from 'components/Common/Header';
import {
  SubheaderMainHotelier,
  SubheaderMainAgent,
  SubheaderMain,
  SubheaderCabinetUser,
  SubheaderCabinetAgent,
  SubheaderCabinetHotelier,
  SubheaderUserCatalog,
  SubheaderHotelierCatalog,
  SubheaderSupport,
  SubheaderParlour,
} from 'components/Common/Header/Subheaders';
import { Nav } from 'pages/Home/components/NavLinks';

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header>
      {!isProd && <Nav />}
      {children}
    </Header>

    <Suspense fallback="">
      {/*  */}
      <Outlet />
    </Suspense>
  </>
);

/** Home
 * @see ROOT '/'
 */
export const LayoutParlour = () => (
  <Layout>
    <SubheaderParlour />
  </Layout>
);

/** MainHotelier
 *  @see MAIN_HOTELIER '/main-hotelier'
 * 1. userType - subheader
 * 2. NO BODY  - NO BODY ✅
 * 3. User     - NO BODY ✅
 * 4. Hotelier - Hotelier ✅
 * 5. Agent    - NO BODY ✅
 */
export const LayoutMainHotelier = () => (
  <Layout>
    <SubheaderMainHotelier />
  </Layout>
);

/** MainAgents
 * @see MAIN_AGENT '/main-agent'
 * 1. userType - subheader
 * 2. NO BODY  - NO BODY ✅
 * 3. User     - NO BODY ✅
 * 4. Hotelier - NO BODY ✅
 * 5. Agent    - Agent ✅
 */
export const LayoutMainAgent = () => (
  <Layout>
    <SubheaderMainAgent />
  </Layout>
);

/** Main
 *  @see MAIN '/main'
 * 1. userType - subheader
 * 2. NO BODY  - NO BODY ✅
 * 3. User     - User ✅
 * 4. Hotelier - Hotelier ✅
 * 5. Agent    - NO BODY ✅
 */
export const LayoutMain = () => (
  <Layout>
    <SubheaderMain />
  </Layout>
);

/** CabinetUser
 *  @see CABINET_USER '/cabinet-user'
 * 1. userType - subheader
 * 2. NO BODY  - Log in page ✅
 * 3. User     - User ✅
 * 4. Hotelier - # ✅
 * 5. Agent    - # ✅
 */
export const LayoutCabinetUser = () => (
  <Layout>
    <SubheaderCabinetUser />
  </Layout>
);

/** CabinetAgent
 *  @see CABINET_AGENT '/cabinet-agent'
 * 1. userType - subheader
 * 2. NO BODY  - Log in page ✅
 * 3. User     - # ✅
 * 4. Hotelier - # ✅
 * 5. Agent    - Agent ✅
 */
export const LayoutCabinetAgent = () => (
  <Layout>
    <SubheaderCabinetAgent />
  </Layout>
);

/** CabinetHotelier
 *  @see CABINET_HOTELIER '/cabinet-hotelier'
 * 1. userType - subheader
 * 2. NO BODY  - Log in page ✅
 * 3. User     - # ✅
 * 4. Hotelier - Hotelier ✅
 * 5. Agent    - # ✅
 */
export const LayoutCabinetHotelier = () => (
  <Layout>
    <SubheaderCabinetHotelier />
  </Layout>
);

/** HotelierCatalog
 *  @see HOTELIER_CATALOG '/hotelier-catalog'
 * 1. userType - subheader
 * 2. NO BODY  - Hot Catalog ✅
 * 3. User     - Hot Catalog ✅
 * 4. Hotelier - Hot Catalog ✅
 * 5. Agent    - Hot Catalog ✅
 */
export const LayoutHotelierCatalog = () => (
  <Layout>
    <SubheaderHotelierCatalog />
  </Layout>
);

/** UserCatalog
 *  @see USER_CATALOG '/user-catalog'
 * 1. userType - subheader
 * 2. NO BODY  - Us Catalog 🔳
 * 3. User     - Us Catalog 🔳
 * 4. Hotelier - Us Catalog 🔳
 * 5. Agent    - Us Catalog 🔳
 */
export const LayoutUserCatalog = () => (
  <Layout>
    <SubheaderUserCatalog />
  </Layout>
);

/** Support
 *  @see SUPPORT '/support'
 *  @see TERMS_CONDITIONS_USERS '/terms-conditions-users'
 *  @see OUR_MISSION '/our-mission'
 * 1. userType - subheader
 * 2. NO BODY  - NO BODY ✅
 * 3. User     - User ✅
 * 4. Hotelier - Hotelier ✅
 * 5. Agent    - Agent ✅
 */
export const LayoutSupport = () => (
  <Layout>
    <SubheaderSupport />
  </Layout>
);

/*
  if (pathname === ROOT) return <SubheaderParlour />; LayoutParlour

  if (urlsForSubheaderLocation.has(pathname)) return <SubheaderLocation />; LayoutLocation
  if (urlsForSubheaderLocationHotelier.has(pathname)) return <SubheaderLocationHotelier />; LayoutLocationHotelier
  if (urlsForSubheaderHotelierCatalog.has(pathname)) return <SubheaderHotelierCatalog />; LayoutHotelierCatalog
*/
