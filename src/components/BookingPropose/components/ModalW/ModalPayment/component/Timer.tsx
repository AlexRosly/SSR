import { useEffect, useState } from 'react';
import s from '../ModalPayment.module.scss';

interface IProps {
  duration: number;
  target: () => void;
  activeStyle: string;
}

export const Timer = ({ duration = 240, target, activeStyle }: IProps) => {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    const idTimer = setInterval(() => {
      setSeconds(prS => prS - 1);
    }, 1000);

    return () => clearInterval(idTimer);
  }, []);

  useEffect(() => {
    if (seconds === 0) target();
  }, [target, seconds]);

  return (
    <div className={activeStyle ? `${s.payment__timer} ${s.active}` : s.payment__timer}>
      <p className={s.payment__timer_number}>{new Date(seconds * 1000).toISOString().substring(14, 19)}</p>
    </div>
  );
};
