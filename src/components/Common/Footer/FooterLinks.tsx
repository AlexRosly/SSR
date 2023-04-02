import type { EntityId } from '@reduxjs/toolkit';
import type { FooterLinkTranslationKeys } from 'types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  TERMS_CONDITIONS_USERS,
  PRIVACY_POLICY_USERS,
  TERMS_CONDITIONS_HOTELIERS,
  PRIVACY_POLICY_HOTELIERS,
  // TEAM,
  MAIN_AGENT,
  // YOUR_PRICE_BOOKING_LLC_ESTONIA,
  OUR_MISSION,
  TRAVEL_Q_BLOG,
  FACEBOOK_KYIV,
  FACEBOOK_ODESA,
  FACEBOOK_WARSAW,
  FACEBOOK_NYC,
  INSTAGRAM_PB,
  REDDIT_YPB,
  TWITTER_PB,
  LINKEDIN_YPB,
  YOUTUBE_ALL_OBJECTS_YPB,
  YOUTUBE_OFFICIAL_YPB,
  SUPPORT,
} from 'navigation/CONSTANTS';

import scss from './Footer.module.scss';
import { makeEntity } from 'utils';

type TFooterLink = { href: string; i18nKey: FooterLinkTranslationKeys };

const linksArray: TFooterLink[] = [
  { href: TERMS_CONDITIONS_USERS, i18nKey: 'linkTermsUsers' },
  { href: PRIVACY_POLICY_USERS, i18nKey: 'linkPrivacyPolicyUsers' },
  { href: TERMS_CONDITIONS_HOTELIERS, i18nKey: 'linkTermsHoteliers' },
  { href: PRIVACY_POLICY_HOTELIERS, i18nKey: 'linkPrivacyPolicyHoteliers' },
  { href: '/' /* TEAM */, i18nKey: 'linkTeam' }, // TODO: update link
  { href: MAIN_AGENT, i18nKey: 'linkForAgents' },
  { href: '/' /* YOUR_PRICE_BOOKING_LLC_ESTONIA */, i18nKey: 'linkYPBookingEstonia' },
  { href: OUR_MISSION, i18nKey: 'linkOurMission' },
  { href: SUPPORT, i18nKey: 'linkSupportInTelegram' }, // TODO: update key after translation merge
  { href: TRAVEL_Q_BLOG, i18nKey: 'linkTravelQBlog' },
  { href: FACEBOOK_KYIV, i18nKey: 'linkFacebookKyiv' },
  { href: FACEBOOK_ODESA, i18nKey: 'linkFacebookOdesa' },
  { href: FACEBOOK_WARSAW, i18nKey: 'linkFacebookWarsaw' },
  { href: FACEBOOK_NYC, i18nKey: 'linkFacebookNYC' },
  { href: INSTAGRAM_PB, i18nKey: 'linkInstagramPB' },
  { href: REDDIT_YPB, i18nKey: 'linkRedditYPB' },
  { href: TWITTER_PB, i18nKey: 'linkTwitterPB' },
  { href: LINKEDIN_YPB, i18nKey: 'linkLinkedInYPB' },
  { href: YOUTUBE_ALL_OBJECTS_YPB, i18nKey: 'linkYouTubeAllObjectsYPB' },
  { href: YOUTUBE_OFFICIAL_YPB, i18nKey: 'linkYouTubeOfficialYPB' },
];

const linksInitialState = Object.freeze(makeEntity(linksArray));

type LinkProps = {
  id: EntityId;
  href: string;
  text: string;
  className: string;
};

const FooterLink = ({ href, text, className }: LinkProps) => {
  const target = href.includes('http') ? '_blank' : undefined;
  const rel = target ? 'noopener noreferrer' : undefined;

  return (
    <li className={scss.footerItem}>
      {target ? (
        <a href={href} target={target} className={className} rel={rel}>
          {text}
        </a>
      ) : (
        <Link to={href} className={className}>
          {text}
        </Link>
      )}
    </li>
  );
};

export const FooterLinks = ({ mode }: { mode: 'dark' | 'light' }) => {
  const { t } = useTranslation();

  const [footerLinks] = useState(linksInitialState);

  const linkClassName = mode === 'dark' ? scss.footerLinkDark : scss.footerLink;

  return (
    <ul className={mode === 'dark' ? scss.footerListDark : scss.footerList}>
      {footerLinks.ids.map(linkId => {
        const link = footerLinks.entities[linkId];
        if (!link) return null;
        const { i18nKey, href } = link;
        const text = t(i18nKey);

        return <FooterLink className={linkClassName} key={linkId} id={linkId} href={href} text={text} />;
      })}
    </ul>
  );
};
