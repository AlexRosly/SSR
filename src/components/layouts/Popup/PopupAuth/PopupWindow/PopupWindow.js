import { useSelector } from 'react-redux';
import PopupStart from '../PopupStart/PopupStart';
import PopupPhoneConfirmation from '../PopupPhoneConfirmation/PopupPhoneConfirmation';
import PopupCodeConfirmation from '../PopupCodeConfirmation/PopupCodeConfirmation';
import PopupConfirmEmail from '../PopupConfirmEmail/PopupConfirmEmail';
import PopupSignUp from '../PopupSignUp/PopupSignUp';
import PopupEmail from '../PopupEmail/PopupEmail';
import './PopupWindow.scss';
import { authPage } from 'redux/authentication/authentication.reducer';
import { useNavigate } from 'react-router-dom';

const renderContentOrError = page => {
  switch (page) {
    case 0:
      return <PopupStart />;
    case 1:
      return <PopupPhoneConfirmation />;
    case 2:
      return <PopupCodeConfirmation />;
    case 3:
      return <PopupEmail />;
    case 4:
      return <PopupConfirmEmail />;
    case 5:
      return <PopupSignUp />;
    default:
      throw new Error('this type content not exist!');
  }
};

export default function PopupWindow() {
  const nav = useNavigate();

  const page = useSelector(authPage);

  const activePage = renderContentOrError(page);

  const handleClose = () => nav('../');

  return (
    <div id="popup" className="popup">
      <div className="popup__body">
        <div className="popup__wrapper">
          <button onClick={handleClose} className="popup__close" />
          <div className="popup__image"></div>

          {activePage}
        </div>
      </div>
    </div>
  );
}
