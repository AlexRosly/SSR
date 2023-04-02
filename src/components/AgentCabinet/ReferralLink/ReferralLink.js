import scss from './ReferralLink.module.scss';

import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

const copyTextToClipboard = async text => {
  if (!('clipboard' in navigator)) {
    return console.log('Clipboard API is not supported');
  }

  try {
    return await navigator.clipboard.writeText(text);
  } catch (error) {
    console.log(error);
  }
};

const Notify = ({ text }) => <p className={scss.notification}>{text}</p>;

export default function ReferralLink({ to, text, icon }) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    await copyTextToClipboard(to);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [to]);

  return (
    <section className={scss.section}>
      <img className={scss.iconPeople} src={icon} alt="Two people icon" />

      <div className={scss.relativeWrapper}>
        {copied && <Notify text="ссылка скопирована" />}

        <button className={scss.copyButton} type="button" onClick={copy}>
          {to}
        </button>

        <p className={scss.textSubAccent}>{text}</p>
      </div>
    </section>
  );
}

ReferralLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
};
