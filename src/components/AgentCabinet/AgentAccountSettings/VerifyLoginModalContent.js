import { useState } from 'react';
import PropTypes from 'prop-types';
import scss from './VerifyLoginModalContent.module.scss';

export const VerifyLoginModalContent = ({ toggleModal, setRegistered }) => {
  const [error, setError] = useState(null);
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const verifyLoginCode = form.elements.verifyLoginCode.value.trim();

    if (verifyLoginCode === '1111' || verifyLoginCode === '2222') {
      setError(null); // TODO: add real API  for login/phone
      setRegistered(true);
      toggleModal();
    } else {
      setError('Incorrect verification code - try again');
      setRegistered(false);
    }
  };

  return (
    <div className={scss.verifyLoginModalContent}>
      <p className={scss.callToAction}>
        To complete, enter the confirmation code, which we sent to your E-mail address
      </p>

      <form className={scss.verifyForm} onSubmit={handleSubmit}>
        <label className={scss.verifyLabel}>
          {error && (
            <p className={scss.verificationError}>
              <>{error}</>
            </p>
          )}

          <div className={scss.verifyInputWrapper}>
            <input
              className={scss.verifyInput}
              name="verifyLoginCode"
              type="text"
              autoComplete="off"
              minLength="4"
              maxLength="4"
              placeholder=" "
              title="Enter six digits"
            />

            <span className={scss.dot}></span>
          </div>
        </label>

        <p className={scss.codeValidDuration}>confirmation code valid 2 minutes</p>

        <button className={scss.sendButton} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

VerifyLoginModalContent.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  setRegistered: PropTypes.func.isRequired,
};
