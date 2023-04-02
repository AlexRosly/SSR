import { useMemo, useRef, useState } from 'react';
import { useAppSelector } from 'features';
import { getScrollWidth } from 'utils';
import { selectIsModalOpen } from 'features/common';

const getBrowserScrollWidth = () => {
  document.body.style.overflow = 'scroll';
  const browserScrollWidth = getScrollWidth(document.body);
  document.body.style.overflow = 'hidden';

  return browserScrollWidth;
};

const browserScrollWidth = getBrowserScrollWidth();

export const useToggleNoScroll = () => {
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const [scrollWidth] = useState(browserScrollWidth);
  const ref = useRef<HTMLDivElement | null>(null);

  return useMemo(() => ({ isModalOpen, ref, scrollWidth }), [isModalOpen, ref, scrollWidth]);
};
