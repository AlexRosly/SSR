// deploy
export const FOR_HOTELIER_EN = 'https://www.yourpricebooking.com/for-hoteliers';
export const FOR_HOTELIER_UK = 'https://www.yourpricebooking.com/dlya-gotelyeriv';
export const FOR_HOTELIER_PL = 'https://www.yourpricebooking.com/dla-hotelarzy';
export const FOR_HOTELIER_RU = 'https://www.yourpricebooking.com/dlya-otelerov';

export const ROOT = '/';

// auth
export const LOGIN_HOTELIER = '/login-hotelier';
export const LOGIN_USER = '/login-user';
export const LOGIN_AGENT = '/login-agent';
export const REGISTER_HOTELIER = '/register-hotelier';
export const REGISTER_USER = '/register-user';
export const REGISTER_AGENT = '/register-agent';
export const LOGIN_SING_US = '/login-sing-us';

export const PAGE1 = '/page1';
export const PREVIEW = '/preview';
export const NAVBAR_SIDE_MENU = '/navbar-side-menu';
export const USER_ACCOUNT_SETTING = '/user-account-setting';
export const USER_SMS_SETTINGS = '/user-sms-settings';
export const USER_CONTACTS = '/user-contacts';

export const USER_BOOKING_KARMA = '/user-booking-karma';
export const USER_BOOKING_HISTORY = '/user-booking-history';
export const HOUSE_PAGE = '/house-page';
export const SEARCH_MAIN = '/search-main';
export const ADD_OBJECT = '/add-object';

export const BOOKING_FEEDBACK = '/booking-feedback';
export const TEAM = '/team';
export const AUTH_PAGE1 = '/authorized1';
export const YOUR_PRICE_BOOKING_LLC_ESTONIA = '/estonia';

export const _LOGIN_AGENT_URL = `api/auth-agents/check-agent`;
export const _CODE_LOG_AGENT_URL = `api/auth-agents/signIn`;
export const _LOGOUT_AGENT_URL = `api/auth-agents/signOut`;
export const _LOGIN_HOTELIER_URL = `api/auth-hoteliers/check-hotelier`;
export const _LOGOUT_HOTELIER_URL = `api/auth-hoteliers/check-hotelier`;
export const _CODE_LOG_HOTELIER_URL = `api/auth-hoteliers/signIn`;
export const _LOGIN_USER_URL = `api/auth-users/check-user`;
export const _LOGOUT_USER_URL = `api/auth-users/check-user`;
export const _CODE_LOG_USER_URL = `api/auth-users/signIn`;

export const _REGISTER_AGENT_URL = `api/auth-agents/check-candidate`;
export const _REGISTER_CODE_AGENT_URL = `api/auth-agents/signUp`;
export const _REGISTER_HOTELIER_URL = `api/auth-hoteliers/check-candidate`;
export const _REGISTER_CODE_HOTELIER_URL = `api/auth-hoteliers/signUp`;
export const _REGISTER_USER_URL = `api/auth-users/check-candidate`;
export const _REGISTER_CODE_USER_URL = `api/auth-users/signUp`;
// email regexp

export const RegexpEmail =
  // eslint-disable-next-line no-empty-character-class
  /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;

// LayoutMainAgents
export const MAIN_AGENT = '/main-agent';

// LayoutCabinetUser
export const CABINET_USER = '/cabinet-user';

// LayoutCabinetAgent
export const CABINET_AGENT = '/cabinet-agent';

// LayoutMain
export const MAIN = '/main';

