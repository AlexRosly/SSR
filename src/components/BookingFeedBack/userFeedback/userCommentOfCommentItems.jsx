import React, { useState } from 'react';

import ufcc from './userFeedback.module.scss';

const UserCommentOfCommentItems = ({
  userName,
  userAvatar,
  obj: { id, desc, data, likeCount, like },
  objectHotel: { hotelAvatar, hotelName, rank },
}) => {
  const [open, setOpen] = useState(false);
  const [likeState, setLikeState] = useState(like);
  const [likeCountState, setLikeCountState] = useState(likeCount);

  const CommentLike = () => {
    setLikeState(!likeState);

    if (!likeState) {
      setLikeCountState(prev => prev + 1);
    }
    if (likeState && likeCountState > 0) {
      setLikeCountState(prev => prev - 1);
    }
  };

  const clickText = e => {
    if (desc.length > 120) {
      setOpen(!open);
    }
    return;
  };

  return (
    <>
      <div className={ufcc.full_container}>
        <div className={`${open ? ufcc.user_feedback_comment_container_open : ufcc.user_feedback_comment_container}`}>
          <div className={ufcc.user_block}>
            <p className={ufcc.user_name}>{hotelName}</p>
            <div className={ufcc.avatar_block}>
              <img className={ufcc.user_avatar} src={hotelAvatar} alt="icon hotel" />
              <p className={ufcc.hotel_rank_block}>
                <span className={ufcc.hotel_rank}>{rank}</span>
              </p>
            </div>
          </div>
          <div className={ufcc.feedback_block}>
            <p className={ufcc.feedback_area_block}>{desc}</p>

            <div className={ufcc.btn_block}>
              <button
                onClick={clickText}
                type="button"
                className={`${ufcc.button} ${open ? ufcc.btn_close_disc : ufcc.btn_open_disc} `}
              />

              <button
                type="button"
                style={{ color: 'blue' }}
                className={`${ufcc.btn_open_comment} ${ufcc.button}`}
              ></button>
              <p className={ufcc.countC}></p>
              <button
                onClick={() => CommentLike(id)}
                type="button"
                className={`${ufcc.button} ${likeState ? ufcc.btn_like : ufcc.btn_unlike}`}
              ></button>
              <p className={ufcc.countL}>{likeCountState > 999 ? '1K' : likeCountState > 0 ? likeCountState : ''}</p>
              <time className={ufcc.time_block}>{data}</time>
            </div>
          </div>
          <div className={ufcc.user_block}>
            <p className={ufcc.user_name}>{userName}</p>
            <div className={ufcc.avatar_block}>
              <img className={ufcc.user_avatar} src={userAvatar} alt="icon user" />
              <p className={ufcc.user_number}>36</p>
              <p className={ufcc.user_karma}>Booking Karma</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserCommentOfCommentItems;
