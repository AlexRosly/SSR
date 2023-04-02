import { useState } from 'react';
import UserFeedbackCommentItems from './userFeedbackCommentItems';

import SendCommentFeedback from '../sendCommentFeedback';

import uf from './userFeedback.module.scss';

export const UserFeedbackItems = ({ ...prop }) => {
  const {
    userName,
    userAvatar,
    id,
    desc,
    data,
    likeCount,
    like,
    commentArr,
    objectHotel: { hotelAvatar, hotelName, rank },
  } = prop;

  const [propAr, setPropAr] = useState(commentArr);
  const [likeState, setLikeState] = useState(like);
  const [likeCountState, setLikeCountState] = useState(likeCount);
  const [textComment, setTextComment] = useState('');
  const [open, setOpen] = useState(false);
  const [openCom, setOpenCom] = useState(false);
  const [countComment, setCountComment] = useState(0);

  let commentCount = propAr.length + countComment;
  console.log(likeCount, 'likecounte feedback');

  function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + '/' + month + '/' + year;
    return time;
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    const createText = {
      id: +Date.now().toFixed(),
      desc: ev.target[0].value,
      data: timeConverter(ev.timeStamp),
      likeCount: 0,
      like: false,
      comentOfcoment: [],
    };

    setPropAr([...propAr, createText]);
    setTextComment('');
    setOpenCom(false);
  };
  const feedBackLike = () => {
    setLikeState(!likeState);

    if (!likeState) {
      setLikeCountState(prev => prev + 1);
    }
    if (likeState && likeCountState > 0) {
      setLikeCountState(prev => prev - 1);
    }
  };

  const clickComment = () => {
    setOpenCom(!openCom);
  };
  const closeSendComment = () => {
    setOpenCom(false);
  };

  const clickText = e => {
    if (desc.length > 120) {
      setOpen(!open);
    }
    return;
  };

  return (
    <li className={uf.full_container}>
      <div className={`${open ? uf.user_feedback_container_open : uf.user_feedback_container}`}>
        <div className={uf.user_block}>
          <p className={uf.user_name}>{userName}</p>
          <div className={uf.avatar_block}>
            <img className={uf.user_avatar} src={userAvatar} alt="icon user" />
            <p className={uf.user_number}>36</p>
            <p className={uf.user_karma}>Booking Karma</p>
          </div>
        </div>

        <div className={uf.feedback_block}>
          <p className={uf.feedback_area_block}>{desc}</p>

          <div className={uf.btn_block}>
            <button
              onClick={clickText}
              type="button"
              className={`${uf.button} ${open ? uf.btn_close_disc : uf.btn_open_disc} `}
            />

            <button onClick={clickComment} type="button" className={`${uf.btn_open_comment} ${uf.button}`}></button>
            <p className={uf.countC}>{commentCount > 999 ? '1K' : commentCount > 0 ? commentCount : ''}</p>
            <button
              onClick={() => feedBackLike(id)}
              type="button"
              className={`${uf.button} ${likeState ? uf.btn_like : uf.btn_unlike}`}
            ></button>

            <p className={uf.countL}>{likeCountState > 999 ? '1K' : likeCountState > 0 ? likeCountState : ''}</p>
            <time className={uf.time_block} dateTime="2021-09-11">
              {data}
            </time>
          </div>
        </div>

        <div className={uf.user_block}>
          <p className={uf.user_name}>{hotelName}</p>

          <div className={uf.avatar_block}>
            <img className={uf.user_avatar} src={hotelAvatar} alt="icon hotel" />
            <p className={uf.hotel_rank_block}>
              <span className={uf.hotel_rank}>{rank}</span>
            </p>
          </div>
        </div>
      </div>

      {openCom && propAr.length !== 0 ? (
        propAr?.map(obj => (
          <UserFeedbackCommentItems
            key={obj.id}
            obj={obj}
            {...prop}
            textComment={textComment}
            handleSubmit={handleSubmit}
            setCountComment={setCountComment}
          />
        ))
      ) : openCom ? (
        <SendCommentFeedback
          id={id}
          closeSendComment={closeSendComment}
          setOpenCom={setOpenCom}
          textComment={textComment}
          handleSubmit={handleSubmit}
        />
      ) : null}
    </li>
  );
};
