/**
 * LinkRoute is just any name for all the Link tags you will use throughout the app.
 * It is recommended to keep the styling and other stuff consistant.
 * All Link tags that are pointing to routes within this app should be improted from react-router-dom.
 */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// const useStyles = makeStyles(theme => ({
//     linkWrapper: {
//         margin: theme.spacing(2),
//         display: "inline-block"
//     }
// }))

export const LinkRoute = ({ to, children }) => {
  // const classes = useStyles();
  return (
    <Link to={to} className="nav-link">
      {children}
    </Link>
  );
};

LinkRoute.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};
