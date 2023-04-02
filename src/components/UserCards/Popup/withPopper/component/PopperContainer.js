import s from '../Popup.module.scss';

export const PopperContainer = ({ children, popper }) => {
  const bottomTransform = popper?.['data-popper-placement'] === 'bottom' && 'translate(-63px, 63px)';

  const popperStyle = {
    ...popper.style,
    transform: bottomTransform || popper.style.transform,
  };

  return (
    <div className={s.popup_proposal_card} {...popper} style={popperStyle}>
      {children}
    </div>
  );
};
