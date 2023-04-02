import { useClickOutside, useMedia, useStateToggle } from 'hooks/UI';
import { HeaderButton } from '../../Components/HeaderButton';
import scss from './DepositIndicator.module.scss';

type AccountDetailsProps = {
  hasDeposit: boolean;
  balance: { deposit: string; debt: string };
};

const AccountDetails = ({ hasDeposit, balance }: AccountDetailsProps) => {
  const { isDesktop } = useMedia();

  const topLabelClassName = `header-ScoreBox ${hasDeposit ? '' : 'dislike-h'}`;
  const topLabel = hasDeposit ? 'Аккаунт активен' : 'Аккаунт не активен';

  const labelConditionsForAccountStop = hasDeposit
    ? 'Если Ваша задолженность перед нашим сервисом превысит 20 USD, то ваш аккаунт будет приостановлен.'
    : 'Ваша задолженность перед нашим сервисом превысила 20 USD. Ваш аккаунт приостановлен до погашения задолженности.';

  const balanceAmountClassName = isDesktop ? 'price-ScoreBox' : scss.balanceAmountMobile;

  return (
    <>
      <p className={topLabelClassName}>{topLabel}</p>
      <p className="main-ScoreBox">Вы получаете запросы на бронирование.</p>
      <p className="main-ScoreBox">Вы можете предлагать бронирования в ваших объектах пользователям.</p>
      <p className="main-ScoreBox">Вы можете заключать договора бронирования.</p>

      <p className="text-ScoreBox">{labelConditionsForAccountStop}</p>

      <p className="value-ScoreBox dagger">
        Задолженность <span className={balanceAmountClassName}>{balance.debt} USD</span>
      </p>

      <p className="value-ScoreBox good">
        Депозит <span className={balanceAmountClassName}>{balance.deposit} USD</span>
      </p>

      <div className="deposit-btn-style">
        <button className="deposit-btn">Пополнить депозит</button>
      </div>
    </>
  );
};

const DepositStatus = ({
  hasDeposit,
  toggleHasDeposit,
  overlayClassName,
}: {
  hasDeposit: boolean;
  toggleHasDeposit: () => void;
  overlayClassName?: string;
}) => {
  const balance = { deposit: hasDeposit ? '33' : '0', debt: hasDeposit ? '0' : '33' };

  return (
    <div className={`${scss.depositStatus} ${overlayClassName}`}>
      <HeaderButton
        buttonClassName={scss.toggleHasDepositBtn}
        tooltipClassName={scss.tooltip}
        onClick={toggleHasDeposit}
        buttonTooltip={hasDeposit ? 'deposit' : 'debt'}
      >
        {hasDeposit ? '💰' : '🙀'}
      </HeaderButton>

      <AccountDetails balance={balance} hasDeposit={hasDeposit} />
    </div>
  );
};

export const DepositIndicator = ({
  buttonClassName,
  overlayClassName,
  tooltipClassName,
  depositIndicatorClassName,
}: {
  buttonClassName?: string;
  overlayClassName?: string;
  tooltipClassName?: string;
  depositIndicatorClassName?: string;
}) => {
  const [hasDeposit, , , toggleHasDeposit] = useStateToggle(true);
  const [showDetails, , hideDetails, toggleShowDetails] = useStateToggle();

  const containerRef = useClickOutside(hideDetails);

  const iconClassName = hasDeposit ? scss.thumbUp : scss.thumbDown;

  return (
    <div className={`${scss.depositIndicator} ${depositIndicatorClassName}`} ref={containerRef}>
      <HeaderButton
        iconId="thumb-up"
        buttonClassName={buttonClassName}
        tooltipClassName={tooltipClassName}
        iconClassName={iconClassName}
        buttonTooltip={``}
        onClick={toggleShowDetails}
      />

      {showDetails && (
        <DepositStatus
          overlayClassName={overlayClassName}
          hasDeposit={hasDeposit}
          toggleHasDeposit={toggleHasDeposit}
        />
      )}
    </div>
  );
};
