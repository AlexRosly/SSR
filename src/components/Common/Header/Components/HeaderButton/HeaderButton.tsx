import type { HeaderSpriteIcons } from 'types';
import { ReactNode } from 'react';
import { IconHeader } from '../IconHeader';
import scss from './HeaderButton.module.scss';

const emptyFn = () => {};

export const HeaderButton = ({
  unreadMsgs,
  buttonClassName,
  tooltipClassName,
  iconId,
  iconClassName = scss.headerIcon,
  onClick = emptyFn,
  buttonTooltip,
  children,
}: {
  unreadMsgs?: number;
  buttonClassName?: string;
  tooltipClassName?: string;
  iconId?: HeaderSpriteIcons;
  iconClassName?: string;
  onClick?: () => void;
  buttonTooltip: string;
  children?: ReactNode;
}) => {
  const buttonClassNameApplied = `${scss.headerButton} ${buttonClassName}`;

  const tooltipClassNameApplied = `${scss.tooltipOverlay} ${scss.delay} ${tooltipClassName}`;

  return (
    <div className={scss.headerButtonWrapper}>
      <button className={buttonClassNameApplied} onClick={onClick} type="button">
        {iconId && <IconHeader className={`${iconClassName} ${scss.headerIcon}`} iconId={iconId} />}
        {children}

        {unreadMsgs ? <span className={scss.unreadMsgs}>{unreadMsgs}</span> : null}
      </button>

      {buttonTooltip && (
        <div className={tooltipClassNameApplied}>
          <p className={scss.buttonTooltip}>{buttonTooltip}</p>
        </div>
      )}
    </div>
  );
};
