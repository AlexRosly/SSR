import iconPeople from 'assets/images/pages/agents/iconPeople.svg';
import Button from '../Button/Button';
import scss from './BecomeAgent.module.scss';

export default function BecomeAgent() {
  return (
    <section className={scss.becomeAgent}>
      <div className={scss.block__container}>
        <h1 className={scss.title__text}>
          Стань агентом Your Price Booking и зарабатывай
        </h1>
      </div>

      <div className={scss.referralProgramWrapper}>
        <div className={scss.referralProgram__row}>
          <img
            className={scss.iconPeople}
            src={iconPeople}
            alt="2 persons icon"
          />

          <div className={scss.textContainer}>
            <h2 className={scss.subTitle}>
              2 - х уровневая реферальная программа
            </h2>

            <ul className={scss.list}>
              <li className={scss.item}>
                <p className={scss.itemText}>8% 1 - й уровень</p>
              </li>
              <li className={scss.item}>
                <p className={scss.itemText}>2% 2 - й уровень</p>
              </li>
            </ul>
          </div>
        </div>

        <p className={scss.textSubAccent}>
          от всех перечислений отельера после его регистрации на Your Price
          Booking по вашей реферальной ссылке
        </p>
      </div>

      <div className={scss.descriptionContainer}>
        <p className={scss.descriptionText}>
          Рассказывайте отельерам о том как они смогут продавать на платформе
          Your Price Booking и получайте комиссионные с оплаты за наш сервис
          бронирования гостиниц и посуточной аренды жилья
        </p>

        <Button primary>Стать агентом</Button>
      </div>
    </section>
  );
}