// location
export const USER_CATALOG = '/user-catalog';
export const KVARTIRY = '/kvartiry-posutochno';
export const KVARTIRY1 = '/1-komnatnye-kvartiry-posutochno';
export const KVARTIRY2 = '/2-komnatnye-kvartiry-posutochno';
export const KVARTIRY3 = '/3-komnatnye-kvartiry-posutochno';
export const KVARTIRY4 = '/4-komnatnye-kvartiry-posutochno';
export const DOM = '/dom-posutochno';
export const SHALE = '/shale-posutochno';
export const VILLA = '/villa-posutochno';
export const TINY_DOM = '/nebolshoy-dom-posutochno';
export const HOLIDAY_DOM = '/doma-dlya-otpuska';
export const KOMNATA = '/snyat-komnatu-posutochno';
export const HOSTEL = '/hostely';
export const GOSTINICY = '/gostinicy';
export const HOTEL = '/oteli';
export const MOTEL = '/moteli';
export const APART_HOTEL = '/apart-otel';
export const KURORT_HOTEL = '/kurortnye-oteli';
export const GUEST_HOUSE = '/guest-houses';
export const CAPSULE_HOTEL = '/capsule-hotels';

// LayoutHotelierCatalog + HotelierCatalog
export const HOTELIER_CATALOG = '/hotelier-catalog';
export const SEARCH_LOCATION = '/search-location';
export const KVARTIRY_CATALOG = '/kvartiry-posutochno-catalog';
export const KOMNATA_DOM_CATALOG = '/komnata_dom_catalog';
export const DOM_CATALOG = '/dom-posutochno-catalog';
export const KOMNATA_CATALOG = '/snyat-komnatu-posutochno-catalog';
export const HOSTEL_CATALOG = '/hostely-catalog';
export const GOSTINICY_CATALOG = '/gostinicy-catalog';
export const HOTEL_CATALOG = '/oteli-catalog';
export const MOTEL_CATALOG = '/moteli-catalog';
export const APART_HOTEL_CATALOG = '/apart-otel-catalog';
export const GUEST_HOUSE_CATALOG = '/guest-houses-catalog';
export const CAPSULE_HOTEL_CATALOG = '/capsule-hotels-catalog';

// LayoutMainUser + CabinetHotelier
export const CABINET_HOTELIER = '/cabinet-hotelier';
export const HOTELIER_ACCOUNT_SETTINGS = '/account-settings';
export const HOTELIER_FINANCES = '/finances';
export const HOTELIER_FEEDBACK = '/feedback';
export const HOTELIER_SMS_SETTINGS = '/sms-settings';
export const HOTELIER_SALES_HISTORY = '/history-sales';

// LayoutMainHotelier
// export const MAIN_HOTELIER = '/main-hotelier';
export const MAIN_HOTELIER_EN = '/for-hoteliers';
export const MAIN_HOTELIER_UK = '/dlya-gotelyeriv';
export const MAIN_HOTELIER_PL = '/dla-hotelarzy';
export const MAIN_HOTELIER_RU = '/dlya-otelerov';

export const SUPPORT = '/support';
export const TERMS_CONDITIONS_USERS = '/terms-conditions-users';
export const TERMS_CONDITIONS_HOTELIERS = '/terms-conditions-hoteliers';
export const TERMS_CONDITIONS_AGENTS = '/terms-conditions-agents';
export const PRIVACY_POLICY_USERS = '/privacy-policy-users';
export const PRIVACY_POLICY_HOTELIERS = '/privacy-policy-hoteliers';
export const PRIVACY_POLICY_AGENTS = '/privacy-policy-agents';
export const OUR_MISSION = '/our-mission';

// external
export const TRAVEL_Q_BLOG = 'https://travelq.yourpricebooking.com/';
export const FACEBOOK_KYIV = 'https://www.facebook.com/yourpricebookingKiev/';
export const FACEBOOK_ODESA = 'https://www.facebook.com/YourPriceBookingOdesa/';
export const FACEBOOK_WARSAW = 'https://www.facebook.com/Your-Price-Booking-Warszawa-104254858498032/';
export const FACEBOOK_NYC = 'https://www.facebook.com/Your-Price-Booking-New-York-City-105355105052116/';
export const INSTAGRAM_PB = 'https://instagram.com/yourpricebooking';
export const REDDIT_YPB = 'https://www.reddit.com/r/YourPriceBooking/';
export const TWITTER_PB = 'https://twitter.com/PriceBooking';
export const LINKEDIN_YPB = 'https://www.linkedin.com/company/75622729';
export const YOUTUBE_ALL_OBJECTS_YPB = 'https://www.youtube.com/channel/UCStbQA0rJSGiWg0GTrKB-pA';
export const YOUTUBE_OFFICIAL_YPB = 'https://www.youtube.com/channel/UCBhywVgi7MclKBN9Q4fn-ww';
export const USERS_SUPPORT_TELEGRAM = 'https://t.me/YourPriceBooking';
export const HOTELIERS_SUPPORT_TELEGRAM = 'https://t.me/Hoteliers_support';
export const AGENTS_CHAT_TELEGRAM = 'https://t.me/agents_YourPriceBooking';

