import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const useInputState = ({ initValue, inputDisabled = false, shouldOpenModal = false, toggleModal }) => {
  const [localInputValue, setLocalInputValue] = useState(initValue);
  const [isInputDisabled, setIsInputDisabled] = useState(inputDisabled);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [shouldReset, setShouldReset] = useState(false);

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      setShowSaveButton(false);
      setIsInputDisabled(true);
      setShouldReset(false);

      if (!shouldOpenModal) return;
      toggleModal();
    },
    [shouldOpenModal, toggleModal]
  );

  const handleChange = useCallback(e => {
    setLocalInputValue(e.target.value);
  }, []);

  const edit = useCallback(async () => {
    await setIsInputDisabled(false);
    inputRef.current.focus();
  }, []);

  const onFocus = useCallback(() => {
    setShowSaveButton(true);
    setShouldReset(true);
  }, []);

  useEffect(() => {
    if (isInputDisabled || !shouldReset) return;

    const handleClickOutside = e => {
      if (!wrapperRef.current || wrapperRef.current.contains(e.target)) return;

      setShowSaveButton(false);
      setIsInputDisabled(true);
      setShouldReset(false);
      setLocalInputValue(initValue);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [initValue, isInputDisabled, localInputValue, shouldReset]);

  const isSubmitButtonDisabled = isInputDisabled && localInputValue.trim().length < 1;
  const showEditButton = isInputDisabled;

  const result = useMemo(
    () => ({
      wrapperRef,
      handleSubmit,
      localInputValue,
      handleChange,
      isInputDisabled,
      inputRef,
      onFocus,
      showSaveButton,
      isSubmitButtonDisabled,
      showEditButton,
      edit,
    }),
    [
      handleSubmit,
      localInputValue,
      handleChange,
      isInputDisabled,
      onFocus,
      showSaveButton,
      isSubmitButtonDisabled,
      showEditButton,
      edit,
    ]
  );

  return result;
};

useInputState.propTypes = {
  initValue: PropTypes.string.isRequired,
  inputDisabled: PropTypes.bool,
  shouldOpenModal: PropTypes.bool,
  toggleModal: PropTypes.func,
};
