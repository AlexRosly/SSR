import s from './infoComponentPrime.module.scss';

const getClassOptionsRoom = quantityRooms => {
  switch (quantityRooms) {
    case 1:
      return s.hotelier_options_rooms__item1;
    case 2:
      return s.hotelier_options_rooms__item2;
    case 3:
      return s.hotelier_options_rooms__item3;
    case 4:
      return s.hotelier_options_rooms__item4;
    default:
      return null;
  }
};

export default getClassOptionsRoom;
