import React from 'react';
import PropTypes from 'prop-types';

// import s from './FreeButton.module.scss';

const FreeButton = ({ children, onClick, ...allyProps }) => (
  <button
    type="button"
    onClick={onClick}
    {...allyProps}
    // className={s.freeButton}
  >
    {children}
  </button>
);

FreeButton.defaultProps = {
  onClick: () => null,
  children: null,
};

FreeButton.propsTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default FreeButton;
