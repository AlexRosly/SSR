import { useState } from 'react';
import s from '../HousePage.module.scss';

export default function DescriptionComponent() {
  const [description] = useState([
    { id: 1, value: 'все включено' },
    { id: 2, value: 'первая линия от моря' },
    { id: 3, value: 'вторая линия от моря' },
    { id: 4, value: 'номера для некурящих' },
    { id: 5, value: 'доставка еды и напитков' },
    { id: 6, value: 'ужин включен' },
    { id: 7, value: 'частная парковка' },
    { id: 8, value: 'подземный паркинг' },
    { id: 9, value: 'завтрак включен' },
    { id: 10, value: 'обед включен' },
    { id: 11, value: 'лобби-бар' },
    { id: 12, value: 'ресторан' },
    { id: 13, value: 'бар' },
    { id: 14, value: 'ночной бар' },
    { id: 15, value: 'спорт зал' },
    { id: 16, value: 'удобства для гостей с ограниченными возможностями' },
  ]);

  return (
    <div className={s.place_description}>
      {description.map(v => {
        return (
          <div key={v.id} className={s.description}>
            {v.value}
          </div>
        );
      })}
    </div>
  );
}
