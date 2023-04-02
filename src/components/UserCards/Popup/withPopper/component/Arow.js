import s from '../Popup.module.scss';

export const Arrow = ({ id, attributes }) => {
  return <div id={s.arrow} className={s.arrow} data-popper-arrow {...attributes} />;
};
