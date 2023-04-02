import { useState } from 'react';

type TtoggloFunc = () => [boolean, () => void, () => void];

export const useToggleModal: TtoggloFunc = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return [isOpen, onOpen, onClose];
};
