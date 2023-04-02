import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeEntity } from 'utils';

import '../../styles/common/_listLocation.scss';

const linksArr = [
  { to: '', text: 'Сдать квартиру посуточно', i18key: '' },
  { to: '', text: 'Сдать апартаменты посуточно', i18key: '' },
  { to: '', text: 'Сдать дом посуточно', i18key: '' },
  { to: '', text: 'Сдать номер в гостинице', i18key: '' },
  { to: '', text: 'Сдать номер в отеле', i18key: '' },
  { to: '', text: 'Сдать место в хостеле', i18key: '' },
  { to: '', text: 'Сдать комнату в квартире посуточно', i18key: '' },
  { to: '', text: 'Сдать комнату в доме посуточно', i18key: '' },
  { to: '', text: 'Сдать номер в Guest House', i18key: '' },
  { to: '', text: 'Сдать номер в Capsule Hotel', i18key: '' },
  { to: '', text: 'Сдать номер в мотеле Киев', i18key: '' },
  { to: '', text: 'Сдать жилье посуточно Киев', i18key: '' },
];

const linksEntity = makeEntity(linksArr);

const getActive = ({ isActive }) => `link ${isActive ? 'text-active' : ''}`;

export const List = ({ city }) => {
  const [links] = useState(linksEntity);

  return (
    <div className="cont">
      <div className="list-cont">
        <ul className="list-bl">
          {links.ids.map(id => {
            const item = links.entities[id];
            if (!item) return null;
            const { to, text } = item;

            return (
              <li key={id} className="list-dec list-for-all">
                <NavLink to={to} className={getActive}>
                  {text} {city}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
