import { useState } from 'react';
import s from './infoComponentPrime.module.scss';
import RoomInTheHotel from './RoomInTheHotel';

export default function AllRoomsInTheHotel({ allRooms, HTC = true }) {
  const [curentCardIndex, setCurentCardIndex] = useState(null);
  const [arr, setArr] = useState([]);

  const onArr = index => {
    if (arr.includes(index)) {
      setArr([...arr.filter(i => i !== index)]);
    } else {
      setArr([...arr, index]);
    }
  };

  const curentCard = (e, index) => {
    if (e.target.tagName !== 'UL') {
      setCurentCardIndex(index);
    }
  };
  return (
    <div className={s.hotelier_roms__boxs_scroll}>
      <ul className={s.hotelier_roms__list}>
        {allRooms.map((el, index) => (
          <RoomInTheHotel
            activeCards={arr.includes(index)}
            onArr={() => onArr(index)}
            HTC={HTC}
            el={el}
            key={el.number}
            onClick={e => curentCard(e, index)}
            activeCard={index === curentCardIndex}
            setCurentCardIndex={setCurentCardIndex}
          />
        ))}
      </ul>
    </div>
  );
}
