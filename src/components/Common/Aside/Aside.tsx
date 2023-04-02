import type { ReactNode } from 'react';
import { Footer } from '../Footer';
import { Reviews } from '../Reviews';
import s from './Aside.module.scss';

export const Aside = ({ children }: { children?: ReactNode }) => (
  <aside className={s.aside}>
    <Reviews />
    {children}
    <Footer />
  </aside>
);
