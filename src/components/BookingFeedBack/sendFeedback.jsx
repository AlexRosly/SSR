import { useCallback, useState } from 'react';
import f from './sendFeedback.module.scss';
import UserFeedback from './userFeedback/userFeedback';
import { useTranslation } from 'react-i18next';

const MAX = 500;
const MIN = 70;

export const CloseFeedbackModalButton = ({ closeModal }) => (
  <button className={f.modal_close} onClick={closeModal}>
    Close
  </button>
);

export const FeedbackModalContent = () => {
  const { t } = useTranslation();
  const [feedbackLength, setFeedbackLength] = useState(0);

  const onChangeText = useCallback(e => {
    setFeedbackLength(e.target.value.length);
  }, []);

  const handleSubmit = useCallback(ev => {
    ev.preventDefault();

    const { value } = ev.currentTarget.feedback;
    if (!value.length) {
      return;
    }

    console.log(value);
  }, []);

  const withinRange = MIN <= feedbackLength && feedbackLength <= MAX;
  const requiredLength = `(${MIN}/${MAX})`;
  const currentLength = `${feedbackLength}/${MAX}`;

  return (
    <div className={f.send_feedback_container}>
      <div className={f.feedback_text_block}>
        <p className={f.feedback_text}>{t('writeYourReview')}</p>
        <span className={f.feedback_text}>{requiredLength}</span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={f.textarea_div_block}>
          <textarea
            id="feedbackId"
            name="feedback"
            className={f.textarea_block}
            onChange={onChangeText}
            minLength={MIN}
            maxLength={MAX}
            required
          />

          <label className={f.label_block} htmlFor="feedbackId">
            {currentLength}
          </label>
        </div>

        <div className={f.btn_block}>
          <button disabled={!withinRange} type="submit" className={f.btn_send}>
            {t('submitFeedback')}
          </button>

          <button disabled={!withinRange} className={f.btn_karma}>
            <span className={f.btn_karma_text1}>+</span>
            <span className={f.btn_karma_text1}>2</span>
            <span className={f.btn_karma_text2}>Booking Karma</span>
          </button>
        </div>
      </form>
    </div>
  );
};

const SendFeedback = () => {
  return (
    <div className={f.feedbackPositioned}>
      <UserFeedback />
    </div>
  );
};
export default SendFeedback;
