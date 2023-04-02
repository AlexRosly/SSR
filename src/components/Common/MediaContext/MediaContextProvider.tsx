import type { ReactNode } from 'react';
import { mediaContext, useMediaQueryMatches } from 'hooks/UI';

export const MediaContextProvider = ({ children }: { children: ReactNode }) => {
  const ctx = useMediaQueryMatches();
  return <mediaContext.Provider value={ctx}>{children}</mediaContext.Provider>;
};
