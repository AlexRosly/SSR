import React from 'react';
import PropTypes from 'prop-types';

const HotelIcon = ({ children, ...allyProps }) => (
  <div {...allyProps}>{children}</div>
);

HotelIcon.defaultProps = {
  children: null,
};

HotelIcon.propsTypes = {
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default HotelIcon;
