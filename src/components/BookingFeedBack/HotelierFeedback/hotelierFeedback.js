import { HotelierFeedbackItems } from './hotelierFeedbackItems';

import comment from 'assets/images/bookingFeedback/comment.png';
import comment2 from 'assets/images/bookingFeedback/comment2.png';

const testArrayUsers = [
  {
    id: '1',
    name: 'Arnold Schwarzenegger',
    avatar: comment,
    userNumber: 36,
    desc: `Супер сервис! Забронировал дешевле чем обычно и отельеры сами написали мне и море теплое и пиво холодное и обслуживание нормас. приеду еще в это райское место и буду наслаждатся солнышком. Благодарю! Супер сервис! Забронировал дешевле чем обычно и отельеры сами написали мне и море теплое и пиво холодное и обслуживание нормас. приеду еще в это райское место и буду наслаждатся солнышком. Благодарю! `,
    like: 1,
    data: '11/09/2021',
    object: {
      name: 'Hilton JBSX',
      avatar: comment2,
      rank: '7,3',
    },
  },
  {
    id: '2',
    name: 'Michael Sylvester Gardenzio Stallone',
    avatar: comment,
    userNumber: 36,
    desc: `Супер сервис! Забронировал дешевле чем обычно и отельеры сами
            написали мне и  море теплое и пиво холодное и обслуживание нормас и девочек заказали  :))...`,
    like: 1,
    data: '11/09/2021',
    object: {
      name: 'Hilton  hotel ',
      avatar: comment2,
      rank: '7,3',
    },
  },
  {
    id: '3',
    name: 'Jean-Claude Van Damme',
    avatar: comment,
    userNumber: 36,
    desc: `Супер сервис! Забронировал дешевле чем обычно и отельеры сами
            написали мне и ...`,
    like: 1,
    data: '11/09/2021',
    object: {
      name: 'Hilton JBSX',
      avatar: comment2,
      rank: '7,3',
    },
  },
  {
    id: '4',
    name: 'Jason Michael Statham',
    avatar: comment,
    userNumber: 36,
    desc: `Супер сервис! Забронировал дешевле чем обычно и отельеры сами
            написали мне и ...`,
    like: 1,
    data: '11/09/2021',
    object: {
      name: 'hotel raga i kopyta',
      avatar: comment2,
      rank: '7,3',
    },
  },
];
const HotelierFeedback = () => {
  return (
    <div>
      <ul>
        {testArrayUsers.map(obj => (
          <li>
            <HotelierFeedbackItems key={obj.id} {...obj} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HotelierFeedback;
