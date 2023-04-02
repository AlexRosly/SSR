import s from './FilterHouse.module.scss';
import icon from 'components/BookingPropose/media/house-icon.svg';
import { useState } from 'react';
import { TFilter } from './TypeFilter';

interface IProps {
  filters: TFilter[];
}

export const FilterHouse = ({ filters }: IProps) => {
  const [selectedFilter, setSelectedFilter] = useState<TFilter[]>([]);

  const isActive = (filtersName: TFilter): boolean => {
    return selectedFilter.includes(filtersName);
  };

  const handleSelect = (filtersName: TFilter | never) => {
    if (isActive(filtersName)) {
      const newFilter = [...selectedFilter];
      newFilter.splice(newFilter.indexOf(filtersName), 1);
      setSelectedFilter(newFilter);
    } else {
      setSelectedFilter(pr => [...pr, filtersName]);
    }
  };

  return (
    <div className={s.filter__container}>
      {filters.map((filtersName, id) => {
        return (
          <div className={s.house__container} key={id} onClick={() => handleSelect(filtersName)}>
            <svg className={isActive(filtersName) ? `${s.house} ${s.active}` : s.house}>
              <use href={` ${icon}#house`} />
            </svg>
            <p className={s.house__text}> {filtersName}</p>
            <div className={s.house__overlay}> {isActive(filtersName) ? '' : 'не '}показаны на странице</div>
          </div>
        );
      })}
    </div>
  );
};
