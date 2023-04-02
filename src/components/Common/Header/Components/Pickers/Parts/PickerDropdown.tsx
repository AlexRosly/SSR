import type { ReactNode } from 'react';
import { usePickerContext } from '../PickerContext';
import { DropdownContent } from '../PickerContext';
import scss from './PickerDropdown.module.scss';

export const PickerDropdown = ({ children }: { children: ReactNode }) => {
  const [{ isDropdownOpen, isDark }] = usePickerContext();

  const dark = isDark ? scss.dark : '';

  return isDropdownOpen ? (
    <DropdownContent className={`${scss.pickerDropdown} ${dark}`}>{children}</DropdownContent>
  ) : null;
};
