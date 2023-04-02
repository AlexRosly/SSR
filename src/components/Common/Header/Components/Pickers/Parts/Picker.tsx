import type { ReactNode } from 'react';
import scss from './Picker.module.scss';

type PickerProps = { children: ReactNode };

export const Picker = ({ children }: PickerProps) => <div className={scss.picker}>{children}</div>;
