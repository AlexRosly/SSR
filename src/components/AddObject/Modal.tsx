import type { ReactNode } from 'react';
import ReactModal from 'react-modal';
import { getRefs } from 'utils';

const { root, modalRoot } = getRefs();

ReactModal.setAppElement(root);

const parentSelector = () => modalRoot;

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  onRequestClose: () => void;
  contentClassName: string | ReactModal.Classes;
  overlayClassName: string | ReactModal.Classes;
  closeTimeoutMS: number;
  contentLabel?: string;
};

// object__window
// overlayClassName="object__backdrop"

/*
  general modal - may use in other components.
*/

export const Modal = ({
  isOpen,
  children,
  onRequestClose,
  contentClassName,
  overlayClassName,
  closeTimeoutMS,
  contentLabel = 'Modal',
}: ModalProps) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={contentClassName}
    overlayClassName={overlayClassName}
    closeTimeoutMS={closeTimeoutMS}
    contentLabel={contentLabel}
    portalClassName="react-modal__portal"
    htmlOpenClassName="ReactModal__Html--open"
    parentSelector={parentSelector}
  >
    <>{children}</>
  </ReactModal>
);
