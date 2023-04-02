import type { ReactNode } from 'react';

type CloseModalButtonProps = {
  closeModal: () => void;
  className: string;
  children: ReactNode;
  type?: 'button' | 'submit';
};

export const CloseModalButton = ({ closeModal, className, children, type = 'button' }: CloseModalButtonProps) => (
  <button onClick={closeModal} className={className} type={type === 'submit' ? 'submit' : 'button'} aria-label="close">
    {children}
  </button>
);
