import PropTypes from 'prop-types';
import scss from './Button.module.scss';

export default function Button({
  className,
  primary,
  type = 'button',
  children,
  ...props
}) {
  const buttonClass = `${
    primary ? scss.buttonPrimary : scss.buttonSecondary
  } ${className}`;

  return (
    <button className={buttonClass} type={type} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
};
