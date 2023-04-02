import type { ReactNode } from 'react';

import scss from './CommonContainer.module.scss';

type CommonContainerProps = { className?: string; children: ReactNode };

export const CommonContainer = ({ className = '', children }: CommonContainerProps) => (
  <div className={`${scss.commonContainer} ${className}`}>{children}</div>
);
