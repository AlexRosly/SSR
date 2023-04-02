import {
  FOR_HOTELIER_EN,
  FOR_HOTELIER_UK,
  FOR_HOTELIER_PL,
  FOR_HOTELIER_RU,
  MAIN_HOTELIER_EN,
  MAIN_HOTELIER_UK,
  MAIN_HOTELIER_PL,
  MAIN_HOTELIER_RU,
} from 'navigation/CONSTANTS';
import { makeEntity } from 'utils';

/**
 * @see https://weglot.com/blog/hreflang-language-codes-2022-list-and-how-to-use-them/
 * The hreflang language codes are based on the ISO 639-1
 */
const en = 'en' as const;
const uk = 'uk' as const;
const pl = 'pl' as const;
const ru = 'ru' as const;

export type SeoAlternateLink = { hrefLang: string; href: string };
export type SeoTwitterCard = 'summary' | 'summary_large_image' | 'app' | 'player';
export type SeoFacebookType = 'website' | 'article';

export type TPageSeo = {
  path: string;
  hrefLang: 'en' | 'uk' | 'pl' | 'ru';
  href: string;
  title: string;
  description: string;
  image?: string;
  twitterCard?: SeoTwitterCard;
  twitterCreator?: string;
  twitterSite?: string;
  facebookType?: SeoFacebookType;
  facebookWebsiteUrl?: string;
  alternate: SeoAlternateLink[];
};

const FOR_HOTELIER_ALTERNATE = [
  { hrefLang: en, href: FOR_HOTELIER_EN },
  { hrefLang: uk, href: FOR_HOTELIER_UK },
  { hrefLang: pl, href: FOR_HOTELIER_PL },
  { hrefLang: ru, href: FOR_HOTELIER_RU },
];

const FOR_HOTELIER: TPageSeo[] = [
  {
    path: MAIN_HOTELIER_EN,

    title: 'Register a hotel, apartment... on the online booking service',
    description:
      'The main page for the hotelier. About the advantages of our online service, the cost of services, the size of the commission, in which cities we work and where we plan to start working. Register a hotel, hostel, apartment, house, room.',

    twitterCard: 'summary',
    twitterCreator: '@PriceBooking',
    ...FOR_HOTELIER_ALTERNATE[0],
    alternate: FOR_HOTELIER_ALTERNATE,
  },
  {
    path: MAIN_HOTELIER_UK,

    title: 'Зареєструвати готель, квартиру... на онлайн сервісі бронювання',
    description:
      'Головна сторінка для готельєра. Про переваги нашого онлайн-сервісу, вартість послуг, розмір комісії, в яких містах ми працюємо і де плануємо почати працювати. Зареєструвати готель, хостел, квартиру, будинок, кімнату.',

    twitterCard: 'summary',
    twitterCreator: '@PriceBooking',
    ...FOR_HOTELIER_ALTERNATE[1],
    alternate: FOR_HOTELIER_ALTERNATE,
  },
  {
    path: MAIN_HOTELIER_PL,

    title: 'Zarejestruj hotel, apartament... w serwisie rezerwacji online',
    description:
      'Strona główna dla hotelarza. O zaletach naszego serwisu internetowego, kosztach usług, wielkości prowizji, w jakich miastach pracujemy i gdzie planujemy rozpocząć pracę. Zarejestruj hotel, hostel, mieszkanie, dom, pokój.',

    twitterCard: 'summary',
    twitterCreator: '@PriceBooking',
    ...FOR_HOTELIER_ALTERNATE[2],
    alternate: FOR_HOTELIER_ALTERNATE,
  },
  {
    path: MAIN_HOTELIER_RU,

    title: 'Зарегистрировать гостиницу, квартиру... на онлайн сервисе бронирования',
    description:
      'Главная страница для отельера. О преимуществах нашего онлайн сервиса, стоимость услуг, размер комиссии, в каких городах мы работаем и где планируем начать работать. Зарегистрировать отель, хостел, квартиру, дом, комнату.',

    twitterCard: 'summary',
    twitterCreator: '@PriceBooking',
    ...FOR_HOTELIER_ALTERNATE[3],
    alternate: FOR_HOTELIER_ALTERNATE,
  },
];

export const FOR_HOTELIER_SEO = makeEntity(FOR_HOTELIER, 'hrefLang');
