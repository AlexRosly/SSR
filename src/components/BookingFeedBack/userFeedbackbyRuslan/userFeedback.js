import React from 'react';
import comment from '../../../assets/images/bookingFeedback/comment.png';
import comment2 from '../../../assets/images/bookingFeedback/comment2.png';
import full from '../../../assets/images/bookingFeedback/full.svg';
import notfull from '../../../assets/images/bookingFeedback/notfull.svg';
import commentIcon from '../../../assets/images/bookingFeedback/comment.svg';
import like from '../../../assets/images/bookingFeedback/like.svg';
import './useFeedback.scss';

const testArray = [
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
    name: 'Arnold Schwa rzenegger',
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
    id: '3',
    name: 'Arnold Schwa rzenegger',
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
];
export const UserFeedback = () => {
  const fullscreen = ({ currentTarget }) => {
    const listItem = document.querySelectorAll('.comment-item');
    listItem.forEach(num => {
      if (num.id === currentTarget.dataset.id) {
        num.querySelector('.comment-content-desc').classList.toggle('comment-content-desc-noActive');
        num.querySelector('.comment-content-desc-fullscreen').classList.toggle('comment-content-desc-active');
        num.querySelector('.comment-content-button-full-icon-open').classList.toggle('icon-none');
        num.querySelector('.comment-content-button-full-icon').classList.toggle('icon-none');
      }
    });
    console.dir(currentTarget.dataset.id);
  };
  return (
    <ul className="comment">
      {testArray.map(num => (
        <li className="comment-item" id={num.id} key={num.id}>
          <div className="comment-user">
            <h2 className="comment-user-title">{num.name}</h2>
            <div className="comment-user-avatar">
              <img className="comment-user-avatar-img" src={num.avatar} alt="avatar" />
              <p className="comment-user-avatar-text">Booking Karma</p>
              <p className="comment-user-avatar-number">{num.userNumber}</p>
            </div>
          </div>
          <div className="comment-content">
            <p className="comment-content-desc">{num.desc.length > 78 ? num.desc.slice(0, 75) + '...' : num.desc}</p>
            <p className="comment-content-desc-fullscreen">{num.desc}</p>
            <div className="comment-content-func">
              <ul className="comment-content-button">
                <li className="comment-content-button-item">
                  <button data-id={num.id} onClick={fullscreen} className="comment-content-button-full">
                    <img className="comment-content-button-full-icon" src={full} alt="icon" />
                    <img className="comment-content-button-full-icon-open icon-none" src={notfull} alt="icon" />
                  </button>
                </li>
                <li className="comment-content-button-item">
                  <button className="comment-content-button-response">
                    <img className="comment-content-button-response-icon" src={commentIcon} alt="icon" />
                  </button>
                </li>
                <li className="comment-content-button-item">
                  <button className="comment-content-button-like">
                    <img className="comment-content-button-like-icon" src={like} alt="icon" />
                    {num.like}
                  </button>
                </li>
              </ul>
              <p className="comment-content-data">{num.data}</p>
            </div>
          </div>
          <div className="comment-object">
            <h2 className="comment-object-title">{num.object.name}</h2>
            <div className="comment-object-avatar">
              <img className="comment-object-avatar-img" src={num.object.avatar} alt="avatar-obj" />
              <p className="comment-object-avatar-rank">{num.object.rank}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
