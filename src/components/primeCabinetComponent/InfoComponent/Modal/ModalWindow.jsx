import s from './Modal.module.scss';
import toast, { Toaster } from 'react-hot-toast';
import sprite from '../../../MainPage/Assents/image/SelectBed.svg';
import { useState } from 'react';
import { CalendarOnMonth } from './Calendar/Calendar';

export default function ModalWindow({ indexActiveBed, setChecked, checked }) {
  const [calendarValue, setOnChange] = useState();
  const [errorText, setErrorText] = useState('');
  const [price, setPrice] = useState('');
  const [validationPrice, setValidationPrice] = useState(false);
  const [allActiveDay, setAllActiveDay] = useState([]);
  const [textButton, setTextButton] = useState('Установить Цена 1');
  const [showNotOurService, setShowNotOurService] = useState(false);
  const [notOurService, setNotOurService] = useState([]);
  const [disabledElement, setDisabledElement] = useState(true);

  const validationSchema = priceChange => {
    if (priceChange?.length === 0) {
      return setErrorText('Напишите сумму для Цена 1');
    }
    if (isNaN(priceChange)) {
      return setErrorText('Введите число');
    }
    if (priceChange?.length > 7) {
      return setErrorText('Введите число менше 999999');
    }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validation = validationSchema(price);

    if (validation) {
      setValidationPrice(true);
      if (allActiveDay.length > 0) {
        if (textButton === 'Изменить Цена 1' ) {
          toast.success('Цена 1 изменена');

          return;
        }
        toast.success('Цена 1 и дати сохранены');
        console.log({ price, checked, allActiveDay, indexActiveBed, notOurService });
        setTextButton('Изменить Цена 1');
      }
    }
  };

  const handleChangeInput = e => {
    setPrice(e.target.value);
    setErrorText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={s.modal__box_price}>
          {errorText && <p className={s.modal__error_message}>{errorText}</p>}
          <label className={s.modal__label_price}>
            Цена 1
            <input
              disabled={disabledElement}
              type="text"
              value={price}
              name="price"
              className={errorText ? s.modal__value_price_error : s.modal__value_price}
              onChange={handleChangeInput}
            />
            <span className={s.modal__value_price_text}>за сутки</span>
          </label>

          <span className={s.modal__value_text}>UAH</span>
          <button
            type="submit"
            className={`${price ? s.modal__button_submit_have_price : s.modal__button_submit} ${errorText ? s.modal__button_submit_have_error : ''
              } ${validationPrice && allActiveDay.length === 0 ? s.modal__button_submit_have_error : ''}
              ${textButton === 'Изменить Цена 1' ? s.modal__button_submit_change_price : ''}
            `}
            onClick={() => {
              setTextButton('Подтвердить цена 1');
              setDisabledElement(false);

              if (textButton === 'Подтвердить цена 1') {
                setDisabledElement(true);
              }
            }}
          >
            {textButton}
          </button>
        </div>
        <div className={s.modal__box_bed}>
          <label className={s.modal__label_price_all}>
            <span className={`${s.modal__checkbox} ${checked ? s.modal__checkbox_active : ''}`}></span>
            <input
              disabled={disabledElement}
              className={s.modal__checkbox_price} type="checkbox" onChange={() => setChecked(!checked)} />
            Применить Цена 1 ко всем
            <svg className={s.modal__icon_bed}>
              <use href={`${sprite}#singleBed`}></use>
            </svg>
            кроватям в комнате
          </label>
        </div>
        <div className={s.modal__box_button_plus}>
          <button className={s.modal__button_plus} type="button">
            <svg className={s.modal__icon_plus}>
              <use href={`${sprite}#plus`}></use>
            </svg>
          </button>
        </div>
        <div className={s.modal__calendar_box}>
          {/* sdfdsfsdfsdsdfdsf */}
          {allActiveDay.length === 0 && !disabledElement && (
            <p className={s.modal__error_message_calendar}>Выберите даты на которые действует Цена 1</p>
          )}
          <CalendarOnMonth
            setAllActiveDay={setAllActiveDay}
            allActiveDay={allActiveDay}
            showNotOurService={showNotOurService}
            calendarValue={calendarValue}
            setOnChange={setOnChange}
            notOurService={notOurService}
            setNotOurService={setNotOurService}
          />
        </div>
        <div className={s.modal__box_button}>
          <button
            className={s.modal__button_clear}
            type="button"
            onClick={() => {
              setOnChange(null);
              setShowNotOurService(prevstate => !prevstate);
              if (notOurService.length > 0 && showNotOurService) {
                toast.success('Дати забронированые не через наш сервис сохранены');
              }
            }}
          >
            {!showNotOurService ? 'отметить даты которые забронированы не через наш сервис' : 'Готово'}
          </button>
        </div>
        <div className={s.modal__box_checkbox}>
          <p className={s.modal__label_price_all}>забронирован через наш сервис</p>
          <p className={s.modal__label_price_all}>забронирован не через наш сервис</p>
          <p className={s.modal__label_price_all}>кто то начал бронирование на эту дату</p>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
