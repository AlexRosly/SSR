import { FOR_HOTELIER_SEO } from 'components/Common/Seo/seoData';
import { useAuthContext } from 'context/AuthContext';
import { SUPPORT, isOnLogin, isOnRegister, isOnMain, isOnCabinet, isOnCatalog } from 'navigation/CONSTANTS';
import { useLocation } from 'react-router-dom';

const getTitle = (pathname: string) => {
  if (isOnLogin(pathname)) return 'Login';
  if (isOnRegister(pathname)) return 'Register';
  if (isOnMain(pathname)) return 'Main';
  if (isOnCabinet(pathname)) return 'Cabinet';
  if (isOnCatalog(pathname)) return 'Catalog';
  if (pathname === SUPPORT) return 'Support';
};

export const useUpdateDocumentTitle = () => {
  const { pathname } = useLocation();
  console.log({pathname});
  const [{ user }] = useAuthContext();
  if (pathname === FOR_HOTELIER_SEO.entities['0']?.path) return FOR_HOTELIER_SEO.entities['0'];
  if (pathname === FOR_HOTELIER_SEO.entities['1']?.path) return FOR_HOTELIER_SEO.entities['1'];
  if (pathname === FOR_HOTELIER_SEO.entities['2']?.path) return FOR_HOTELIER_SEO.entities['2'];
  if (pathname === FOR_HOTELIER_SEO.entities['3']?.path) return FOR_HOTELIER_SEO.entities['3'];

  const title = getTitle(pathname) ?? 'YPBooking';

  const titleWithEMail = `${title}${user?.email ? ' - ' + user.email : ''}`;

  return {
    title: titleWithEMail ? titleWithEMail : 'YPBooking',
    description:
      'Your Price Booking - service for travelers and guests who want to book a hotel, apartment or house from hoteliers',
  };
};
