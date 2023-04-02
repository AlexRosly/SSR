import s from './infoComponentPrime.module.scss';

const getClassIconBed = (quantityRooms, bedType, quantityOtherBed) => {
  if (bedType === 'singleBed') {
    switch (quantityRooms) {
      case 1:
        if (quantityOtherBed === 0) {
          return s.hotelier_roms__icon_single_bed_1_alone;
        } else {
          return s.hotelier_roms__icon_single_bed_1_both;
        }
      case 2:
        return s.hotelier_roms__icon_single_bed_2;
      case 3:
        return s.hotelier_roms__icon_single_bed_3;
      case 4:
        return s.hotelier_roms__icon_single_bed_4;
      default:
        return null;
    }
  }
  if (bedType === 'twoBed') {
    switch (quantityRooms) {
      case 1:
        if (quantityOtherBed === 0) {
          return s.hotelier_roms__icon_double_bed_1_alone;
        } else {
          return s.hotelier_roms__icon_double_bed_1_both;
        }
      case 2:
        return s.hotelier_roms__icon_double_bed_2;
      case 3:
        return s.hotelier_roms__icon_double_bed_3;
      case 4:
        return s.hotelier_roms__icon_double_bed_4;
      default:
        return null;
    }
  }
};

export default getClassIconBed;
