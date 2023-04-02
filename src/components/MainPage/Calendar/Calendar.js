import { useState, useEffect, useRef, useCallback } from 'react';
// import DropDownList from "../DropDownList/DropDownList";
import { CalendarDouble } from 'components/CalendarDouble';
import { AmountMoney } from 'components/AmountMoney';
import OneBedRoom from '../BedRoom/OneBedRoom/OneBedRoom';
import TwoBedRoom from '../BedRoom/TwoBedRoom/TwoBedRoom';
import ThreeBedRoom from '../BedRoom/ThreeBedRoom/ThreeBedRoom';
import FourBedRoom from '../BedRoom/FourBedRoom/FourBedRoom';
import Gbvcss from '../BedRoom/Gbvcss/Gbvcss';
import SelectBed from '../Assents/image/SelectBed.svg';
import './Calendar.scss';
import { LocationSearch } from 'components/LocationTable/LocationSearch';
import { useSelector } from 'react-redux';
// import { isTypedArray } from 'util/types';

// const arrCity = [
//   { city: "Киев", region: "Киевская область", country: "Украина", id: 1 },
//   {
//     city: "Варшава",
//     region: "Мазоветское воеводство",
//     country: "Польша",
//     id: 2,
//   },
//   { city: "Нью-Йорк", region: "штат Нью-Йорк", country: "США", id: 3 },
// ];

