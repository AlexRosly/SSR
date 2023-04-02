import type { MutableRefObject } from 'react';
import { useEffect, useRef } from 'react';

export const useClickOutside = (cb: () => void, toggleBtnRef?: MutableRefObject<null>) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        !ref.current ||
        !e.target ||
        !(e.target instanceof Node) ||
        (toggleBtnRef && e.target === toggleBtnRef.current) ||
        e.composedPath().includes(ref.current)
      )
        return;

      cb();
    };

    const onEscClose = ({ code }: KeyboardEvent) => {
      if (code !== 'Escape') return;
      cb();
    };

    document.addEventListener('click', handleClickOutside, { capture: true, passive: true });
    document.addEventListener('keydown', onEscClose, { capture: true, passive: true });

    return () => {
      document.removeEventListener('click', handleClickOutside, { capture: true });
      document.removeEventListener('keydown', onEscClose, { capture: true });
    };
  }, [cb, toggleBtnRef]);

  return ref;
};
