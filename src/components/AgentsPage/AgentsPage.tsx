import { AGENTS_CHAT_TELEGRAM } from 'navigation/CONSTANTS';

import iconKeys from 'assets/images/pages/agents/iconKeys.svg';

import { CommonContainer } from 'components/Common/CommonContainer';
import BecomeAgent from './BecomeAgent/BecomeAgent';
import AdvantagesDiamonds from './AdvantagesDiamonds/AdvantagesDiamonds';
import RentLinks from './RentLinks/RentLinks';
import HowAgentsEarn from './HowAgentsEarn/HowAgentsEarn';
import TelegramLink from './TelegramLink/TelegramLink';
import BrandWorkingPlacesTitle from './BrandWorkingPlacesTitle/BrandWorkingPlacesTitle';
import CityCard from 'components/MainPage/CityCard/CityCard';
import { Aside } from 'components/Common/Aside';

import scss from './AgentsPage.module.scss';

const advantagesForHoteliers = {
  title: 'Отельеры любят YOUR PRICE BOOKING по тому, что',
  buttonText: 'Начать зарабатывать',
  advantages: [
    {
      id: '0',
      text: 'Отельеры получают оплату за бронирование напрямую от пользователя',
    },
    { id: '1', text: 'всего 2,5 % комиссия с каждой сделки' },
    {
      id: '2',
      text: 'Отельер видит всех пользователей, которым необходимо жилье рядом с его объектом и можете предложить им свои варианты и цены',
    },
  ],
};

const advantagesForUsers = {
  title: 'Пользователи любят YOUR PRICE BOOKING по тому, что:',
  buttonText: 'Стать агентом',
  advantages: [
    { id: '0', text: 'Отельеры могут понижать цены без ограничений' },
    {
      id: '1',
      text: 'Можно предложить свою максимальную цену и отельеры это увидят',
    },
    {
      id: '2',
      text: 'Контакты отельера сразу после подтверждения бронирования',
    },
  ],
};

const earnPossibilities = [
  {
    id: '0',
    text: 'Снять ролик про наш сервис, написать статью в которой рассказать как отельер получит 50 долларов на свой аккаунт  регистрируясь по вашей реферальной ссылке.',
  },
  {
    id: '1',
    text: 'Обзвонить тех, кто сдает квартиры и апартаменты посуточно в твоем городе и рассказать про новый способ получения дополнительных продаж. И конечно отправить свою реф ссылку для регистрации на сервисе.',
  },
  {
    id: '2',
    text: 'Предложить своим знакомым отельерам новую площадку для получения клиентов и повышения продаж. ',
  },
  {
    id: '3',
    text: 'Вы можете разместить свои объекты на нашем сервисе воспользовавшись этой агентской программой и получать кэш бэк в виде агентского вознаграждения. Конечно для регистрации Вам необходимо будет использовать вашу реф ссылку агента.',
  },
  {
    id: '4',
    text: 'Расскажите как вы зарабатываете с Your Price Booking. В видео блоге или месседже в соц сетях, при личном общении. И поделитесь своей реферальной ссылкой - стать агентом. Вы будете получать процент от абонплаты отельеров которых пригласит участник вашей структуры.',
  },
];

const AgentsPage = () => {
  return (
    <CommonContainer>
      <div className={scss.mainWrapper}>
        <div className={scss.mainGrid}>
          <main className={scss.main}>
            <BecomeAgent />
            <AdvantagesDiamonds {...advantagesForHoteliers} />
            <RentLinks icon={iconKeys} iconDesc="two keys" />
            <AdvantagesDiamonds {...advantagesForUsers} inverse />
            <HowAgentsEarn possibilities={earnPossibilities} />
            <TelegramLink
              to={AGENTS_CHAT_TELEGRAM}
              text="t.me/agents_YourPriceBooking"
              callToAction="Присоединяйтесь к официальному телеграм чату для агентов"
            />
            <BrandWorkingPlacesTitle />

            <CityCard />
          </main>

          <Aside />
        </div>
      </div>
    </CommonContainer>
  );
};

export default AgentsPage;
