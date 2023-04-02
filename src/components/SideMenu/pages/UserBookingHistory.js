import NavbarSideMenu from 'components/SideMenu/navbar';
import "../../../styles/common/_userBookingHistory.scss";

export default function UserBookingHistory() {
  return (
    <div>
      <NavbarSideMenu />
      <div className="bookingHistoryContainer">
        <h1>История бронирований</h1>
        <div></div>
      </div>
    </div>
  );
};
