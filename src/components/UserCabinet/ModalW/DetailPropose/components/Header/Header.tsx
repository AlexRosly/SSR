import style from './Header.module.scss';

type Prop = {
  onClose: () => void;
};

export const Header = ({ onClose }: Prop) => (
  <div className={style.header}>
    <div className={style.header_btn} onClick={onClose}>
      <div className={style.header_btn_img}></div>
      Close
    </div>
  </div>
);
