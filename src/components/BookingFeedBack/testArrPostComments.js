import avatarVan from '../../assets/images/bookingFeedback/Vandam.jpg';
import avatarStal from '../../assets/images/bookingFeedback/Stallone.jpg';
import avatarStat from '../../assets/images/bookingFeedback/statham.jpg';
import avatarSch from '../../assets/images/bookingFeedback/comment.png';
import avatarHotel from '../../assets/images/bookingFeedback/comment2.png';

export const testUsersPosts = [
  {
    id: 1,
    userId: 36,
    userName: 'Arnold Schwarzenegger',
    userAvatar: avatarSch,
    desc: `Супер сервис! Забронировал дешевле чем обычно и отельеры сами написали мне и море теплое и пиво холодное и обслуживание нормас. приеду еще в это райское место и буду наслаждатся солнышком. Благодарю! Супер сервис! Забронировал дешевле чем обычно и отельеры сами написали мне и море теплое и пиво холодное и обслуживание нормас. приеду еще в это райское место и буду наслаждатся солнышком. Благодарю! Супер сервис! Забронировал дешевле чем обычно и отельеры сами написали мне и море теплое и пиво холодное и обслуживание нормас. приеду еще в это райское место и буду наслаждатся солнышком. Благодарю!`,
    commentArr: [],

    commentCount: 0,
    like: false,
    likeCount: 0,
    data: '11/09/2021',
    objectHotel: {
      hotelName: 'Hilton JBSX',
      hotelAvatar: avatarHotel,
      rank: '7,3',
    },
  },
  {
    id: 2,
    userId: 6,
    userName: 'Michael Sylvester Gardenzio Stallone',
    userAvatar: avatarStal,

    desc: `Супер сервис! Забронировал дешевле чем обычно и отельеры сами написали мне и  море теплое и пиво холодное и обслуживание нормас и девочек заказали  и девочек заказали и девочек заказали и девочек  и девочек заказализаказали :))...`,
    commentArr: [
      {
        id: 21,
        desc: 'а ПОЗЖЕ (это важно) я им назначу в зависимости от логики моего приложения какие-т',
        like: false,
        likeCount: 99,
        data: '11/09/2021',
        comentOfcoment: [],
      },
      {
        id: 22,
        desc: 'а я им назначу в зависимости от логики моего приложения какие-т',
        like: false,
        likeCount: 67,
        data: '11/09/2021',
        comentOfcoment: [],
      },
      {
        id: 23,
        desc: 'а  (это важно) я им назначу в зависимости от логики моего приложения какие-т',
        like: true,
        likeCount: 9,
        data: '11/09/2021',
        comentOfcoment: [
          {
            id: 123,
            desc: "Don't need a list of month names, javascript has that, even in IE. var month = a.toLocaleDateStrin",
            like: false,
            likeCount: 2,
            data: '11/09/2021',
          },
        ],
      },
    ],
    commentCount: 3,
    like: false,
    likeCount: 999,
    data: '11/09/2021',
    objectHotel: {
      hotelName: 'Hilton  hotel ',
      hotelAvatar: avatarHotel,
      rank: '7,3',
    },
  },
  {
    id: 3,
    userId: 8,
    userName: 'Jean-Claude Van Damme',
    userAvatar: avatarVan,

    desc: `Супер сервис! Забронировал дешевле чем обычно и отельеры сами не и ...`,
    commentArr: [
      {
        id: 31,
        desc: ' Обновил в прошлой ссылке. Но с логикой твоего приложения я не согласен. Не стоит делать такой главный компонент который пожирает все то что ему не дали. С оптим',
        like: false,
        likeCount: 59,
        data: '11/09/2021',
        comentOfcoment: [
          {
            id: 193,
            desc: 'Дякую кожному і кожній, хто воює за Україну! Дякую всім, хто працює заради нашої перемоги!Дякую всім нашим партнерам, які допомагають нам захищати свободу! Слава Україні!',
            like: false,
            likeCount: 8,
            data: '11/12/2021',
          },
        ],
      },
    ],
    commentCount: 1,
    like: true,
    likeCount: 113,
    data: '11/09/2021',
    objectHotel: {
      hotelName: 'Hilton JBSX',
      hotelAvatar: avatarHotel,
      rank: '7,3',
    },
  },
  {
    id: 4,
    userId: 3,
    userName: 'Jason Michael Statham',
    userAvatar: avatarStat,

    desc: ' Хочется иметь такую возможность. В настройках. Чтобы открывался не только материал, но и комментарии к нему, если они есть. Кликать по моей красивой иконке, конечно, приятно, но несколько неудобно.',
    commentArr: [
      {
        id: 41,
        desc: 'Знаете кого-то, кто может ответить? Поделитесь ссылкой на этот вопрос по почте, через Твиттер или Facebook',
        like: false,
        likeCount: 234,
        data: '11/09/2021',
        comentOfcoment: [],
      },
      {
        id: 42,
        desc: '@alum сам не понимаю, проверил свой код - все работает, не знаю, что я делал не так, что у меня выдавались ошибки :( В любом случае спасибо и за песочницу тоже. ',
        like: false,
        likeCount: 0,
        data: '11/09/2021',
        comentOfcoment: [],
      },
    ],
    commentCount: 2,
    like: false,
    likeCount: 0,
    data: '11/09/2021',
    objectHotel: {
      hotelName: 'hotel raga i kopyta',
      hotelAvatar: avatarHotel,
      rank: '7,3',
    },
  },
  {
    id: 5,
    userId: 3,
    userName: 'Jason Michael Statham',
    userAvatar: avatarStat,
    desc: `Подскажите как правильно реализовать следующую задумку (возможно я микроскопом гвозди забиваю или вообще использую неправильный подход - тогда скорректируйте PLZ)eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`,
    commentArr: [
      {
        id: 51,
        desc: 'Знаете кого-то, кто может ответить? Поделитесь ссылкой на этот вопрос по почте, через Твиттер или Facebook',
        like: false,
        likeCount: 234,
        data: '11/09/2021',
        comentOfcoment: [],
      },
      {
        id: 52,
        desc: '@alum сам не понимаю, проверил свой код - все работает, не знаю, что я делал не так, что у меня выдавались ошибки :( В любом случае спасибо и за песочницу тоже. ',
        like: false,
        likeCount: 9,
        data: '11/09/2021',
        comentOfcoment: [],
      },
      {
        id: 53,
        desc: 'а  (это важно) я им назначу в зависимости от логики моего приложения какие-т',
        like: true,
        likeCount: 99,
        data: '11/09/2021',
        comentOfcoment: [],
      },
    ],
    commentCount: 1,
    like: false,
    likeCount: 11,
    data: '11/09/2021',
    objectHotel: {
      hotelName: 'hotel raga i kopyta',
      hotelAvatar: avatarHotel,
      rank: '7,3',
    },
  },
];
