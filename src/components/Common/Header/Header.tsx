import type { ReactNode } from 'react';
import { CommonContainer } from '../CommonContainer';
import { HeaderContent } from './Components';
import scss from './Header.module.scss';

export const HeaderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <header className={scss.header}>
      <CommonContainer>{children}</CommonContainer>
    </header>
  );
};

export const Header = ({ children }: { children: ReactNode }) => (
  <HeaderWrapper>
    <HeaderContent>{children}</HeaderContent>
  </HeaderWrapper>
);
