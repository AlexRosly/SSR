import type { HeaderSpriteIcons } from 'types';
import newSprite from 'assets/icons/Header/SubheaderHotelier/header-sprite.svg';

export const IconHeader = ({ className, iconId }: { className: string; iconId: HeaderSpriteIcons }) => (
  <svg className={className} aria-hidden>
    <use href={`${newSprite}#${iconId}`} />
  </svg>
);
