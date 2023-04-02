import PropTypes from 'prop-types';
import { useCountdown, useInputState, useModal } from 'hooks/UI';

import scss from './AgentAccountSettings.module.scss';
import iconSettings from 'assets/images/pages/cabinetAgent/iconSettings.svg';
import { EditForm } from '../EditForm/EditForm';
import { CancelDeleteCard } from './CancelDeleteCard';
import Modal from 'components/Common/Modal';
import { VerifyLoginModalContent } from './VerifyLoginModalContent';
import { VerifyEmailModalContent } from './VerifyEmailModalContent';
import { useState } from 'react';

export default function AgentAccountSettings({ login = '', email = '', agentId = '', dateOfRegistration = '' }) {
  const [isLoginModalOpen, , , toggleModalLogin] = useModal();
  const [isEmailModalOpen, , , toggleModalEmail] = useModal();
  const [isLoginRegistered, setIsLoginRegistered] = useState(false);
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);

  const loginInputState = useInputState({
    initValue: login,
    inputDisabled: true,
    shouldOpenModal: true,
    toggleModal: toggleModalLogin,
  });

  const emailInputState = useInputState({
    initValue: email,
    inputDisabled: true,
    shouldOpenModal: true,
    toggleModal: toggleModalEmail,
  });

  const { deleteAccount, isDeletingAccount, countdown, cancelDelete } = useCountdown();

  return (
    <section className={scss.section}>
      <div className={scss.agentSettings__header}>
        <img className={scss.agentSettings__icon} src={iconSettings} alt="account settings" />
        <p className={scss.agentSettings__title}>account settings</p>
      </div>

      <div className={scss.agentSettings__content}>
        <div className={scss.inputsWrapper}>
          <EditForm ref={loginInputState.wrapperRef} {...loginInputState} small>
            {isLoginRegistered && (
              <p className={scss.errorMessage}>
                This phone number is already registered on our site, please use another one.
              </p>
            )}

            <input
              id="id-login"
              className={scss.input}
              value={loginInputState.localInputValue}
              onChange={loginInputState.handleChange}
              disabled={loginInputState.isInputDisabled}
              type="text"
              name="login"
              minLength="3"
              required
              ref={loginInputState.inputRef}
              onFocus={loginInputState.onFocus}
            />

            <label htmlFor="id-login" className={scss.label}>
              Login
            </label>
          </EditForm>

          <EditForm ref={emailInputState.wrapperRef} {...emailInputState} small>
            {isEmailRegistered && (
              <p className={scss.errorMessage}>
                This e-mail is already registered on our site, please use another one.
              </p>
            )}

            <input
              id="id-email"
              className={scss.input}
              value={emailInputState.localInputValue}
              onChange={emailInputState.handleChange}
              disabled={emailInputState.isInputDisabled}
              type="email"
              name="email"
              minLength="3"
              required
              ref={emailInputState.inputRef}
              onFocus={emailInputState.onFocus}
            />

            <label htmlFor="id-email" className={scss.label}>
              Email
            </label>
          </EditForm>
        </div>

        <div className={scss.dateWrapper}>
          <p className={scss.agentId}>Agent ID {agentId}</p>
          <p className={scss.dateOfRegistration}>Date of registration {dateOfRegistration}</p>
        </div>

        <div className={scss.deleteAccountWrapper}>
          <button className={scss.deleteButton} type="button" onClick={deleteAccount}>
            Delete account
          </button>

          {isDeletingAccount && <CancelDeleteCard countdown={countdown} cancelDelete={cancelDelete} />}
        </div>
      </div>

      {isLoginModalOpen && (
        <Modal toggleModal={toggleModalLogin}>
          <VerifyLoginModalContent toggleModal={toggleModalLogin} setRegistered={setIsLoginRegistered} />
        </Modal>
      )}

      {isEmailModalOpen && (
        <Modal toggleModal={toggleModalEmail}>
          <VerifyEmailModalContent toggleModal={toggleModalEmail} setRegistered={setIsEmailRegistered} />
        </Modal>
      )}
    </section>
  );
}

AgentAccountSettings.propTypes = {
  login: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  agentId: PropTypes.string.isRequired,
  dateOfRegistration: PropTypes.string.isRequired,
};
