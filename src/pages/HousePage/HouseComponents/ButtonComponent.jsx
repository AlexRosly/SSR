import s from '../HousePage.module.scss';

export default function ButtonComponent() {
  return (
    <div className={s.content_left_btn_wrap}>
      <button className={s.content_left_btn}>Узнать цены</button>
      <button className={s.content_left_btn}>Забронировать</button>
    </div>
  );
}
