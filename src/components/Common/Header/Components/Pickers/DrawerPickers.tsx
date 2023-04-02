import { LanguagePicker } from './LanguagePicker';
import { CurrencyPicker } from './CurrencyPicker';
import scss from './DrawerPickers.module.scss';

export const DrawerPickers = () => (
  <div className={scss.drawerPickers}>
    <LanguagePicker mode="dark" />
    <CurrencyPicker mode="dark" />
  </div>
);
