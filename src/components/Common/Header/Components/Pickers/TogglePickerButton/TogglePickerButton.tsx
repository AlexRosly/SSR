import type { ReactNode } from 'react';
import { useCallback } from 'react';
import { usePickerContext } from '../PickerContext';
import { togglePicker } from '../PickerContext/pickerActions';
import { IconHeader } from '../../IconHeader';

import scss from './TogglePickerButton.module.scss';

export const ToggleArrow = ({ isActive, className = '' }: { isActive?: boolean; className?: string }) => (
  <IconHeader iconId="arrow-up-chevron" className={`${scss.arrow} ${className} ${isActive ? scss.active : ''}`} />
);

type GetButtonClassName = { className?: string | { separate: string } };

const useGetButtonClassName = ({ className = '' }: GetButtonClassName) => {
  const [{ isDark }] = usePickerContext();
  const dark = isDark ? scss.dark : '';

  return {
    buttonClassName:
      typeof className === 'object' ? `${className.separate} ${dark}` : `${scss.toggleButton} ${className} ${dark}`,
    iconClassName: dark,
  };
};

export type TogglePickerButtonProps = GetButtonClassName & { title?: string; children: ReactNode };

export const TogglePickerButton = ({ className, title, children }: TogglePickerButtonProps) => {
  const [{ isDropdownOpen }, dispatch] = usePickerContext();
  const { buttonClassName, iconClassName } = useGetButtonClassName({ className });

  const toggleDropdown = useCallback(() => {
    dispatch(togglePicker());
  }, [dispatch]);

  return (
    <button className={buttonClassName} onClick={toggleDropdown} type="button" title={title}>
      <div className={scss.buttonText}>{children}</div>

      <ToggleArrow isActive={isDropdownOpen} className={iconClassName} />
    </button>
  );
};
