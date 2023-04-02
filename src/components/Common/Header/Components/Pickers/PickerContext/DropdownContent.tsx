import type { Mode } from 'types';
import { ReactNode, useCallback } from 'react';
import { useClickOutside } from 'hooks/UI';

import { closePicker } from './pickerActions';
import { usePickerContext } from './usePickerContext';

import scss from './DropdownContent.module.scss';

type DropdownContentProps = { children: ReactNode; className?: string; mode?: Mode };

export const DropdownContent = ({ children, className = '', mode }: DropdownContentProps) => {
  const [, dispatch] = usePickerContext();

  const closeDropdown = useCallback(() => {
    dispatch(closePicker());
  }, [dispatch]);

  const containerRef = useClickOutside(closeDropdown);

  const dark = mode === 'dark' ? scss.dark : '';
  const dropdownContentClassName = `${scss.dropdownContent} ${className} ${dark}`;

  return (
    <div className={dropdownContentClassName} ref={containerRef}>
      {children}
    </div>
  );
};
