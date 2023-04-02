import { useAppDispatch } from 'features';
import { decreaseModalCount, increaseModalCount } from 'features/common';
import { useCallback, useMemo, useState } from 'react';

type isModalOpen = boolean;
type Open = () => void;
type Close = () => void;
type Toggle = () => void;

export const useModal = (): [isModalOpen, Open, Close, Toggle] => {
  const appDispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    if (!isModalOpen) {
      appDispatch(increaseModalCount());
    }

    setIsModalOpen(true);
  }, [appDispatch, isModalOpen, setIsModalOpen]);

  const closeModal = useCallback(() => {
    if (isModalOpen) {
      appDispatch(decreaseModalCount());
    }

    setIsModalOpen(false);
  }, [appDispatch, isModalOpen, setIsModalOpen]);

  const toggleModal = useCallback(() => {
    if (isModalOpen) {
      closeModal();
      return;
    }

    openModal();
  }, [isModalOpen, openModal, closeModal]);

  return useMemo(
    () => [isModalOpen, openModal, closeModal, toggleModal],
    [isModalOpen, openModal, closeModal, toggleModal]
  );
};
