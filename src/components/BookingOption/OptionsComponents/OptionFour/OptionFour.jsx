import s from './OptionFour.module.scss';
import { useTranslation } from 'react-i18next';
import close from '../../img/Close.png';
import smallDog from '../../img/smallDog.png';
import mediumDog from '../../img/mediumDog.png';
import bigDog from '../../img/bigDog.png';
import cat from '../../img/cat.png';
import raccoon from '../../img/raccoon.png';
import anotherAnimal from '../../img/anotherAnimal.png';
import currentDot from '../../img/currentDot.png';
import dot from '../../img/dot.png';
import arrowReady from '../../img/arrowReady.png';
import backArrow from '../../img/backArrow.png';
import { setOpenOneBlock } from 'redux/BookingOptions/bookingOptions.actions';
import { useAppDispatch, useAppSelector } from 'features';
import {
  chooseBookingHotelAnimals,
  selectBookingHotelAnimals,
  resetBookingHotelState,
} from 'features/bookingOptionHotel';

const OptionFour = () => {
  const appDispatch = useAppDispatch();
  const { t } = useTranslation('booking');
  const selectedAnimals = useAppSelector(selectBookingHotelAnimals);

  const closeComponent = () => {
    appDispatch(setOpenOneBlock(0));
    appDispatch(resetBookingHotelState());
  };
  const lastComponent = () => {
    appDispatch(setOpenOneBlock(6));
  };
  const nextComponent = () => {
    appDispatch(setOpenOneBlock(8));
    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={s.booking_block}>
      <div className={s.booking_block_content_wrap}>
        <div className={s.booking_block_content}>
          <div className={s.booking_block_content_header}>
            <div className={s.content_header_back} onClick={() => lastComponent()}>
              <img src={backArrow} alt="next" />
            </div>
            <div className={s.content_header_close} onClick={() => closeComponent()}>
              <img src={close} alt="close" />
            </div>
          </div>
          <div className={s.booking_block_content_main}>
            <div className={s.content_main_text}>{t('animalsCheck')}</div>
            <div className={s.booking_block_content_animals}>
              <div
                className={s.booking_block_content_animals_wrap}
                onClick={() => appDispatch(chooseBookingHotelAnimals('smallDogSelected'))}
              >
                <div
                  className={
                    selectedAnimals.smallDogSelected === false
                      ? s.booking_block_content_animals_img
                      : s.booking_block_content_animals_img_selected
                  }
                >
                  <img src={smallDog} alt="small dog" />
                </div>
                <div
                  className={
                    selectedAnimals.smallDogSelected === false
                      ? s.booking_block_content_animals_txt
                      : s.booking_block_content_animals_txt_selected
                  }
                >
                  {t('smallDog')}
                </div>
              </div>
              <div
                className={s.booking_block_content_animals_wrap}
                onClick={() => appDispatch(chooseBookingHotelAnimals('mediumDogSelected'))}
              >
                <div
                  className={
                    selectedAnimals.mediumDogSelected === false
                      ? s.booking_block_content_animals_img
                      : s.booking_block_content_animals_img_selected
                  }
                >
                  <img src={mediumDog} alt="medium dog" />
                </div>
                <div
                  className={
                    selectedAnimals.mediumDogSelected === false
                      ? s.booking_block_content_animals_txt
                      : s.booking_block_content_animals_txt_selected
                  }
                >
                  {t('dog')}
                </div>
              </div>
              <div
                className={s.booking_block_content_animals_wrap}
                onClick={() => appDispatch(chooseBookingHotelAnimals('bigDogSelected'))}
              >
                <div
                  className={
                    selectedAnimals.bigDogSelected === false
                      ? s.booking_block_content_animals_img
                      : s.booking_block_content_animals_img_selected
                  }
                >
                  <img src={bigDog} alt="big dog" />
                </div>
                <div
                  className={
                    selectedAnimals.bigDogSelected === false
                      ? s.booking_block_content_animals_txt
                      : s.booking_block_content_animals_txt_selected
                  }
                >
                  {t('bigDog')}
                </div>
              </div>
              <div
                className={s.booking_block_content_animals_wrap}
                onClick={() => appDispatch(chooseBookingHotelAnimals('catSelected'))}
              >
                <div
                  className={
                    selectedAnimals.catSelected === false
                      ? s.booking_block_content_animals_img
                      : s.booking_block_content_animals_img_selected
                  }
                >
                  <img src={cat} alt="cat" />
                </div>
                <div
                  className={
                    selectedAnimals.catSelected === false
                      ? s.booking_block_content_animals_txt
                      : s.booking_block_content_animals_txt_selected
                  }
                >
                  {t('cat')}
                </div>
              </div>
              <div
                className={s.booking_block_content_animals_wrap}
                onClick={() => appDispatch(chooseBookingHotelAnimals('raccoonSelected'))}
              >
                <div
                  className={
                    selectedAnimals.raccoonSelected === false
                      ? s.booking_block_content_animals_img
                      : s.booking_block_content_animals_img_selected
                  }
                >
                  <img src={raccoon} alt="raccoon" />
                </div>
                <div
                  className={
                    selectedAnimals.raccoonSelected === false
                      ? s.booking_block_content_animals_txt
                      : s.booking_block_content_animals_txt_selected
                  }
                >
                  {t('racoon')}
                </div>
              </div>
              <div
                className={s.booking_block_content_animals_wrap}
                onClick={() => appDispatch(chooseBookingHotelAnimals('anotherAnimalSelected'))}
              >
                <div
                  className={
                    selectedAnimals.anotherAnimalSelected === false
                      ? s.booking_block_content_animals_img
                      : s.booking_block_content_animals_img_selected
                  }
                >
                  <img src={anotherAnimal} alt="another animal" />
                </div>
                <div
                  className={
                    selectedAnimals.anotherAnimalSelected === false
                      ? s.booking_block_content_animals_txt
                      : s.booking_block_content_animals_txt_selected
                  }
                >
                  {t('animal')}
                </div>
              </div>
            </div>
          </div>

          <div className={s.content_btn}>
            <div>
              <img src={currentDot} alt="dot" />
            </div>
            <div>
              <img src={currentDot} alt="dot" />
            </div>
            <div>
              <img src={currentDot} alt="dot" />
            </div>
            <div>
              <img src={currentDot} alt="dot" />
            </div>
            <div>
              <img src={currentDot} alt="dot" />
            </div>
            <div>
              <img src={dot} alt="dot" />
            </div>
            <div>
              <img src={dot} alt="dot" />
            </div>
            <div>
              <img className={s.content_btn_arrow} src={arrowReady} onClick={() => nextComponent()} alt="next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OptionFour;
