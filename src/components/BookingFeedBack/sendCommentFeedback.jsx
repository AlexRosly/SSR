import React, { useRef, useState } from 'react';
import c from './sendFeedback.module.scss';

const SendCommentFeedback = ({ id, closeSendComment, setOpenCom, handleSubmit }) => {
  const [textlength] = useState(500);

  const [textPrint, setTextPrint] = useState('');
  const refText = useRef();

  const onChangeSendText = e => {
    setTextPrint(e.target.value);
  };

  return (
    <div className={c.send_feedback_container}>
      <div className={c.feedback_text_block}>
        <button onClick={closeSendComment} className={c.feedback_arrow_close}></button>
        <p className={c.feedback_text}>Напишите комментарий</p>
        <span>(70/{textlength})</span>
      </div>
      <div className={c.form_block}>
        <form onSubmit={handleSubmit}>
          <textarea
            id="feedback"
            type="text"
            ref={refText}
            value={textPrint}
            maxLength={textlength}
            className={c.textarea_block}
            onChange={onChangeSendText}
          />
          <label className={c.label_block} htmlFor="feedback">
            {textPrint.length}/{textlength}
          </label>
          <div className={c.btn_block}>
            <button disabled={textPrint.length < 70} type="submit" className={c.btn_send}>
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SendCommentFeedback;
