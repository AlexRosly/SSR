import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { isProd } from 'config';
import {
  ROOT,
  PAGE1,
  AUTH_PAGE1,
  MAIN_AGENT,
  LOGIN_HOTELIER,
  LOGIN_AGENT,
  LOGIN_USER,
  REGISTER_HOTELIER,
  REGISTER_AGENT,
  REGISTER_USER,
  CABINET_USER,
  PREVIEW,
  HOTELIER_ACCOUNT_SETTINGS,
  HOTELIER_FINANCES,
  HOTELIER_FEEDBACK,
  HOTELIER_SMS_SETTINGS,
  HOTELIER_SALES_HISTORY,
  CABINET_AGENT,
  CABINET_HOTELIER,
  SEARCH_LOCATION,
  USER_ACCOUNT_SETTING,
  USER_SMS_SETTINGS,
  USER_BOOKING_KARMA,
  USER_BOOKING_HISTORY,
  MAIN,
  NAVBAR_SIDE_MENU,
  SUPPORT,
  PRIVACY_POLICY_AGENTS,
  PRIVACY_POLICY_HOTELIERS,
  PRIVACY_POLICY_USERS,
  TERMS_CONDITIONS_AGENTS,
  TERMS_CONDITIONS_HOTELIERS,
  TERMS_CONDITIONS_USERS,
  HOUSE_PAGE,
  SEARCH_MAIN,
  OUR_MISSION,
  BOOKING_FEEDBACK,
  hotelierCatalogPaths,
  userCatalogPaths,
} from 'navigation/CONSTANTS';



// Headers - standard JSX
import { App } from 'App';
import {
  LayoutParlour,
  LayoutMainHotelier,
  LayoutMainAgent,
  LayoutMain,
  LayoutCabinetUser,
  LayoutCabinetAgent,
  LayoutHotelierCatalog,
  LayoutUserCatalog,
  LayoutSupport,
  LayoutCabinetHotelier,
} from 'navigation/Layout';

// Pages - code splitting with React.lazy - inside index files
import { Home } from 'pages/Home';
import {
  LoginUser,
  RegisterUser,
  LoginHotelier,
  RegisterHotelier,
  LoginAgent,
  RegisterAgent,
} from 'components/LoginSingUp';

import { MainHotelier } from 'pages/MainHotelier';
import { MainAgent } from 'pages/Agents';
import { CabinetUser } from 'pages/Cabinet';
import { CabinetHotelier } from 'pages/CabinetHotelier';
import { SearchLocation, SearchMain } from 'pages/SearchLocation';
import { HotelierCatalog } from 'pages/HotelierCatalog'; // TODO update redux
import {
  AccountSetting,
  FeedbackReviews,
  Finances,
  HistorySales,
  SmsSettings,
  UserAccountSetting,
  UserBookingHistory,
  UserBookingKarma,
  UserSmsSettings,
} from 'components/SideMenu/pages';

import { PrivateRoute, PrivateRouteAgent, PrivateRouteHotelier, PrivateRouteUser } from 'navigation/Auth';
import { UserCatalog } from 'components/Location';
import { CabinetAgent } from 'pages/CabinetAgent';
import { Main } from 'pages/Main';
import { Support } from 'pages/Support';
import { PolicyAgents, PolicyHoteliers, PolicyUsers, TermsAgents, TermsHoteliers, TermsUsers } from 'pages/Therms';
import { OurMission } from 'pages/OurMission';
import { NotFound } from 'navigation';

import { NavbarSideMenu } from 'components/SideMenu';
import { HousePage } from 'pages/HousePage';
import { SendFeedback } from 'components/BookingFeedBack';
import { Seo } from 'components/Common/Seo';
import { FOR_HOTELIER_SEO } from 'components/Common/Seo/seoData';

// const lazy = require("react");
// const Route = require('react-router-dom');
// const Routes = require('react-router-dom');


const Page1 = lazy(() => import(/* webpackChunkName: "Page1" */ 'pages/Page1'));
const Preview = lazy(() => import(/* webpackChunkName: "Preview" */ 'pages/Preview'));
const AuthorizedPage1 = lazy(() => import(/* webpackChunkName: "AuthorizedPage1" */ 'pages/AuthorizedPage1'));

export const AppRouter = () => <DevRoutes />;

const FOR_HOTELIER_ROUTES = FOR_HOTELIER_SEO.ids.map(id => {
  const routeItem = FOR_HOTELIER_SEO.entities[id];
  if (!routeItem) return null;
  const { path, title, twitterCard, twitterCreator, description, alternate } = routeItem;

  return (
    <Route
      path={path}
      element={
        <>
          <Seo
            title={title}
            description={description}
            twitterCard={twitterCard}
            twitterCreator={twitterCreator}
            alternate={alternate}
          />
          <MainHotelier />
        </>
      }
      key={id}
    />
  );
});

// const ProdRoutes = () => (
//   <Routes>
//     <Route path={ROOT} element={<App />}>
//       <Route index element={<Preview />} />

