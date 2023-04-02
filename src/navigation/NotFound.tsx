import { Navigate, useLocation } from 'react-router-dom';
import { ROOT } from './CONSTANTS';

const NotFound = () => {
  const from = useLocation();
  const to = { pathname: ROOT, state: { from } };
  return <Navigate to={to} replace />;
};

export default NotFound;
