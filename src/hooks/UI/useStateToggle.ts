import { useCallback, useMemo, useState } from 'react';

type IsTrue = boolean;
type Toggle = () => void;
type SetTrue = () => void;
type SetFalse = () => void;

export const useStateToggle = (init = false): [IsTrue, SetTrue, SetFalse, Toggle] => {
  const [isTrue, setIsTrue] = useState(init);

  const setTrue = useCallback(() => {
    setIsTrue(true);
  }, []);

  const setFalse = useCallback(() => {
    setIsTrue(false);
  }, []);

  const toggle = useCallback(() => {
    setIsTrue(prev => !prev);
  }, []);

  return useMemo(() => [isTrue, setTrue, setFalse, toggle], [isTrue, setTrue, setFalse, toggle]);
};
