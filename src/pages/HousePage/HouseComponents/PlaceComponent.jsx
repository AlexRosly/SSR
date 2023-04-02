import s from '../HousePage.module.scss';
import hotel from '../img/hotel.png';
import vector from '../img/Vector.png';
import frame from '../img/Frame.png';

export default function PlaceComponent() {
  return (
    <div className={s.content_left_place}>
      <div>
        <img src={hotel} alt="house icon" className={s.content_left_hotel} />
      </div>
      <div className={s.content_left_place_location}>
        <div className={s.location_name}> Дом Пабло Эскобара</div>
        <div className={s.location_place}>
          <div className={s.content_left_target}></div>
          <div className={s.location_address}>ул.Джона Маккейна, д.88, г.Киев, Украина</div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <div className={s.big_photo_block_wrap}>
            <img src={vector} alt="check icon" className={s.vector} />
            <div className={s.big_photo_block_text}>
              <div>Check In</div>
              <div>14:00</div>
            </div>
          </div>
          <div className={s.big_photo_block_wrap}>
            <img src={frame} alt="run men icon" className={s.frame} />
            <div className={s.big_photo_block_text}>
              <div>Check Out</div>
              <div>15:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
