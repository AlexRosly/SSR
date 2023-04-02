// import react from 'react';
import s from '../HousePage.module.scss';
// import rating from '../img/rating.png';
import star from '../img/Star.png';
import { usePopover } from 'hooks/UI';

export default function RatingComponent(props) {
  // fetch rating from db using props.title which suppose
  // to be uniqure value
  const [parentPopperAttributes, childPopperAttributes] = usePopover({
    offset: [-49, 27],
    placement: 'bottom',
  });

  return (
    <div>
      <div
        {...parentPopperAttributes}
        className={[s.rating_img, props.cardSize === 's' ? s.rating_img_s : s.rating_img_xl].join(' ')}
      >
        {props.rating || '4,33'}
      </div>
      <div className={s.rating_block} {...childPopperAttributes}>
        <div className={s.rating_block_header}>
          <img src={star} alt="Star" className={s.star_img} />
          <div style={{ marginLeft: '-4em' }}>Рейтинг</div>
          {/* <img src={rating} className={s.rating_small_img} /> */}
          <div className={s.rating_small_img}>{props.rating || '4,33'}</div>
        </div>
        <div className={s.rating_block_center}>
          <div className={s.rating_block_center_text}>
            <div>Персонал</div>
            <div className={s.rating_block_center_number}>10</div>
          </div>
          <div className={s.rating_block_center_text}>
            <div>Расположение</div>
            <div className={s.rating_block_center_number}>1,7</div>
          </div>
          <div className={s.rating_block_center_text}>
            <div>Чистота</div>
            <div className={s.rating_block_center_number}>8,2</div>
          </div>
          <div className={s.rating_block_center_text}>
            <div>Удобства</div>
            <div className={s.rating_block_center_number}>7,7</div>
          </div>
        </div>
        <div className={s.rating_block_footer}>
          <div className={s.rating_block_center_text}>
            <div>Оценок гостей</div>
            <div className={s.rating_block_center_number}>1578</div>
          </div>
          <div className={s.rating_block_center_text}>
            <div>Зарегестрирован</div>
            <div className={s.rating_block_center_number}>меньше года</div>
          </div>
        </div>
      </div>
    </div>
  );
}
