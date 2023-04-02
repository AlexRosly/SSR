import { usePopover } from 'hooks/UI';
import s from '../BedOptions.module.scss';
import room1x1 from '../image/icon/1x1.png';
import SelectBed from '../../../MainPage/Assents/image/SelectBed.svg';

export const HostelRoom = ({ bed, styled, user }) => {
  const [parentPopperAttributes, childPopperAttributes] = usePopover({
    offset: [0, 13],
    placement: 'top',
  });

  return (
    <div {...parentPopperAttributes} className={s.hostel_block} style={styled}>
      {user && (
        <div className={s.hostel__descr}>
          <p className={s.hostel__descr_text}>
            В комнате <span>{bed.descriptionInResponseData.total}</span>
          </p>
          <svg className={s.hostel__descr_icon}>
            <use href={`${SelectBed}#singleBed`}></use>
          </svg>
        </div>
      )}
      <div className={s.hostel__bed_container}>
        <p className={s.hostel__bed_number}>{bed.descriptionInResponseData.free}</p>
        <img className={s.hostel__bed_icon} src={room1x1} alt={bed.title} />
      </div>
      <div className={s.hostel__title}>в комнате с соседями</div>

      <div {...childPopperAttributes} className={s.room_icon_title}>
        {bed.title}
      </div>
    </div>
  );
};