// placeholders
export const GOOGLE_PLAY_YPB = 'https://play.google.com/store/apps';
export const APP_STORE_YPB = 'https://www.apple.com/app-store/';

// renamed '/primeCabinet' → '/cabinet-hotelier'
// renamed '/your-office' → '/cabinet-user'
// renamed '/location' → '/user-catalog'
// renamed '/main-hotelier' → '/for-hoteliers', '/dlya-gotelyeriv', '/dla-hotelarzy', '/dlya-otelerov'
// renamed '/for-agents' → '/main-agent'

const loginRoutes = new Set([LOGIN_HOTELIER, LOGIN_AGENT, LOGIN_USER]);
const registerRoutes = new Set([REGISTER_HOTELIER, REGISTER_AGENT, REGISTER_USER]);
const mainRoutes = new Set([MAIN, MAIN_HOTELIER_EN, MAIN_HOTELIER_UK, MAIN_HOTELIER_PL, MAIN_HOTELIER_RU, MAIN_AGENT]); // TODO: Add main for users
const forHoteliersRoutes = new Set([MAIN_HOTELIER_EN, MAIN_HOTELIER_UK, MAIN_HOTELIER_PL, MAIN_HOTELIER_RU]);
const cabinetRoutes = new Set([CABINET_HOTELIER, CABINET_AGENT, CABINET_USER]);
const catalogRoutes = new Set([HOTELIER_CATALOG, USER_CATALOG]);

export const forHoteliersPaths = Array.from(forHoteliersRoutes);

const hotelierCatalogRoutes = new Set([
  HOTELIER_CATALOG,
  KVARTIRY_CATALOG,
  KOMNATA_DOM_CATALOG,
  DOM_CATALOG,
  KOMNATA_CATALOG,
  HOSTEL_CATALOG,
  GOSTINICY_CATALOG,
  HOTEL_CATALOG,
  MOTEL_CATALOG,
  APART_HOTEL_CATALOG,
  GUEST_HOUSE_CATALOG,
  CAPSULE_HOTEL_CATALOG,
]);

export const hotelierCatalogPaths = Array.from(hotelierCatalogRoutes);

const userCatalogRoutes = new Set([
  USER_CATALOG,
  KVARTIRY,
  KVARTIRY1,
  KVARTIRY2,
  KVARTIRY3,
  KVARTIRY4,
  DOM,
  SHALE,
  VILLA,
  TINY_DOM,
  HOLIDAY_DOM,
  KOMNATA,
  HOSTEL,
  GOSTINICY,
  HOTEL,
  MOTEL,
  APART_HOTEL,
  KURORT_HOTEL,
  GUEST_HOUSE,
  CAPSULE_HOTEL,
]);

export const userCatalogPaths = Array.from(userCatalogRoutes);

export const isOnLogin = pathname => loginRoutes.has(pathname);
export const isOnRegister = pathname => registerRoutes.has(pathname);
export const isOnMain = pathname => mainRoutes.has(pathname);
export const isOnMainHotelier = pathname => forHoteliersRoutes.has(pathname);
export const isOnCabinet = pathname => cabinetRoutes.has(pathname);
export const isOnCatalog = pathname => catalogRoutes.has(pathname);
export const isOnHotelierCatalog = pathname => hotelierCatalogRoutes.has(pathname);
export const isOnUserCatalog = pathname => userCatalogRoutes.has(pathname);
