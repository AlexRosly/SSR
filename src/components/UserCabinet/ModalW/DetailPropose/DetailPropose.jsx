import reviewBG from './components/image/reviewBG.png';
import style from './DetailPropose.module.scss';
import Reviews from 'components/MainPage/Reviews/Reviews';
import VideoComponent from 'pages/HousePage/HouseComponents/VideoComponent';
import GalleryComponent from 'pages/HousePage/HouseComponents/GalleryComponent';

import { TagsComponent, Header, OptionButton, Price } from './components';
import { PaymentComponent, PlaceComponent, TextDescriptionComponent } from './components';
import { BedOptions } from 'components/UserCabinet/BedOptions/BedOptions';

import { TEST_PROPS } from './TEST_PROPS';
import { AnimalTravel } from './components/AnimalTravel/AnimalTravel';
import { useToggleModal } from '../Modal/useToggleModal';
import { ModalPayment } from 'components/BookingPropose/components';

export const DetailPropose = ({ modalClose, createBooking, showNotice }) => {
  const [isOpen, onOpen, onClose] = useToggleModal();

  return (
    <div className={style.container}>
      <Header onClose={modalClose} />

      <div className={style.content}>
        <div className={style.content__left}>
          <PlaceComponent title={TEST_PROPS.title} adress={TEST_PROPS.adress} />

          <div style={{ marginBottom: '16px', marginLeft: '11px' }}>
            <VideoComponent srcVideo={TEST_PROPS.srcVideo} size="small" />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <TextDescriptionComponent text={TEST_PROPS.descrText} title="Тут мы пишем именно описание объекта." />
          </div>

          <div style={{ marginBottom: '36px' }}>
            <TagsComponent tags={TEST_PROPS.descrTags} color={'#FF6000'} />
          </div>

          <div style={{ marginBottom: '29px' }}>
            <PaymentComponent payments={TEST_PROPS.payments} title="Мы принимаем оплату" />
          </div>

          <div style={{ marginLeft: '68px' }}>
            <Reviews backgroundImage={reviewBG} />
          </div>
        </div>
        <div className={style.content__rigth}>
          <div style={{ marginTop: '24px', marginBottom: '15px' }}>
            <GalleryComponent size="small" childrenPosition={'bottom left'}>
              <Price price={TEST_PROPS.price} date={TEST_PROPS.date} />
            </GalleryComponent>
          </div>

          <div style={{ marginBottom: '33px' }}>
            <OptionButton checkInTime={TEST_PROPS.checkInTime} onOpen={onOpen} />
          </div>

          <div className={style.bed_options}>
            <BedOptions
              options={TEST_PROPS.bedOptions}
              styled={{
                marginRight: '12px',
              }}
            />
          </div>

          <div style={{ marginBottom: '29px' }}>
            <TextDescriptionComponent
              text={TEST_PROPS.descrBookingVariant}
              title="Здесь мы пишем про вариант бронирования - описание варианта. "
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <GalleryComponent size="medium" collums="3" albom={TEST_PROPS.photos} childrenPosition={'top rigth'}>
              <div className={style.totalSq}>
                Общая площадь: <span>{TEST_PROPS.totalSq}</span>
              </div>
            </GalleryComponent>
          </div>

          <div style={{ marginBottom: '18px' }}>
            <TagsComponent tags={TEST_PROPS.roomAmenities} color={'#0090FF'} />
          </div>

          <div>
            <AnimalTravel />
          </div>
        </div>
      </div>

      <ModalPayment modalOptions={{ isOpen, onOpen, onClose }} createBooking={createBooking} showNotice={showNotice} />
    </div>
  );
};
