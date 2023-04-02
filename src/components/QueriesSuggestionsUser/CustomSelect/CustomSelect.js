import { useEffect, useRef, useState } from 'react';
import { ArrowIcon } from './iconComponents/ArrowIcon';
import { NewIcon } from './iconComponents/NewIcon';
import { NotSendIcon } from './iconComponents/NotSendIcon';
import { SendIcon } from './iconComponents/SendIcon';
import { UrgentIcon } from './iconComponents/UrgentIcon';
import './CustomSelect.scss';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

const idForAnchorLink = '#not-send';

export const CustomSelect = () => {
  const { t } = useTranslation('customSelect');
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(1);
  const customSelectRef = useRef(null);
  const bodyOpen = open ? 'body-open' : 'body-close';

  const arrSelect = [
    {
      text: t('urgent'),
      value: 'urgent',
      icon: <UrgentIcon />,
    },
    {
      text: t('new'),
      value: 'new',
      icon: <NewIcon />,
    },
    {
      text: t('notSend'),
      value: 'notSend',
      icon: <NotSendIcon />,
    },
    {
      text: t('send'),
      value: 'send',
      icon: <SendIcon />,
    },
  ];

  const lastLink = arrSelect[arrSelect.length - 1];

  const clickHandler = index => {
    setCurrentItem(index);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const handleClick = e => {
      if (!customSelectRef.current) return;
      if (!customSelectRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [open]);

  return (
    <div ref={customSelectRef} className="custom-select">
      <div
        className="custom-select__select"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="item-icon">{arrSelect[currentItem].icon}</div>
        <p className="custom-select__select-text">{arrSelect[currentItem].text}</p>
        <div
          className={classNames('custom-select__select-arrow ', {
            'arrow-rotate-up': open,
            'arrow-rotate-down': !open,
          })}
        >
          <ArrowIcon />
        </div>
      </div>

      <div className={`custom-select__body ${bodyOpen}`}>
        <p className="custom-select__text">{t('showFirst')}</p>

        <ul className="custom-select__list">
          {arrSelect.slice(0, 3).map((select, index) => (
            <li key={select.value} className={'custom-select__item'} onClick={() => clickHandler(index)}>
              <div className="item-icon">{select.icon}</div>
              <p className="custom-select__item-text">{select.text}</p>
            </li>
          ))}

          <li key={lastLink.value} className={'custom-select__item'}>
            <a
              onClick={() => setOpen(false)}
              href={idForAnchorLink}
              className="custom-select__item-text custom-select--link"
            >
              <div className="item-icon">{lastLink.icon}</div>
              {lastLink.text}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
