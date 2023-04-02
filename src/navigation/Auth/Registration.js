import { useState } from 'react';
import { useAuth } from './ProvideAuth';
import { LinkRoute } from 'components/LinkRoute';
import { ROOT } from 'navigation/CONSTANTS';
import LoadingButton from 'components/LoadingButton';
import { Footer } from 'components/Common/Footer';
// import PopupWindow from '../../components/layouts/Popup/PopupAuth/PopupWindow/PopupWindow';
import { useLocation, useNavigate } from 'react-router-dom';
import RegisterEmail from 'components/LoginSingUp/RegisterUser/RegisterUser';

export default function Registration() {
  const nav = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const { from } = location.state || { from: { pathname: '/' } };
  // console.log('SS:: req came from:', from);
  const login = () => {
    setIsLoading(true);
    // console.log('SS:: login btn clicked...');
    auth.signin().then(res => {
      // history.replace(from);
      // setIsLoading(false);
      setTimeout(() => {
        nav(from, { replace: true });
        setIsLoading(false);
      }, 2000);
      // console.log('SS:: logged in successfully by:', res);
    });
  };

  return (
    <>
      <LinkRoute to={ROOT}>Home</LinkRoute>
      <h2>Login Page</h2>
      <br />
      <p>You must log in to view the page: {from.pathname}</p>
      {/* <Button variant="contained" color="secondary" onClick={login}>Log in</Button> */}
      <LoadingButton isLoading={isLoading} onClick={login}>
        Log in
      </LoadingButton>
      <Footer />
      {/* <PopupWindow /> */}
      <RegisterEmail />
    </>
  );
}
