import { useDispatch } from 'react-redux';
import s from './HousePage.module.scss';
import PlaceComponent from './HouseComponents/PlaceComponent';
import RatingComponent from './HouseComponents/RatingComponent';
import ButtonComponent from './HouseComponents/ButtonComponent';
import GalleryComponent from './HouseComponents/GalleryComponent';
import TextDescriptionComponent from './HouseComponents/TextDescriptionComponent';
import DescriptionComponent from './HouseComponents/DescriptionComponent';
import PaymentComponent from './HouseComponents/PaymentComponent';
import VideoComponent from './HouseComponents/VideoComponent';
import Reviews from 'components/MainPage/Reviews/Reviews';
import { setShowText } from '../../redux/authentication/authentication.actions';
import { useNavigate } from 'react-router-dom';

export default function HousePage() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const closePage = () => {
    dispatch(setShowText(true));
    return nav(-1);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.header_btn} onClick={closePage}>
            <div className={s.header_btn_img}></div>
            Close
          </div>
        </div>
        <div className={s.content}>
          <div className={s.content_left}>
            <PlaceComponent />
            <div className={s.content_left_rating}>
              <RatingComponent />
              <ButtonComponent />
            </div>
          </div>
          <div className={s.content_right}>
            <GalleryComponent />
          </div>
        </div>
        <div className={s.bottom_content}>
          <div className={s.bottom_content_left}>
            <TextDescriptionComponent />
            <DescriptionComponent />
            <PaymentComponent />
          </div>
          <div className={s.bottom_content_right}>
            <VideoComponent />
            <div style={{ marginTop: '20px' }}>
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
