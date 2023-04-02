import classNames from 'classnames';
import './SendBlock.scss';

export const SendBlock = ({ active = false }) => {
  return (
    <div
      className={classNames('send-block', {
        'send-block--active': active,
      })}
      id="not-send"
    >
      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 13.7143L15 6.85714L0 0V5.33333L10.7143 6.85714L0 8.38095V13.7143Z" fill="#4C4C4C" />
      </svg>

      <p>Вы лично отправили предложения этим пользователям индивидуально</p>
    </div>
  );
};
