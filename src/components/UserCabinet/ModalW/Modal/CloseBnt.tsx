import arrow from './image/arrow.svg';
import s from './Modal.module.scss';

interface IProps {
  close: () => void;
  styleName?: string;
}

export const CloseBnt = ({ close, styleName }: IProps) => {
  return (
    <button type="button" className={`${s.btn_close} ${styleName}`} aria-label="button go back" onClick={close}>
      <img src={arrow} alt="arrow back" className={s.icon} />
    </button>
  );
};
