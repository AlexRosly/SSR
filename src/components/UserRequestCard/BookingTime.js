import React, { useState } from 'react'
import ubt from './UserRequestCard.module.scss'

export const BookingTime = () => {
  const arrBookingTime = [
    { id: 1, day: '1 дня', status: true },
    { id: 2, day: '2 дней', status: true },
    { id: 3, day: '3 дней', status: true },
    { id: 4, day: '4 дней', status: true },
    { id: 5, day: '5 дней', status: true },
    { id: 6, day: '1 недели', status: true },
    { id: 7, day: '2 недель', status: true },
    { id: 8, day: ' 3 недель', status: false },
    { id: 9, day: '4 недель', status: false }
  ]

  let initialTime = [{ id: 6, day: '1 недели', status: true }]
  const [bookingTime, setBookingTime] = useState(initialTime)

  const changeSelect = (e) => {
    setBookingTime(e.target.innerHTML)
  }
  return (
    <>
      <div className={ubt.container__booking_time}>
        <div className={ubt.booking_time_text_block}>
          <div className={ubt.booking_time_text}>
            Получать предложения бронирования на протяжении:
            <br />
            <span className={ubt.booking_time_text2}>
              (с момента создания этого запроса)
            </span>
          </div>
        </div>

        <div>
          {arrBookingTime.map((item) => (
            <ul className={ubt.booking_time_block_ul}>
              <li
                className={
                  item.status
                    ? item.day === bookingTime[0].day ||
                      item.day === bookingTime
                      ? ubt.booking_time_active
                      : ubt.booking_time_block_li
                    : ubt.booking_time_disable
                }
                value={item.day}
                key={item.id}
                onClick={changeSelect}
              >
                {item.day}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}
