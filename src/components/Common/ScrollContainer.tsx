import type { ReactNode } from 'react';
import { useMedia } from 'hooks/UI';
import { useToggleNoScroll } from 'hooks/UI/modal';
import scss from './ScrollContainer.module.scss';

export const ScrollContainer = ({ children }: { children: ReactNode }) => {
  const { isMobile, isTablet, isCoarsePointer } = useMedia();
  const { isModalOpen, scrollWidth, ref } = useToggleNoScroll();

  const isMobileAndCoarse = isMobile && isCoarsePointer;
  const isTabletAndCoarse = isTablet && isCoarsePointer;

  const marginRight = isModalOpen && !isMobileAndCoarse && !isTabletAndCoarse ? `${scrollWidth}px` : '0';
  const overflowY = isModalOpen ? scss.overflowYHidden : scss.overflowYScroll;

  return (
    <div className={`${scss.AppScrollContainer} ${overflowY}`} style={{ marginRight }} ref={ref}>
      {children}
    </div>
  );
};
