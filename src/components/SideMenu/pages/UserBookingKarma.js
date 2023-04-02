import NavbarSideMenu from 'components/SideMenu/navbar';
import "../../../styles/common/_userBookingKarma.scss";

export default function UserBookingKarma() {
  return (
    <div>
      <NavbarSideMenu />
      <div className="bookingKarmaCont">
        <table className="table">
          <tr>
            <th className="firstCell">Booking Karma</th>
            <td className="tableCell numberFirst">10</td>
          </tr>
          <tr>
            <th className="tableCell">Забронировано</th>
            <td className="tableCell number">35</td>
          </tr>
          <tr>
            <th className="tableCell">Отменил бронь</th>
            <td className="tableCell number">8</td>
          </tr>
          <tr>
            <th className="tableCell">Не прибыл согласно договора</th>
            <td className="tableCell number">6</td>
          </tr>
          <tr>
            <th className="tableCell">Поставил оценку объектам</th>
            <td className="tableCell number">4</td>
          </tr>
          <tr>
            <th className="tableCell">Оставил отзывов об объектах</th>
            <td className="tableCell number">9</td>
          </tr>
          <tr>
            <th className="tableCell">Оставил отзывов об Your Price Booking</th>
            <td className="tableCell number">2</td>
          </tr>
          <tr>
            <th className="tableCell">Зарегестрирован лет</th>
            <td className="tableCell number">менее 1 года</td>
          </tr>
        </table>
        <button className="tableBtn">ОТЗЫВЫ 33</button>
      </div>
    </div>
  );
};
