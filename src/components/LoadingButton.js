import React from 'react';
import PropTypes from 'prop-types';
// MUI Stuff

// const useStyles = makeStyles((theme) => ({
//   padLoading: {
//     paddingLeft: 8,
//   },
// }));

function LoadingButton(props) {
  const { children, isLoading, ...rest } = props;
  // const classes = useStyles();
  return (
    <>
      <button
        {...rest}
        // variant={props.variant || 'contained'}
        // color={props.color || 'primary'}
        // disabled={isLoading || props.disabled}
      >
        {/* {isLoading && <CircularProgress size={20} />} */}
        {/* You can add your required styling to the button text/children */}
        <span className={isLoading ? 'padLoading' : null}>{children}</span>
        {/* {children} */}
      </button>
    </>
  );
}

LoadingButton.propTypes = {
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  btnVariant: PropTypes.string,
  btnClass: PropTypes.string,
  btnColor: PropTypes.string,
  btnType: PropTypes.string,
  onClickHandle: PropTypes.func,
};

export default LoadingButton;
