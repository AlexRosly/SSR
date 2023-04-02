import s from './infoComponentPrime.module.scss';
import dot from '../img/dot.png';

export default function HeaderWraper({ setShowContent, showContent }) {
  const showLeftContent = () => {
    setShowContent('left');
  };
  const showRightContent = () => {
    setShowContent('right');
  };
  return (
    <div className={s.header_wrap}>
      <div className={showContent === 'left' ? s.header_btn_wrap_active : s.header_btn_wrap} onClick={showLeftContent}>
        <span>
          Ваши объекты <span className={s.btn_nb}>0</span>
        </span>
        <span>
          Запросы бронирования <span className={s.btn_nb}>0</span>
        </span>
      </div>
      <div
        className={showContent === 'right' ? s.header_btn_wrap_active : s.header_btn_wrap}
        onClick={showRightContent}
      >
        <span>
          Действующие бронирования
          <span className={s.btn_img_dot} style={{ marginLeft: '10px' }}>
            <img src={dot} alt="Current booking indicator" />
          </span>
          <span className={s.btn_img_dot}>
            <img src={dot} alt="Current booking indicator" />
          </span>
        </span>
      </div>
    </div>
  );
}