export default function Calendar({ suggest, setSuggest, onSubmit }) {
  // const dispatch = useDispatch();
  const [calendarValue, setOnChange] = useState();
  const [icon, setIcon] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // showBedRoom
  const [oneBedRoom, setOneBedRoom] = useState(false);
  const [twoBedRoom, setTwoBedRoom] = useState(false);
  const [threeBedRoom, setThreeBedRoom] = useState(false);
  const [fourBedRoom, setFourBedRoom] = useState(false);
  const [gbvcss, setGbvcss] = useState(false);
  //
  const [openOneBedRoom, setOpenOneBedRoom] = useState(false);
  const [openTwoBedRoom, setOpenTwoBedRoom] = useState(false);
  const [openGbvcss, setOpenGbvcss] = useState(false);
  const [openThreeBedRoom, setOpenThreeBedRoom] = useState(false);
  const [openFourBedRoom, setOpenFourBedRoom] = useState(false);
  //
  const [selectBedRoom, setSelectBedRoom] = useState(true);
  // const [placeholder, setPlaceholder] = useState("");
  const [value, setValue] = useState('');

  // input checkbox animal
  const [checked, setChecked] = useState(false);
  const [openChecked, setOpenChecked] = useState(false);
  const [checkedDot, setChecketDot] = useState(false);
  const showSelectBed = () => {
    setIcon(!icon);
    setHidden(!hidden);
  };
  /* start for suggest*/

  // const { pathname } = useLocation();
  // const checkModalRoute = pathname.includes('/cabinet-user');

  const locationRef = useRef('');
  const boolRef = useRef(false);

  const bedRoomReducer = useSelector(state => state.bedRoomReducer);

  const [sugAmount, setSugAmount] = useState(false);

  const [sugDate, setSugDate] = useState({
    sugDateSel: 'Выберите даты ',
    sugDateSelected: 'Даты выбраны ',
    sugDateStatus: false,
  });

  const [sugLocation, setSugLocation] = useState({
    sugLocSel: 'Выберите локацию',
    sugLocSelected: 'Локация выбрана',
    sugLocStatus: false,
  });
  const [sugBed, setSugBed] = useState({
    sugBedSel: 'Выберите спальни',
    sugBedSelected: 'Спальни выбраны',
    sugBedStatus: false,
    sugClickBedStatus: false,
  });

  const changeSugDate = useCallback(() => {
    if (calendarValue) {
      setSugDate(prev => {
        return { ...prev, sugDateStatus: true };
      });
      return;
    }
    setSugDate(prev => {
      return { ...prev, sugDateStatus: false };
    });
  }, [calendarValue]);

  const changeSugBed = useCallback(() => {
    let arrBed = Object.values(bedRoomReducer);
    const containBed = arrBed.some(element => element > 0);

    if (containBed) {
      setSugBed(prev => {
        return { ...prev, sugBedStatus: true };
      });

      return containBed;
    }
    setSugBed(prev => {
      return { ...prev, sugBedStatus: false };
    });

    setSugBed(prev => {
      return { ...prev, sugClickBedStatus: false };
    });
  }, [bedRoomReducer]);

  useEffect(() => {
    const checkContainBed = changeSugBed();
    if (checkContainBed) {
      setSugBed(prev => {
        return { ...prev, sugClickBedStatus: true };
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeSugLocation = useCallback(() => {
    if (locationRef.current !== '') {
      setSugLocation(prev => {
        return { ...prev, sugLocStatus: true };
      });
      return;
    }
    setSugLocation(prev => {
      return { ...prev, sugLocStatus: false };
    });
  }, []);

  useEffect(() => {
    changeSugDate();
    changeSugBed();
    changeSugLocation();
  }, [suggest, bedRoomReducer, changeSugLocation, value, calendarValue, changeSugDate, changeSugBed]);

  const closeSuggest = () => {
    setSuggest(false);
    setSugAmount(false);
  };

  useEffect(() => {
    const checkClose = e => {
      const calendarBlock = document.getElementById('calendarBlock');
      const locationBlock = document.getElementById('locationId');
      const checkBoxWork = document.getElementById('checkbox_work');
      const checkAnimal = document.getElementById('openChecked_window');
      const checkAnimalInput = document.getElementById('block_checkbox_animal');
      const clickCalendar = e.composedPath().includes(calendarBlock);
      const clickloc = e.composedPath().includes(locationBlock);
      const clickAnim = e.composedPath().includes(checkAnimal);
      const clickCheckWork = e.composedPath().includes(checkBoxWork);
      const clickAnimInput = e.composedPath().includes(checkAnimalInput);
      if (clickCalendar || clickAnimInput || clickCheckWork) {
        setSuggest(true);
      }
      if (hidden && icon) {
        setHidden(false);
        setIcon(false);
      } else if (!clickloc && open) {
        setOpen(false);
      } else if (!clickAnim && !clickAnimInput && openChecked) {
        setOpenChecked(false);
      }
    };
    document.addEventListener('click', checkClose);

    return () => {
      document.removeEventListener('click', checkClose);
    };
  }, [hidden, icon, open, openChecked, setSuggest]);
  let allBoolean = [
    !openOneBedRoom,
    !openTwoBedRoom,
    !openThreeBedRoom,
    !openFourBedRoom,
    !openFourBedRoom,
    !openGbvcss,
    !open,
    sugDate.sugDateStatus,
    sugBed.sugBedStatus,
    sugBed.sugClickBedStatus,
    sugLocation.sugLocStatus,
  ];
  let checkBool = allBoolean.every(el => {
    if (el) {
      return true;
    } else {
      return false;
    }
  });

  const gotoAmount = useCallback(() => {
    boolRef.current = checkBool;
    if (boolRef.current) {
      setSugAmount(true);
    }
    return;
  }, [checkBool]);

  useEffect(() => {
    gotoAmount();
  }, [gotoAmount]);

  // useEffect(() => {
  //   boolRef.current = checkBool;

  //   if (checkModalRoute && boolRef.current) {
  //     const closeSuggestModal = () => {
  //       history.push('/');
  //     };
  //     closeSuggestModal();
  //   }
  // }, [checkBool, checkModalRoute, history]);

  // useEffect(() => {
  //   const checkClick = (e) => {
  //     if (open) {
  //       setOpen(false);
  //     }
  //   };
  //   document.addEventListener("click", checkClick);
  //   return () => {
  //     document.removeEventListener("click", checkClick);
  //   };
  // }, [open]);

  // const changerPlaceholder = (label) => {
  //   setPlaceholder({ label });
  //   setOpen(false);
  // };
  // useEffect(() => {
  //   setValue(placeholder.label);
  // }, [placeholder, setValue]);

  const showOneBedRoom = () => {
    setSelectBedRoom(false);
    setOneBedRoom(true);
    setOpenOneBedRoom(true);
  };

  const showTwoBedRoom = () => {
    setSelectBedRoom(false);
    setTwoBedRoom(true);
    setOpenTwoBedRoom(true);
  };

  const showThreeBedRoom = () => {
    setSelectBedRoom(false);
    setThreeBedRoom(true);
    setOpenThreeBedRoom(true);
  };

  const showFourBedRoom = () => {
    setSelectBedRoom(false);
    setFourBedRoom(true);
    setOpenFourBedRoom(true);
  };

  const showGbvcss = () => {
    setSelectBedRoom(false);
    setGbvcss(true);
    setOpenGbvcss(true);
  };

  const backToSelectRoom = () => {
    setSelectBedRoom(true);
    setOneBedRoom(false);
    setTwoBedRoom(false);
    setThreeBedRoom(false);
    setFourBedRoom(false);
    setGbvcss(false);
    setOpenOneBedRoom(false);
    setOpenTwoBedRoom(false);
    setOpenGbvcss(false);
    setOpenThreeBedRoom(false);
    setOpenFourBedRoom(false);
  };

  const clickOnIconOneBedRoom = () => {
    setOpenOneBedRoom(true);
  };

  const readyBtnOneBedRoom = () => {
    setOpenOneBedRoom(false);

    if (sugBed.sugBedStatus) {
      setSugBed(prev => {
        return { ...prev, sugClickBedStatus: true };
      });
    }
  };

  const clickOnIconTwoBedRoom = () => {
    setOpenTwoBedRoom(true);
  };

  const readyBtnTwoBedRoom = () => {
    setOpenTwoBedRoom(false);
    if (sugBed.sugBedStatus) {
      setSugBed(prev => {
        return { ...prev, sugClickBedStatus: true };
      });
    }
  };

  const clickOnIconGbvcss = () => {
    setOpenGbvcss(true);
  };

  const readyBtnGbvcss = () => {
    setOpenGbvcss(false);
    if (sugBed.sugBedStatus) {
      setSugBed(prev => {
        return { ...prev, sugClickBedStatus: true };
      });
    }
  };

  const clickOnIconThreeBedRoom = () => {
    setOpenThreeBedRoom(true);
  };

  const readyBtnThreeBedRoom = () => {
    setOpenThreeBedRoom(false);
    if (sugBed.sugBedStatus) {
      setSugBed(prev => {
        return { ...prev, sugClickBedStatus: true };
      });
    }
  };

  const clickOnIconFourBedRoom = () => {
    setOpenFourBedRoom(true);
  };

  const readyBtnFourBedRoom = () => {
    setOpenFourBedRoom(false);
    if (sugBed.sugBedStatus) {
      setSugBed(prev => {
        return { ...prev, sugClickBedStatus: true };
      });
    }
  };

  const handleChangeLocation = item => {
    setValue(item.location);

    setOpen(!open);
    locationRef.current = item.location;
  };
  const onChangeInput = e => {
    setChecked(e.target.checked);
    setOpenChecked(e.target.checked);
    setChecketDot(false);
  };
  const onClickOpenCheck = () => {
    if (!checked) {
      setOpenChecked(false);
      return;
    }
    setOpenChecked(true);
  };
  const selectAnimal = e => {
    e.stopPropagation();
    setOpenChecked(false);
    setChecketDot(true);
  };

  return (
    <div className="calendar__section ">
      <div className={suggest ? 'block__suggest-modal' : null}>
        {(suggest || sugAmount) && (
          <button className="suggest__close" onClick={closeSuggest}>
            Close
          </button>
        )}
        {sugAmount && (
          <AmountMoney
            setSugAmount={setSugAmount}
            onSubmit={onSubmit}
            closeSelector={() => {
              closeSuggest();
              setSuggest(false);
            }}
          />
        )}
        {!sugAmount && (
          <>
            <div className={suggest ? 'suggest__container' : 'suggest__container-close'}>
              <div className={sugDate.sugDateStatus ? 'suggest__select-date' : 'suggest__date'}>
                {sugDate.sugDateStatus ? sugDate.sugDateSelected : sugDate.sugDateSel}
              </div>
              <div className={sugLocation.sugLocStatus ? 'suggest__select-location' : 'suggest__location'}>
                {sugLocation.sugLocStatus ? sugLocation.sugLocSelected : sugLocation.sugLocSel}
              </div>
              <div className={sugBed.sugClickBedStatus ? 'suggest__select-bedroom' : 'suggest__bedroom'}>
                {sugBed.sugClickBedStatus ? sugBed.sugBedSelected : sugBed.sugBedSel}
              </div>
            </div>
            <div className="calendar__general ">
              <div id="calendarBlock" className="calendar__block ">
                <div className="location__block">
                  <div className="location__select">
                    <svg className="icon__location">
                      <use href={`${SelectBed}#location`}></use>
                    </svg>
                    <input
                      readOnly
                      placeholder={!value ? 'Выберите локацию' : value}
                      className="location__input"
                      onClick={() => setOpen(!open)}
                    />
                    {open ? (
                      <svg className="icon__arrow-up">
                        <use href={`${SelectBed}#arrow-down`}></use>
                      </svg>
                    ) : (
                      <svg className="icon__arrow-down">
                        <use href={`${SelectBed}#arrow-down`}></use>
                      </svg>
                    )}
                    {open && (
                      <div style={{ position: open ? 'absolute' : 'static' }} id="locationId">
                        <LocationSearch onChangeValue={handleChangeLocation} />
                      </div>

                      // <DropDownList
                      //   options={arrCity}
                      //   changerDescription={changerPlaceholder}
                      // />
                    )}
                  </div>
                  {selectBedRoom && (
                    <div className="room__select">
                      <span>Сколько вам нужно спален?</span>
                    </div>
                  )}
                  {oneBedRoom && (
                    <div className="arrow__block">
                      <div className="arrow__icon__block" onClick={backToSelectRoom}>
                        <svg className="arrow__icon">
                          <use href={`${SelectBed}#arrow`}></use>
                        </svg>
                      </div>
                      <div
                        className={openOneBedRoom ? 'icon__div' : 'icon__div icon__div--active'}
                        onClick={clickOnIconOneBedRoom}
                      >
                        <svg className="arrow__icon__bed">
                          <use href={`${SelectBed}#doubleBed`}></use>
                        </svg>
                        <span className="arrow__text">1 Спальня</span>
                      </div>
                    </div>
                  )}
                  {twoBedRoom && (
                    <div className="arrow__block">
                      <div className="arrow__icon__block" onClick={backToSelectRoom}>
                        <svg className="arrow__icon">
                          <use href={`${SelectBed}#arrow`}></use>
                        </svg>
                      </div>
                      <div
                        className={openTwoBedRoom ? 'icon__div' : 'icon__div icon__div--active'}
                        onClick={clickOnIconTwoBedRoom}
                      >
                        <svg className="arrow__icon__bed">
                          <use href={`${SelectBed}#doubleBed`}></use>
                        </svg>
                        <span className="arrow__text">2 Спальни</span>
                      </div>
                    </div>
                  )}
                  {threeBedRoom && (
                    <div className="arrow__block">
                      <div className="arrow__icon__block" onClick={backToSelectRoom}>
                        <svg className="arrow__icon">
                          <use href={`${SelectBed}#arrow`}></use>
                        </svg>
                      </div>
                      <div
                        className={openThreeBedRoom ? 'icon__div' : 'icon__div icon__div--active'}
                        onClick={clickOnIconThreeBedRoom}
                      >
                        <svg className="arrow__icon__bed">
                          <use href={`${SelectBed}#doubleBed`}></use>
                        </svg>
                        <span className="arrow__text">3 Спальни</span>
                      </div>
                    </div>
                  )}
                  {gbvcss && (
                    <div className="arrow__block">
                      <div className="arrow__icon__block" onClick={backToSelectRoom}>
                        <svg className="arrow__icon">
                          <use href={`${SelectBed}#arrow`}></use>
                        </svg>
                      </div>
                      <div
                        className={openGbvcss ? 'icon__div' : 'icon__div icon__div--active'}
                        onClick={clickOnIconGbvcss}
                      >
                        <svg className="icon__bed__gbvss">
                          <use href={`${SelectBed}#singleBed`}></use>
                        </svg>
                        <span className="arrow__text">ГБВКСС</span>
                      </div>
                    </div>
                  )}
                  {fourBedRoom && (
                    <div className="arrow__block">
                      <div className="arrow__icon__block" onClick={backToSelectRoom}>
                        <svg className="arrow__icon">
                          <use href={`${SelectBed}#arrow`}></use>
                        </svg>
                      </div>
                      <div
                        className={openFourBedRoom ? 'icon__div' : 'icon__div icon__div--active'}
                        onClick={clickOnIconFourBedRoom}
                      >
                        <svg className="arrow__icon__bed">
                          <use href={`${SelectBed}#doubleBed`}></use>
                        </svg>
                        <span className="arrow__text">4 Спальни</span>
                      </div>
                    </div>
                  )}
                </div>
                {/* fourBedRoom */}
                {openOneBedRoom && <OneBedRoom readyBtnOneBedRoom={readyBtnOneBedRoom} />}
                {openTwoBedRoom && <TwoBedRoom readyBtnTwoBedRoom={readyBtnTwoBedRoom} />}
                {openThreeBedRoom && <ThreeBedRoom readyBtnThreeBedRoom={readyBtnThreeBedRoom} />}
                {openFourBedRoom && <FourBedRoom readyBtnFourBedRoom={readyBtnFourBedRoom} />}
                {openGbvcss && <Gbvcss readyBtnGbvcss={readyBtnGbvcss} />}
                {selectBedRoom && (
                  <div className={hidden ? 'select__bedroom' : 'select__bedroom--hidden'}>
                    {/* one bedroom */}
                    <div className="icon__block" onClick={showOneBedRoom}>
                      <svg className="icon__bed icon__bed--double">
                        <use href={`${SelectBed}#doubleBed`}></use>
                      </svg>
                      <span className="icon__description">1 Спальня</span>
                    </div>
                    {/* two bedroom */}
                    <div className="icon__block" onClick={showTwoBedRoom}>
                      <div>
                        <svg className="icon__bed icon__bed--double">
                          <use href={`${SelectBed}#doubleBed`}></use>
                        </svg>
                        <svg className="icon__bed icon__bed--double">
                          <use href={`${SelectBed}#doubleBed`}></use>
                        </svg>
                      </div>
                      <span className="icon__description">2 Спальни</span>
                    </div>
                    {/* ГБВКСС */}
                    <div className="icon__block" onClick={showGbvcss}>
                      <div>
                        <svg className="icon__bed icon__bed--single">
                          <use href={`${SelectBed}#singleBed`}></use>
                        </svg>
                        <svg className="icon__bed icon__bed--single">
                          <use href={`${SelectBed}#singleBed`}></use>
                        </svg>
                      </div>
                      <span className="icon__description icon__description--mutation">ГБВКСС</span>
                    </div>
                    <div className="icon__overlay">готов быть в комнате с соседями</div>
                    {/* three bedroom */}
                    <div className={hidden ? 'icon__block' : 'icon__block--hidden'} onClick={showThreeBedRoom}>
                      <svg className="icon__bed icon__bed--double">
                        <use href={`${SelectBed}#doubleBed`}></use>
                      </svg>
                      <span className="icon__description">3 Спальни</span>
                    </div>
                    {/* four bedroom */}
                    <div className={hidden ? 'icon__block' : 'icon__block--hidden'} onClick={showFourBedRoom}>
                      <svg className="icon__bed icon__bed--double">
                        <use href={`${SelectBed}#doubleBed`}></use>
                      </svg>
                      <span className="icon__description">4 Спальни</span>
                    </div>
                    <div onClick={showSelectBed}>
                      {icon ? (
                        <div className="icon__hiden">
                          <svg className="icon__arrow">
                            <use href={`${SelectBed}#arrow`}></use>
                          </svg>
                        </div>
                      ) : (
                        <div className="icon__hiden">
                          <svg className="icon__dots">
                            <use href={`${SelectBed}#threeDots`}></use>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                <div className="calendardouble__block">
                  <CalendarDouble setOnChange={setOnChange} />
                </div>
              </div>

              <div className={!suggest ? 'info__block' : ' info__block-hidden'}>
                <div className="info__count">
                  <svg className="info__icon">
                    <use href={`${SelectBed}#house`}></use>
                  </svg>
                  <span className="info__number">0</span>
                </div>
                <p className="info__message">вариантов бронирования</p>
              </div>
            </div>
            <div className="block__checkbox">
              <div className="block_checkbox_work">
                <input type="checkbox" id="checkbox_work" className="checkbox_input" />
                <label className="checkbox_label" htmlFor="checkbox_work">
                  Вы путешествуете по работе?
                </label>
              </div>
              <div id="block_checkbox_animal" className="block_checkbox_animal">
                <input
                  type="checkbox"
                  id="checkbox_animal"
                  className="checkbox_input_animal"
                  onChange={onChangeInput}
                  onClick={onClickOpenCheck}
                />
                <label
                  className={
                    openChecked ? 'checked_label_animal' : !checkedDot ? 'checkbox_label' : 'checkbox_label_animal'
                  }
                  htmlFor="checkbox_animal"
                >
                  Вы путешествуете с животными?
                </label>

                {openChecked && (
                  <div className="modal__backdrop_checkbox ">
                    <div className="block_checkbox_animal_window" id="openChecked_window">
                      <ul className="animal_window_ul" onClick={selectAnimal}>
                        <li className="animal_window_li small_dog ">Путешествую с маленьким псом</li>
                        <li className="animal_window_li middle_dog">Путешествую со средним псом</li>
                        <li className="animal_window_li big_dog">Путешествую с большим псом</li>
                        <li className="animal_window_li cat">Путешествую с котом</li>
                        <li className="animal_window_li racoon">Путешествую с енотом</li>
                        <li className="animal_window_li smaller_animal">
                          Путешествую с не хищным животным,меньше кота
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
