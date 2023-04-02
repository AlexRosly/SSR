import React, { useState } from 'react';
import SendCommentFeedback from '../sendCommentFeedback';
import UserCommentOfCommentItems from './userCommentOfCommentItems';
import ufc from './userFeedback.module.scss';

const UserFeedbackCommentItems = ({ setCountComment, ...prop }) => {
  const {
    userName,
    userAvatar,
    obj: { id, desc, data, likeCount, like, comentOfcoment },
    objectHotel: { hotelAvatar, hotelName, rank },
  } = prop;

  const [open, setOpen] = useState(false);
  const [openCom, setOpenCom] = useState(false);
  const [likeState, setLikeState] = useState(like);
  const [likeCountState, setLikeCountState] = useState(likeCount);
  const [textComment, setTextComment] = useState('');
  const [propComment, setPropComment] = useState(comentOfcoment);

  let commentCount = propComment.length;

  setCountComment(commentCount);
  const CommentLike = () => {
    setLikeState(!likeState);

    if (!likeState) {
      setLikeCountState(prev => prev + 1);
    }
    if (likeState && likeCountState > 0) {
      setLikeCountState(prev => prev - 1);
    }
  };
  const clickComment = () => {
    setOpenCom(true);
  };
  function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + '/' + month + '/' + year;
    return time;
  }
  const handleSubmitComment = ev => {
    ev.preventDefault();
    const createText = {
      id: +Date.now().toFixed(),
      desc: ev.target[0].value,
      data: timeConverter(ev.timeStamp),
      likeCount: 0,
      like: false,
      comentOfcoment: [],
    };
    setPropComment([...propComment, createText]);
    setTextComment('');

    setOpenCom(false);
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
    <>
      <div className={ufc.full_container}>
        <div className={`${open ? ufc.user_feedback_comment_container_open : ufc.user_feedback_comment_container}`}>
          <div className={ufc.user_block}>
            <p className={ufc.user_name}>{hotelName}</p>
            <div className={ufc.avatar_block}>
              <img className={ufc.user_avatar} src={hotelAvatar} alt="icon hotel" />
              <p className={ufc.hotel_rank_block}>
                <span className={ufc.hotel_rank}>{rank}</span>
              </p>
            </div>
          </div>
          <div className={ufc.feedback_block}>
            <p className={ufc.feedback_area_block}>{desc}</p>

            <div className={ufc.btn_block}>
              <button
                onClick={clickText}
                type="button"
                className={`${ufc.button} ${open ? ufc.btn_close_disc : ufc.btn_open_disc} `}
              />

              <button onClick={clickComment} type="button" className={`${ufc.btn_open_comment} ${ufc.button}`}></button>
              <p className={ufc.countC}></p>
              <button
                onClick={() => CommentLike(id)}
                type="button"
                className={`${ufc.button} ${likeState ? ufc.btn_like : ufc.btn_unlike}`}
              ></button>
              <p className={ufc.countL}>{likeCountState > 999 ? '1K' : likeCountState > 0 ? likeCountState : ''}</p>
              <time className={ufc.time_block}>{data}</time>
            </div>
          </div>
          <div className={ufc.user_block}>
            <p className={ufc.user_name}>{userName}</p>
            <div className={ufc.avatar_block}>
              {' '}
              <img className={ufc.user_avatar} src={userAvatar} alt="icon user" />
              <p className={ufc.user_number}>36</p>
              <p className={ufc.user_karma}>Booking Karma</p>
            </div>
          </div>
        </div>

        {openCom && (
          <SendCommentFeedback
            id={id}
            closeSendComment={closeSendComment}
            setOpenCom={setOpenCom}
            textComment={textComment}
            handleSubmit={handleSubmitComment}
          />
        )}
        <>
          {' '}
          {propComment?.map(obj => (
            <UserCommentOfCommentItems key={obj.id} {...prop} obj={obj} />
          ))}
        </>
      </div>
    </>
  );
};
export default UserFeedbackCommentItems;
