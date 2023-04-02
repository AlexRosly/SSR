import { NotSendBlockIcon } from './iconComponents/NotSendBlockIcon';
import './NotSendBlock.scss';
export const NotSendBlock = () => {
  return (
    <div className="notSendBlock">
      <div className="notSendBlock__wrapper">
        <div className="notSendBlock__wrapper-text">
          <p className="notSendBlock__title">Сейчас нет действующих предложений бронирования,</p>

          <div>
            <p className="notSendBlock__subtitle">Которые вы отправили пользователям - индивидуально</p>
          </div>
        </div>

        <NotSendBlockIcon />
      </div>
    </div>
  );
};
