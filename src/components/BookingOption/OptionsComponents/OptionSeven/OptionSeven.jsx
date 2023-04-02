import s from './OptionSeven.module.scss';
import { useTranslation } from 'react-i18next';
import close from '../../img/Close.png';
import dot from '../../img/dot.png';
import currentDot from '../../img/currentDot.png';
import backArrow from '../../img/backArrow.png';
import { useAppDispatch, useAppSelector } from 'features';
// import { selectActiveLang } from 'features/common';
import arrow from '../../img/arrow.png';
import arrowReady from '../../img/arrowReady.png';
import { updateBookingHotelPhoto, selectAllBookingPhotos, resetBookingHotelState } from 'features/bookingOptionHotel';
import { setOpenOneBlock } from 'redux/BookingOptions/bookingOptions.actions';

const OptionSeven = () => {
  const appDispatch = useAppDispatch();
  const { t } = useTranslation('booking');

  const photosPosition = useAppSelector(selectAllBookingPhotos);

  const id = photosPosition[0].id;
  const idOne = photosPosition[1].id;
  const idTwo = photosPosition[2].id;
  const idThree = photosPosition[3].id;
  const idFour = photosPosition[4].id;
  const idFive = photosPosition[5].id;
  const idSix = photosPosition[6].id;

  const oneBedRoomTwo = useAppSelector(state => state.bookingOptions.bedForOneRoomTwo);
  const twoBedRoomTwo = useAppSelector(state => state.bookingOptions.bedForTwoRoomTwo);
  const oneBedRoomThree = useAppSelector(state => state.bookingOptions.bedForOneRoomThree);
  const twoBedRoomThree = useAppSelector(state => state.bookingOptions.bedForTwoRoomThree);
  const oneBedRoomFour = useAppSelector(state => state.bookingOptions.bedForOneRoomFour);
  const twoBedRoomFour = useAppSelector(state => state.bookingOptions.bedForTwoRoomFour);
  // const status = useAppSelector(selectBookingHotelStatus);

  const closeComponent = () => {
    appDispatch(setOpenOneBlock(0));
    appDispatch(resetBookingHotelState());
  };
  const lastComponent = () => {
    if (oneBedRoomTwo === 0 || twoBedRoomTwo === 0) appDispatch(setOpenOneBlock(2));
    if ((oneBedRoomTwo > 0 || twoBedRoomTwo > 0) && (oneBedRoomThree === 0 || twoBedRoomThree === 0))
      appDispatch(setOpenOneBlock(3));
    if ((oneBedRoomThree > 0 || twoBedRoomThree > 0) && (oneBedRoomFour === 0 || twoBedRoomFour === 0))
      appDispatch(setOpenOneBlock(4));
    if (oneBedRoomFour > 0 || oneBedRoomFour > 0) appDispatch(setOpenOneBlock(5));
  };

  const photoMain = photosPosition[0].localUrl;
  const photoOne = photosPosition[1].localUrl;
  const photoTwo = photosPosition[2].localUrl;
  const photoThree = photosPosition[3].localUrl;
  const photoFour = photosPosition[4].localUrl;
  const photoFive = photosPosition[5].localUrl;
  const photoSix = photosPosition[6].localUrl;

  const mainPhoto = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const localUrl = reader.result;
        const newImage = { id, localUrl };
        appDispatch(updateBookingHotelPhoto(newImage));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const onePhoto = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const localUrl = reader.result;
        const newImage = { id: idOne, localUrl };
        appDispatch(updateBookingHotelPhoto(newImage));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const twoPhoto = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const localUrl = reader.result;
        const newImage = { id: idTwo, localUrl };
        appDispatch(updateBookingHotelPhoto(newImage));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const threePhoto = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const localUrl = reader.result;
        const newImage = { id: idThree, localUrl };
        appDispatch(updateBookingHotelPhoto(newImage));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const fourPhoto = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const localUrl = reader.result;
        const newImage = { id: idFour, localUrl };
        appDispatch(updateBookingHotelPhoto(newImage));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const fivePhoto = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const localUrl = reader.result;
        const newImage = { id: idFive, localUrl };
        appDispatch(updateBookingHotelPhoto(newImage));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const sixPhoto = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const localUrl = reader.result;
        const newImage = { id: idSix, localUrl };
        appDispatch(updateBookingHotelPhoto(newImage));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const nextComponent = () => {
    if (photoMain.profileImgMain !== '') appDispatch(setOpenOneBlock(6));
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
            <div className={s.content_header_back}>
              <img src={backArrow} onClick={lastComponent} alt="back" />
            </div>
            <div className={s.content_header_close} onClick={closeComponent}>
              <img src={close} alt="close" />
            </div>
          </div>
          <div className={s.booking_block_content_main}>
            <div className={s.content_main_text}>
              <p className={s.content_main_text_one}>{t('addPhoto')}</p>
              <p className={s.content_main_text_two}>{t('mainPhoto')}</p>
            </div>
            <div className={s.content_main_input_wrap}>
              <label className={s.content_main_input}>
                {photoMain === '' ? (
                  <div className={s.content_main_without_img_main}>
                    <p className={s.photo}>{t('photo')}</p>
                  </div>
                ) : (
                  <img src={photoMain} alt="main img" />
                )}
                <input
                  className={s.content_main_input}
                  type={'file'}
                  name="photo"
                  onChange={mainPhoto}
                  accept="image/*"
                />
              </label>
            </div>
            <div className={s.content_main_images}>
              <div>
                <label className={s.content_main_input_images}>
                  {photoOne === '' ? (
                    <div className={s.content_main_without_img}></div>
                  ) : (
                    <img src={photoOne} alt="one img" />
                  )}
                  <input
                    className={s.content_main_input_images}
                    type={'file'}
                    name="photoOne"
                    onChange={onePhoto}
                    accept="image/*"
                  />
                </label>
              </div>
              <div>
                <label className={s.content_main_input_images}>
                  {photoTwo === '' ? (
                    <div className={s.content_main_without_img}></div>
                  ) : (
                    <img src={photoTwo} alt="two img" />
                  )}
                  <input
                    className={s.content_main_input_images}
                    type={'file'}
                    name="photoTwo"
                    onChange={twoPhoto}
                    accept="image/*"
                  />
                </label>
              </div>
              <div>
                <label className={s.content_main_input_images}>
                  {photoThree === '' ? (
                    <div className={s.content_main_without_img}></div>
                  ) : (
                    <img src={photoThree} alt="three img" />
                  )}
                  <input
                    className={s.content_main_input_images}
                    type={'file'}
                    name="photoThree"
                    onChange={threePhoto}
                    accept="image/*"
                  />
                </label>
              </div>
              <div>
                <label className={s.content_main_input_images}>
                  {photoFour === '' ? (
                    <div className={s.content_main_without_img}></div>
                  ) : (
                    <img src={photoFour} alt="four img" />
                  )}
                  <input
                    className={s.content_main_input_images}
                    type={'file'}
                    name="photoFour"
                    onChange={fourPhoto}
                    accept="image/*"
                  />
                </label>
              </div>
              <div>
                <label className={s.content_main_input_images}>
                  {photoFive === '' ? (
                    <div className={s.content_main_without_img}></div>
                  ) : (
                    <img src={photoFive} alt="five img" />
                  )}
                  <input
                    className={s.content_main_input_images}
                    type={'file'}
                    name="photoFive"
                    onChange={fivePhoto}
                    accept="image/*"
                  />
                </label>
              </div>
              <div>
                <label className={s.content_main_input_images}>
                  {photoSix === '' ? (
                    <div className={s.content_main_without_img}></div>
                  ) : (
                    <img src={photoSix} alt="six img" />
                  )}
                  <input
                    className={s.content_main_input_images}
                    type={'file'}
                    name="photoSix"
                    onChange={sixPhoto}
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className={s.booking_block_content_ready}></div>

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
              <img src={dot} alt="dot" />
            </div>
            <div>
              <img src={dot} alt="dot" />
            </div>
            <div>
              <img src={dot} alt="dot" />
            </div>
            <div>
              <img src={dot} alt="dot" />
            </div>
            <div>
              <img
                className={s.content_btn_arrow}
                src={photoMain ? arrowReady : arrow}
                onClick={() => nextComponent()}
                alt="next"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OptionSeven;
