import scss from './HowAgentsEarn.module.scss';
import iconDiamond from 'assets/images/hoteliers/diamond.png';
import Button from '../Button/Button';

export default function HowAgentsEarn({ possibilities }) {
  return (
    <section className={scss.section}>
      <h2 className={scss.title}>Как зарабатывают агенты</h2>

      <ul className={scss.list}>
        {possibilities?.map(({ id, text }) => (
          <li key={id} className={scss.item}>
            <img className={scss.icon} src={iconDiamond} alt="Diamond" />
            <p className={scss.text}>{text}</p>
          </li>
        ))}
      </ul>

      <Button className={scss.button} primary>
        Получить свою реферальную ссылку
      </Button>
    </section>
  );
}
