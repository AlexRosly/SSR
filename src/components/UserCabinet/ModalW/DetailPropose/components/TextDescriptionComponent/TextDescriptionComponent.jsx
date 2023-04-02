import s from './TextDescriptionComponent.module.scss';

export const TextDescriptionComponent = ({ text, title }) => {
  return (
    <div className={s.container}>
      {title && <p className={s.title}>{title}</p>}
      <p className={s.text}>{text}</p>
    </div>
  );
};
