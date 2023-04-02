import request from 'assets/images/header/Request.svg';
import disable from 'assets/images/header/Disable.svg';
import friends from 'assets/images/header/Friends.svg';
import message from 'assets/images/header/Message.svg';
import window from 'assets/images/header/Window.jpg';
import { useState } from 'react';
import { makeEntity } from 'utils';
// import { useTranslation } from 'react-i18next';

import scss from './SubheaderParlour.module.scss';

type TSubheaderItem = { src: string; alt: string; text: string; i18nKey: string };

const links: TSubheaderItem[] = [
  { src: request, alt: 'Booking request', text: 'Ищут бронирование рядом', i18nKey: '' },
  { src: disable, alt: 'Cancel reservation', text: 'Отменил бронирование', i18nKey: '' },
  { src: friends, alt: 'Booking agreement', text: 'Договор бронирования', i18nKey: '' },
  { src: message, alt: 'Booking message', text: 'Сообщение', i18nKey: '' },
];

const SubheaderItem = ({ src, alt, text }: TSubheaderItem) => {
  // const { t } = useTranslation();
  const translated = text; // t(i18nKey)
  return (
    <li className="container-box">
      <div className="imgs-wrap">
        <img src={src} alt={alt} />
      </div>

      <div className="overlay">{translated}</div>
    </li>
  );
};

const initState = Object.freeze(makeEntity(links));

export const SubheaderList = () => {
  const [subheaderLinks] = useState(initState);

  return (
    <ul className={scss.requestsBox}>
      {subheaderLinks.ids.map(subheaderLinkId => {
        const link = subheaderLinks.entities[subheaderLinkId];
        if (!link) return null;
        const { src, alt, text, i18nKey } = link;
        return <SubheaderItem key={subheaderLinkId} src={src} alt={alt} text={text} i18nKey={i18nKey} />;
      })}
    </ul>
  );
};

export const SubheaderParlour = () => {
  return (
    <div className={scss.requestsBoxWrapper}>
      <SubheaderList />
      <img src={window} alt="Hotel" className="hotel-img" />
    </div>
  );
};
