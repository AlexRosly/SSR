import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import iconClose from 'assets/images/header/close.svg';
import scss from './Modal.module.scss';
import { getRefs } from 'utils';

const { modalRoot } = getRefs();

export default function Modal({ toggleModal, children }) {
  const modalRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const backdropClass = isMounted ? scss.backdrop : scss.backdropHidden;
  const modalClass = isMounted ? scss.modal : scss.modalHidden;

  useEffect(() => {
    const onEscCloseModal = ({ code }) => {
      if (code !== 'Escape') return;
      toggleModal();
    };

    document.addEventListener('keydown', onEscCloseModal);
    setIsMounted(true);

    return () => {
      document.removeEventListener('keydown', onEscCloseModal);
    };
  }, [toggleModal]);

  const handleBackdropClick = useCallback(
    e => {
      if (e.currentTarget !== e.target) return;
      toggleModal();
    },
    [toggleModal]
  );

  useEffect(() => modalRef.current.focus(), []);

  return createPortal(
    <div className={backdropClass} onClick={handleBackdropClick}>
      <div className={modalClass} ref={modalRef}>
        <button className={scss.closeButton} type="button" onClick={toggleModal}>
          <img src={iconClose} alt="close" />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
