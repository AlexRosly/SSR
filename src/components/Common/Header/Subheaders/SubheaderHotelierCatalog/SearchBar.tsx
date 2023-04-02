import type { ChangeEvent, FormEvent } from 'react';
import type { EntityId } from '@reduxjs/toolkit';
import type { Mode } from 'types';
import { useCallback, useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useMedia, useStateToggle } from 'hooks/UI';
import { useAppDispatch, useAppSelector } from 'features';
import { selectActiveLang } from 'features/common';
import { useGetAutocompleteQuery, useLazyGetAutocompleteQuery } from 'features/autocomplete';
import { chooseActiveLocation, selectActiveSearchId, selectSearchTerm, setSearchTerm } from 'features/search';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

import scss from './SearchBar.module.scss';

const useGetCityCountryState = () => {
  const lang = useAppSelector(selectActiveLang);
  const search = useAppSelector(selectSearchTerm);
  const activeSearchId = useAppSelector(selectActiveSearchId);

  const result = useGetAutocompleteQuery(
    { search, lang },
    {
      selectFromResult: ({ data }) => {
        const item = data?.entities?.[activeSearchId];
        return {
          city: item?.cityName ?? '',
          country: item?.country ?? '',
          state: item?.stateName ?? '',
        };
      },
      skip: !activeSearchId,
    }
  );

  return result;
};

const InputOverlay = ({ mode }: { mode?: Mode }) => {
  const { city, state, country } = useGetCityCountryState();
  console.log({ city, state, country });

  const dark = mode === 'dark' ? scss.dark : '';

  return (
    <p className={`${scss.inputOverlay} ${dark}`}>
      <span className={`${scss.cityName} ${dark}`}>{city}</span>
      <span className={`${scss.stateName} ${dark}`}>{state}</span>
      <span className={`${scss.country} ${dark}`}>{country}</span>
    </p>
  );
};

type SearchInputProps = {
  mode?: Mode;
  showInputOverlay: boolean;
  closeInputOverlay: () => void;
};

const SearchInput = ({ mode, showInputOverlay, closeInputOverlay }: SearchInputProps) => {
  const searchTerm = useAppSelector(selectSearchTerm);
  const onChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const searchOnInputDebounced300ms = e.target.value.trim();
    console.log({ searchOnInputDebounced300ms });
  }, []);

  const debouncedOnChangeSearch = useMemo(() => debounce(onChangeSearch, 300), [onChangeSearch]);

  useEffect(() => {
    return () => {
      debouncedOnChangeSearch.cancel();
    };
  }, [debouncedOnChangeSearch]);

  const dark = mode === 'dark' ? scss.dark : '';

  return (
    <label className={`${scss.searchBarLabel} ${dark}`}>
      <input
        type="search"
        name="search"
        className={`${scss.searchBarInput} ${dark}`}
        defaultValue={searchTerm}
        onChange={debouncedOnChangeSearch}
        onFocus={closeInputOverlay}
        maxLength={50}
        autoComplete="off"
        spellCheck="false"
        placeholder="Search city"
        aria-live="polite"
      />

      {showInputOverlay && <InputOverlay mode={mode} />}
    </label>
  );
};

type AutocompleteItemProps = {
  mode: Mode;
  autocompleteItemId: EntityId;
  openInputOverlay: () => void;
};

const AutocompleteItem = ({ mode, autocompleteItemId, openInputOverlay }: AutocompleteItemProps) => {
  const { isDesktop } = useMedia();
  const lang = useAppSelector(selectActiveLang);
  const search = useAppSelector(selectSearchTerm);

  const appDispatch = useAppDispatch();

  const { item } = useGetAutocompleteQuery(
    { search, lang },
    { selectFromResult: ({ data }) => ({ item: data?.entities?.[autocompleteItemId] }) }
  );

  const onClickSelectActiveObjectId = useCallback(() => {
    appDispatch(chooseActiveLocation(autocompleteItemId));
    openInputOverlay();
  }, [appDispatch, autocompleteItemId, openInputOverlay]);

  if (!item) return null;
  const { cityName, stateName, country } = item;

  const dark = mode === 'dark' && !isDesktop ? scss.dark : '';

  return (
    <li className={`${scss.autocompleteItem} ${dark}`}>
      <button className={`${scss.autocompleteButton} ${dark}`} onClick={onClickSelectActiveObjectId} type="button">
        <span className={`${scss.cityName} ${dark}`}>{cityName}</span>
        <span className={`${scss.stateName} ${dark}`}>{stateName}</span>
        <span className={`${scss.country} ${dark}`}>{country}</span>
      </button>
    </li>
  );
};

const AutocompleteList = ({ mode, openInputOverlay }: { mode: Mode; openInputOverlay: () => void }) => {
  const lang = useAppSelector(selectActiveLang);
  const search = useAppSelector(selectSearchTerm);
  const { isMobile } = useMedia();

  const { data } = useGetAutocompleteQuery(
    { search, lang },
    { selectFromResult: ({ data }) => ({ data }), skip: !search }
  );

  const dark = mode === 'dark' && isMobile ? scss.dark : '';

  return (
    <ul className={`${scss.autocompleteList} ${dark}`}>
      {data?.ids.map(id => (
        <AutocompleteItem key={id} autocompleteItemId={id} openInputOverlay={openInputOverlay} mode={mode} />
      ))}
    </ul>
  );
};

export const SearchBar = ({ mode }: { mode?: Mode }) => {
  const lang = useAppSelector(selectActiveLang);

  const [showInputOverlay, openInputOverlay, closeInputOverlay] = useStateToggle(false);

  const [getAutocomplete, { isLoading, isSuccess }] = useLazyGetAutocompleteQuery();

  const appDispatch = useAppDispatch();

  const onSubmitSearchLocation = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isLoading) return;
      const form = e.currentTarget;
      const formData = new FormData(form);
      const search = formData.get('search')?.toString().trim();
      if (!search) return;
      console.log({ search });
      appDispatch(setSearchTerm(search));

      try {
        const payload = await getAutocomplete({ search, lang }, true).unwrap();
        console.log('fulfilled', payload);
      } catch (error) {
        console.log('rejected', error);
      }
    },
    [appDispatch, getAutocomplete, isLoading, lang]
  );

  const showAutocompleteList = !showInputOverlay && isSuccess;

  return (
    <div className={scss.searchBarWrapper}>
      <form onSubmit={onSubmitSearchLocation} className={scss.searchBarForm}>
        <div className={scss.spinnerWrapper}>{isLoading && <LoadingSpinner size="10px" />}</div>

        <SearchInput mode={mode} showInputOverlay={showInputOverlay} closeInputOverlay={closeInputOverlay} />
      </form>

      {showAutocompleteList && <AutocompleteList openInputOverlay={openInputOverlay} mode="dark" />}
    </div>
  );
};
