import scss from './BrandWorkingPlacesTitle.module.scss';
import iconHome from 'assets/images/pages/agents/iconHome.svg';

export default function BrandWorkingPlacesTitle() {
  return (
    <section className={scss.section}>
      <img src={iconHome} alt="house icon" />

      <h2 className={scss.title}>Your Price Booking сегодня работает в:</h2>
    </section>
  );
}
