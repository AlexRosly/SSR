import { useCallback, useEffect, useRef, useState } from 'react';

export const useCountdown = () => {
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const intervalId = useRef(null);

  useEffect(() => {
    if (!isDeletingAccount) return;

    if (countdown < 1) {
      clearInterval(intervalId.current);
      intervalId.current = null;
      return;
    }

    if (intervalId.current) return;
    intervalId.current = setInterval(() => setCountdown(a => a - 1), 1000);
  }, [countdown, isDeletingAccount]);

  useEffect(() => () => clearInterval(intervalId.current), []);

  const deleteAccount = useCallback(() => {
    setIsDeletingAccount(true);
  }, []);

  const cancelDelete = useCallback(() => {
    clearInterval(intervalId.current);
    setIsDeletingAccount(false);
    intervalId.current = null;
    setTimeout(() => setCountdown(60), 250);
  }, []);

  return {
    deleteAccount,
    isDeletingAccount,
    countdown,
    cancelDelete,
  };
};
