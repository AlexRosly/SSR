import React from 'react';
import classNames from 'classnames';

const Image = ({ src, alt, className, width, height, ...attrs }) => {
  if (!src) {
    // src = `https://via.placeholder.com/${width}x${height}`;
    src = `https://i.ibb.co/nfGwMww/Rectangle-96.jpg/${width}x${height}`; // заглушка временная
  }

  const classes = classNames(className);

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      width={width}
      height={height}
      {...attrs}
    />
  );
};

Image.defaultProps = {
  src: '',
  alt: 'image name',
  className: '',
  width: 100,
  height: 100,
};
export default Image;
