import dogS from '../image/animal/dogS.png';
import dogM from '../image/animal/dogM.png';
import dogL from '../image/animal/dogL.png';
import cat from '../image/animal/cat.png';
import other from '../image/animal/other.png';
import raccon from '../image/animal/raccon.png';

import s from './AnimalTravel.module.scss';

export const AnimalTravel = () => {
  return (
    <>
      <div className={s.title}>Можете остановиться у нас вместе с:</div>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={dogS} alt="small dog" className={s.icon} />
          <p className={s.text}>С маленьким псом</p>
        </li>

        <li className={s.item}>
          <img src={dogM} alt="medium dog" className={s.icon} />
          <p className={s.text}>Со средним псом</p>
        </li>

        <li className={s.item}>
          <img src={dogL} alt="large dog" className={s.icon} />
          <p className={s.text}>С большим псом</p>
        </li>

        <li className={s.item}>
          <img src={cat} alt="cat" className={s.icon} />
          <p className={s.text}> С котом</p>
        </li>

        <li className={s.item}>
          <img src={raccon} alt="raccon" className={s.icon} />
          <p className={s.text}>С енотом</p>
        </li>

        <li className={s.item}>
          <img src={other} alt="other animals" className={s.icon} />
          <p className={s.text}>С не хищным животным, меньше кота</p>
        </li>
      </ul>
    </>
  );
};
