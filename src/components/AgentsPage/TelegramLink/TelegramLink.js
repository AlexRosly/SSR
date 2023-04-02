import PropTypes from 'prop-types';
import scss from './TelegramLink.module.scss';

import iconTelegram from 'assets/images/pages/agents/iconTelegram.svg';

export default function TelegramLink({ to, actionWord, callToAction, text }) {
  return (
    <section className={scss.section}>
      <img className={scss.iconTelegram} src={iconTelegram} alt="telegram" />

      <div className={actionWord ? scss.linkWrapperWithActionWord : scss.linkWrapper}>
        <p className={scss.callToAction}>
          {actionWord && <span className={scss.actionWord}>{actionWord}</span>}

          <span>{callToAction}</span>
        </p>

        <a className={scss.telegramLink} href={to} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </div>
    </section>
  );
}

TelegramLink.propTypes = {
  to: PropTypes.string,
  actionWord: PropTypes.string,
  callToAction: PropTypes.string,
  text: PropTypes.string,
};
