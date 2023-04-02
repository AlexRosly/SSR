// import React from 'react';
// import userFace from '../../../assets/images/bookingFeedback/comment.png';
// import hotelAva from '../../../assets/images/bookingFeedback/comment2.png';
// import full from '../../../assets/images/bookingFeedback/full.svg';
// import notfull from '../../../assets/images/bookingFeedback/notfull.svg';
// import commentIcon from '../../../assets/images/bookingFeedback/comment.svg';
// import like from '../../../assets/images/bookingFeedback/like.svg';
import hf from './holierFeedback.module.scss';

export const HotelierFeedbackItems = (imgHotel, imgUser) => {
  return (
    <>
      <div className={hf.feedback_container}>
        <div className={hf.hotel_block}>
          <p className={hf.hotel_name}></p>
          <p className={hf.hotel_rank}></p>
          <img src={imgHotel} alt="icon hotel" />
        </div>
        <div></div>
        <div>
          <p></p>
          <img src={imgUser} alt="icon user" />
        </div>
      </div>
    </>
  );
};
