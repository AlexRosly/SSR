import { useEffect } from 'react';
import { BREAKPOINTS } from '../useMedia';

const { DESKTOP } = BREAKPOINTS;

export const useCloseOnResize = (cb: () => void) => {
  useEffect(() => {
    const windowOnResize = () => {
      if (window.innerWidth >= DESKTOP) cb();
    };

    window.addEventListener('resize', windowOnResize, { passive: true });

    return () => {
      window.removeEventListener('resize', windowOnResize);
    };
  }, [cb]);
};
