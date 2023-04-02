import Modal from 'react-modal';
import { modalStyle } from './StyleModal';

Modal.setAppElement('#root');

export const ModalWindow = ({ children, modalOptions, style }) => {
  return (
    <Modal
      isOpen={modalOptions.isOpen}
      onRequestClose={modalOptions.onClose}
      style={modalStyle({ content: style?.content, overlay: style?.overlay })}
      contentLabel="Modal window with context"
    >
      {children}
    </Modal>
  );
};
