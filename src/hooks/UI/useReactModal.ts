import { useCallback, useState } from 'react';

export const useReactModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return [isModalOpen, openModal, closeModal] as const;
};
