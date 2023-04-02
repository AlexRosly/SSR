import type { MutableRefObject } from 'react';
import { useEffect } from 'react';
import s from '../subcard.module.scss';

export const WaitForHotelierPaymentConfirm = ({
  isPopupVisible,
  containerRef,
  closePopup,
}: {
  isPopupVisible: boolean;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  closePopup: () => void;
}) => {
  const className = isPopupVisible ? s.waitForHotelierPaymentConfirmVisible : s.waitForHotelierPaymentConfirm;

  useEffect(() => {
    if (!containerRef.current) return;

    const cb = (e: MouseEvent) => {
      if (
        !containerRef.current ||
        !e.target ||
        !(e.target instanceof Node) ||
        e.composedPath().includes(containerRef.current)
      )
        return;

      closePopup();
    };

    document.addEventListener('click', cb, { passive: true });

    return () => {
      document.removeEventListener('click', cb);
    };
  }, [closePopup, containerRef]);

  return (
    <div className={className}>
      <p className={s.waitForHotelierPaymentConfirmTextNormal}>Отельер еще не подтвердил вашу оплату.</p>

      <p className={s.accentedPaymentStatus}>Ждём подтверждения оплаты от отельера</p>

      <p className={s.waitForHotelierPaymentConfirmTextNormal}>
        Оставить отзыв и поставить оценку вы сможете как только ваша оплата будет подтверждена отельером.
      </p>
    </div>
  );
};
