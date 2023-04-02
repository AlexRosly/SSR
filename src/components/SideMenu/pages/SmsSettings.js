import { useState } from 'react'
import '../../../styles/common/_sideMenu.scss'
import NavbarSideMenu from 'components/SideMenu/navbar';

export default function SmsSettings() {
  const arrTime = [
    '15 минут',
    '30 минут',
    '1 час',
    '2 часа',
    '3 часа',
    '4 часа',
    '5 часов',
    '6 часов',
    '8 часов',
    '12 часов'
  ]

  let initialState = ['1 час']
  const [time, setTime] = useState(initialState)

  const changeSelect = (e) => {
    setTime(e.target.innerHTML)
  }
  const option = arrTime.map((text, index) => {
    return (
      <li
        className={
          time === text || text === time[0]
            ? ' select-text-block selected-time'
            : 'select-text-block'
        }
        key={index}
        value={index}
      >
        <p className="page-time-select-text " onClick={changeSelect}>
          {text}
        </p>
      </li>
    )
  })
  return (
    <div className="cont_page_sms">
      <NavbarSideMenu />
      <div className="account-setting-container ">
        {/*    <div className=" page_sms-name">Настройка SMS уведомлений </div> */}
        <div className="page_sms-set ">
          Получать уведомления не чаще чем раз в:
          <div className="page_sms-time-position">
            <div className="page_select ">
              <div className="time"> {time}</div>
              <div className="page-select-window">
                <ul className="page-select-cont">{option}</ul>
              </div>
            </div>
          </div>
        </div>

        <div className="page_sms-cont">
          На ваш телефон будут приходить уведомления о:
          <ul className="page_sms-cont_block">
            <li className="page_sms-cont_list-1 block-1">
              Запрос бронирования
            </li>
            <li className="page_sms-cont_list-2 block-2">
              Договор бронирования
            </li>
            <li className="page_sms-cont_list-3 block-3">Сообщение</li>
            <li className="page_sms-cont_list-4 block-4">
              Отмена бронирования
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
