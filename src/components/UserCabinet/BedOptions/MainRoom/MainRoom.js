import s from '../BedOptions.module.scss';

import { usePopover } from 'hooks/UI';
import { getImage } from '../image/getImage';

export const MainRoom = ({ bed, styled }) => {
  const [parentPopperAttributes, childPopperAttributes] = usePopover({
    offset: [0, 13],
    placement: 'top',
  });

  return (
    <>
      <div {...parentPopperAttributes} className={s.room_icon_block} style={styled}>
        {getImage(bed)}
        <div {...childPopperAttributes} className={s.room_icon_title}>
          {bed.title}
        </div>
      </div>
    </>
  );
};
