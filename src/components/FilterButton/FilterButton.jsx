import { useState } from 'react';
import s from './FilterButton.module.scss';
import n from './img/new.png';
// import nH from './img/newHover.png';
import lowPrice from './img/lowPrice.png';
// import lowPriceHover from './img/lowPriceHover.png';

const FilterButton = () => {
  let [show, setShow] = useState('none');
  const [selected, setSelected] = useState({
    id: 1,
    obj: 'Новые',
    img: n,
  });

  const [filter] = useState([
    { id: 1, obj: 'Новые', img: n },
    { id: 2, obj: 'С меньшей ценой', img: lowPrice },
  ]);
  const timeHide = () => {
    setTimeout(() => {
      setShow('none');
    }, 500);
  };
  const selectFilter = (id, img, obj) => {
    setSelected({ id: id, obj: obj, img: img });
  };
  return (
    <div className={s.container} onMouseLeave={timeHide}>
      <div className={s.selected_wrap} onClick={() => setShow('block')}>
        <div className={s.text_block}>
          <div className={s.top_img}>
            <img src={selected.img} alt="clock" />
          </div>
          <div style={{ marginTop: '2px' }}>{selected.obj}</div>
        </div>
        <div className={s.arrow}></div>
      </div>
      <div className={s.filter_wrap} style={{ display: show }}>
        <div className={s.filter_dox}>
          <div className={s.box_title}>
            <div style={{ margin: '0 0 5px 4px' }}>Показываь сначала:</div>
          </div>

          {filter.map(o => {
            return (
              <div key={o.id} className={s.filter} onClick={() => selectFilter(o.id, o.img, o.obj)}>
                <div>
                  <img src={o.img} className={s.box_img} alt="icon" />
                </div>
                {o.obj}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default FilterButton;
