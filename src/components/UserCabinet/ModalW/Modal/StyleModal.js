const defaultModalContent = {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '50%',
  transform: 'translate(-50%, -50%)',
  // width: '1016px',
  // maxWidth: '1016px',
  height: '100vh',
  padding: '0',
  border: 'none',
};

const defaultModalOverlay = {
  background: '#3a3a3a',
  zIndex: '2147483641',
};

export const modalStyle = style => {
  return {
    content: { ...defaultModalContent, ...style.content },
    overlay: { ...defaultModalOverlay, ...style.overlay },
  };
};
