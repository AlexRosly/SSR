import s from '../subcard.module.scss';

export const ToggleIsPaymentConfirmedButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      Toggle payment confirmation
    </button>
  );
};
