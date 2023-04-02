import sprite from 'assets/images/createObject/sprite-object.svg';

type ObjectIconProps = { className: string; sprite?: string; iconId: string; ariaHidden?: boolean };

export const ObjectIcon = ({ className, iconId, ariaHidden }: ObjectIconProps) => (
  <svg className={className} aria-hidden={ariaHidden}>
    <use href={`${sprite}#${iconId}`} />
  </svg>
);