//       <Route element={<LayoutMainHotelier />}>{FOR_HOTELIER_ROUTES}</Route>

//       <Route path="*" element={<NotFound />} />
//     </Route>
//   </Routes>
// );

const DevRoutes = () => (
  <Routes>
    {/* List all public routes here */}
    <Route path={ROOT} element={<App />}>
      <Route element={<LayoutParlour />}>
        <Route index element={<Home />} />
      </Route>

      <Route path={LOGIN_HOTELIER} element={<LoginHotelier />} />
      <Route path={LOGIN_AGENT} element={<LoginAgent />} />
      <Route path={LOGIN_USER} element={<LoginUser />} />
      <Route path={REGISTER_HOTELIER} element={<RegisterHotelier />} />
      <Route path={REGISTER_AGENT} element={<RegisterAgent />} />
      <Route path={REGISTER_USER} element={<RegisterUser />} />

      <Route element={<LayoutMainHotelier />}>{FOR_HOTELIER_ROUTES}</Route>

      <Route element={<LayoutMainAgent />}>
        <Route path={MAIN_AGENT} element={<MainAgent />} />
      </Route>

      <Route element={<LayoutMain />}>
        <Route path={MAIN} element={<Main />} />
      </Route>

      <Route element={<PrivateRouteHotelier />}>
        <Route element={<LayoutCabinetHotelier />}>
          <Route path={CABINET_HOTELIER} element={<CabinetHotelier />} />

          {/* TODO: consider if need to combine 5 pages into one component - one url */}
          <Route path={HOTELIER_ACCOUNT_SETTINGS} element={<AccountSetting />} />
          <Route path={HOTELIER_FINANCES} element={<Finances />} />
          <Route path={HOTELIER_FEEDBACK} element={<FeedbackReviews />} />
          <Route path={HOTELIER_SMS_SETTINGS} element={<SmsSettings />} />
          <Route path={HOTELIER_SALES_HISTORY} element={<HistorySales />} />
        </Route>
      </Route>

      <Route element={<PrivateRouteAgent />}>
        <Route element={<LayoutCabinetAgent />}>
          <Route path={CABINET_AGENT} element={<CabinetAgent />} />
        </Route>
      </Route>

      <Route element={<PrivateRouteUser />}>
        <Route element={<LayoutCabinetUser />}>
          <Route path={CABINET_USER} element={<CabinetUser />} />

          <Route path={USER_ACCOUNT_SETTING} element={<UserAccountSetting />} />
          <Route path={USER_BOOKING_KARMA} element={<UserBookingKarma />} />
          <Route path={USER_SMS_SETTINGS} element={<UserSmsSettings />} />
          <Route path={USER_BOOKING_HISTORY} element={<UserBookingHistory />} />
          <Route path={BOOKING_FEEDBACK} element={<SendFeedback />} />
        </Route>
      </Route>

      <Route element={<LayoutHotelierCatalog />}>
        <Route path={SEARCH_LOCATION} element={<SearchLocation />} />
        {hotelierCatalogPaths.map(path => (
          <Route key={path} path={path} element={<HotelierCatalog />} />
        ))}
      </Route>

      <Route element={<LayoutUserCatalog />}>
        {userCatalogPaths.map(path => (
          <Route key={path} path={path} element={<UserCatalog />} />
        ))}
      </Route>

      <Route element={<LayoutSupport />}>
        <Route path={SUPPORT} element={<Support />} />
        <Route path={PRIVACY_POLICY_HOTELIERS} element={<PolicyHoteliers />} />
        <Route path={PRIVACY_POLICY_AGENTS} element={<PolicyAgents />} />
        <Route path={PRIVACY_POLICY_USERS} element={<PolicyUsers />} />

        <Route path={TERMS_CONDITIONS_HOTELIERS} element={<TermsHoteliers />} />
        <Route path={TERMS_CONDITIONS_AGENTS} element={<TermsAgents />} />
        <Route path={TERMS_CONDITIONS_USERS} element={<TermsUsers />} />
        <Route path={OUR_MISSION} element={<OurMission />} />
      </Route>

      <Route path={PAGE1} element={<Page1 />} />
      <Route path={PREVIEW} element={<Preview />} />
      <Route path={NAVBAR_SIDE_MENU} element={<NavbarSideMenu />} />
      <Route path={HOUSE_PAGE} element={<HousePage />} />
      <Route path={SEARCH_MAIN} element={<SearchMain />} />

      {/* List all private/auth routes here */}
      <Route element={<PrivateRoute navigateTo={LOGIN_HOTELIER} />}>
        <Route path={AUTH_PAGE1} element={<AuthorizedPage1 />} />
      </Route>

      {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
      {/*
          <Route element={<PrivateRoute navigateTo={LOGIN_HOTELIER} />}>
            <Route path={AUTH_PAGE1} element={<AuthorizedPage1 />} />
            <Route path={AUTH_PAGE2} element={<AuthorizedPage2 />} />
          </Route>
        */}

      {/* List a generic 404-Not Found route here */}
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
