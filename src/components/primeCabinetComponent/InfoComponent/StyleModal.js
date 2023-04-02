const modalContent = {
  top: '126px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '320px',
  minHeight: '490px',
  padding: 0,
  background: '#FFFFFF',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  border: 'none',
  position: 'absolute',
  overflow: 'visible',
};

const modalOverlay = {
  position: 'fixed',
  background: 'rgba(76, 76, 76, 0.28)',
  backdropFilter: ' blur(15px)',
  zIndex: '14',
};

const customStyles = {
  content: modalContent,
  overlay: modalOverlay,
};

export default customStyles;
