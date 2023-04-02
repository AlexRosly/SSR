import s from './infoComponentPrime.module.scss';
import sprite from '../../MainPage/Assents/image/SelectBed.svg';
import Modal from 'react-modal';
import { useState } from 'react';
import customStyles from './StyleModal';
import ModalWindow from './Modal/ModalWindow';

Modal.setAppElement('#root');

export default function RoomInTheHotel({ optionsHostelRoom, onClick, setCurentCardIndex, HTC }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(null);
  const [checked, setChecked] = useState(false);

  const openModal = index => {
    setIsActive(index);
    setIsOpen(true);
  };
  const closeModal = () => {
    setCurentCardIndex(null);
    setIsActive(null);
    setIsOpen(false);
    setChecked(false);
  };

  function addButton(total) {
    const quantityButton = [];
    for (let index = 1; index <= total; index++) {
      quantityButton.push(index);
    }
    return quantityButton;
  }

  function makeOptionClass(index) {
    const optionClasses = [s.hotelier_options_hostel_room__item];
    if (index === isActive) {
      optionClasses.push(s.hotelier_options_hostel_room__item_active);
    }
    if (checked) {
      optionClasses.push(s.hotelier_options_hostel_room__item_active);
    }
    return optionClasses.join(' ');
  }

  return (
    <>
      <div className={s.hotelier_options_hostel_room}>
        <div className={s.hotelier_options_hostel_room__box_number}>
          <p className={s.hotelier_options_hostel_room__text}>
            Всего в комнате <span className={s.hotelier_options_hostel_room__number}>{optionsHostelRoom.total}</span>
          </p>
          <svg className={s.hotelier_options_rooms__icon_single_bed}>
            <use href={`${sprite}#singleBed`}></use>
          </svg>
        </div>
        <div className={s.hotelier_options_hostel_room__box_list_bed}>
          <ul className={s.hotelier_options_hostel_room__list} onClick={HTC && onClick}>
            {addButton(optionsHostelRoom.total).map((el, index) => {
              return (
                <li key={el} className={makeOptionClass(index)} onClick={() => openModal(index)}>
                  <svg className={s.hotelier_options_rooms__icon_single_bed}>
                    <use href={`${sprite}#singleBed`}></use>
                  </svg>
                  <p className={s.hotelier_options_hostel_room__text}>{el}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {HTC && (
        <Modal isOpen={isOpen} style={customStyles} contentLabel="onRequestClose Example">
          <button className={s.suggest__close} onClick={closeModal}>
            Close
          </button>
          <ModalWindow indexActiveBed={isActive} setChecked={setChecked} checked={checked} />
        </Modal>
      )}
    </>
  );
}
