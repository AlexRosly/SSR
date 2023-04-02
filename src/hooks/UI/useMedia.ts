import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const MOBILE_PORTRAIT = 320;
const TABLET_PORTRAIT = 768;
const DESKTOP = 1200;
const PRE_DESKTOP = DESKTOP - 1;

export const BREAKPOINTS = {
  MOBILE_PORTRAIT,
  TABLET_PORTRAIT,
  PRE_DESKTOP,
  DESKTOP,
};

const tabletMQ = `(min-width: ${TABLET_PORTRAIT}px) and (max-width: ${PRE_DESKTOP}px)`;
const desktopMQ = `(min-width: ${DESKTOP}px)`;
const isCoarse = '(pointer: coarse)';

export const makeMediaQueryList = (mq: string) => window.matchMedia(mq);
const isCoarseInput = makeMediaQueryList(isCoarse);
const isTabletMQ = makeMediaQueryList(tabletMQ);
export const isDesktopMQ = makeMediaQueryList(desktopMQ);

const getMedia = (matches: boolean) => {
  if (matches) return 'tablet';
  return window.innerWidth < TABLET_PORTRAIT ? 'mobile' : 'desktop';
};

const mediaInitState = {
  media: getMedia(isTabletMQ.matches),
  isCoarsePointer: isCoarseInput.matches,
};

type MediaContext = { isMobile: boolean; isTablet: boolean; isDesktop: boolean; isCoarsePointer: boolean };

const initState: MediaContext = {
  isMobile: mediaInitState.media === 'mobile',
  isTablet: mediaInitState.media === 'tablet',
  isDesktop: mediaInitState.media === 'desktop',
  isCoarsePointer: mediaInitState.isCoarsePointer,
};

export const mediaContext = createContext<MediaContext>(initState);

export const useMedia = () => useContext(mediaContext);

export const useMediaQueryMatches = () => {
  const [{ isMobile, isTablet, isDesktop, isCoarsePointer }, setMedia] = useState<MediaContext>(initState);

  useEffect(() => {
    const updateIsTabletMQ = ({ matches }: MediaQueryListEvent) => {
      const newMedia = getMedia(matches);
      setMedia(prev => ({
        ...prev,
        isMobile: newMedia === 'mobile',
        isTablet: newMedia === 'tablet',
        isDesktop: newMedia === 'desktop',
      }));
    };

    const updateIsCoarseInput = ({ matches }: MediaQueryListEvent) => {
      setMedia(prev => ({ ...prev, isCoarsePointer: matches }));
    };

    isTabletMQ.addEventListener('change', updateIsTabletMQ, { passive: true });
    isCoarseInput.addEventListener('change', updateIsCoarseInput, { passive: true });

    return () => {
      isTabletMQ.removeEventListener('change', updateIsTabletMQ);
      isCoarseInput.removeEventListener('change', updateIsCoarseInput);
    };
  }, []);

  return useMemo(
    () => ({ isMobile, isTablet, isDesktop, isCoarsePointer }),
    [isDesktop, isMobile, isTablet, isCoarsePointer]
  );
};
