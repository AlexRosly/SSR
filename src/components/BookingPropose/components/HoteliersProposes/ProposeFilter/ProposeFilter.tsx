import FilterButton from 'components/FilterButton/FilterButton';
import { FilterHouse } from './components/FilterHouse/FilterHouse';
import { TFilter } from './components/FilterHouse/TypeFilter';

import s from './ProposeFilter.module.scss';

const defaultFilersArray: TFilter[] = [
  'Хос-тели',
  'Квар-тиры',
  'Дома',
  'Ком-наты',
  'Гости-ницы',
  'Апарт-отели',
  'Capsule Hotels',
  'Guest Houses',
];

export const ProposeFilter = ({ filters = defaultFilersArray }) => (
  <div className={s.filter__container}>
    <FilterButton />
    <FilterHouse filters={filters} />
  </div>
);
