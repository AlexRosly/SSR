import s from './infoComponentPrime.module.scss';
import pencil from '../../MainPage/Assents/image/SelectBed.svg';
import getClassOptionsRoom from './getClassOptionsRoom';
import getClassIconBed from './getClassIconBed';
import Modal from 'react-modal';
import customStyles from './StyleModal';
import ModalWindow from './Modal/ModalWindow';


export default function OptionsRoom({ 
  room,
   quantityRooms,
   isActive,
   isOpen,
   closeModal,
   setChecked,
   checked
   }) {

  return (
    <>
      <li key={room.key} className={`${getClassOptionsRoom(quantityRooms)}`}>
        {room.twoBedroom !== 0 && (
          <div className={s.hotelier_roms__box_icon}>
            <svg fill="#787878" className={`${getClassIconBed(quantityRooms, 'twoBed', room.singleBedroom)}`}>
              <use href={`${pencil}#doubleBed`}></use>
            </svg>
            <p className={s.hotelier_roms__quantity_room}>{room.twoBedroom}</p>
          </div>
        )}
        {room.singleBedroom !== 0 && (
          <div className={s.hotelier_roms__box_icon}>
            <svg fill="#787878" className={`${getClassIconBed(quantityRooms, 'singleBed', room.twoBedroom)}`}>
              <use href={`${pencil}#singleBed`}></use>
            </svg>
            <p className={s.hotelier_roms__quantity_room}>{room.singleBedroom}</p>
          </div>
        )}
      </li>
      <Modal isOpen={isOpen} style={customStyles} contentLabel="onRequestClose Example">
        <button className={s.suggest__close} onClick={closeModal}>
          Close
        </button>
        <ModalWindow indexActiveBed={isActive} setChecked={setChecked} checked={checked} />
      </Modal>
    </>
  );
}
