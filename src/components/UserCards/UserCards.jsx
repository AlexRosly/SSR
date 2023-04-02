import Container from './Container/Container';
import UserCard from './UserCard/UserCard';
import styles from './UserCards.module.scss';
import { useState } from 'react';

function UserCards() {
  const [cards, setCards] = useState([
    {
      id: 1,
      url: 'https://i.ibb.co/YRQXV7G/2-11.jpg',
      title: 'Гуд Рум',
      city: 'Киев',

      street: 'ул. Просвещения, д. 19, корп. 2 кв. 33',
      priceBefore: 400,
      priceAfter: 900,
      status: 'Квар-тира',
      description: {
        a: 'Данный объект бронирования является тестовым и был создан для бэта тестирования данного раздела сайта бронирований гостиниц и посуточной аренды жилья Your Price Booking. Старт платформы бронирования запланирован на конец 2022 года. В данный момент вы видите тестовую версию сайта и сейчас бронирование еще не доступно.',

        b: 'Первые 4 города в которых начинает работат Your Price Booking это: Киев, Одесса, Варшава и город Нью - Йорк. Огромным преимуществом для пользователей есть отсутствие паритета цен в отношениях с отельерами. Они могут понижать цену на свободные номера как для общего обозрения, так и делат индивидуалные ценовые предложения - конфиденциально.',
      },
      areaApartment: 77,
      videoLink: '',
      urlImageSecond: 'https://i.ibb.co/P95QQM5/111-3.jpg',
      rating: '4,3',
      feedback: 789,
    },
  ]);

  // toggle popup
  const handlePopup = id => {
    const new_cards = cards.map(item => ({
      ...item,
      showPopup: !item.showPopup,
    }));
    setCards(new_cards);
  };

  return (
    <Container>
      <ul className={styles.list}>
        {cards.map(card => (
            <UserCard key={card.id} cardInfo={card} handlePopup={handlePopup} />
          )
        )}
      </ul>
    </Container>
  );
}

export default UserCards;
