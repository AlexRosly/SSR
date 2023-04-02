import sendIcon from 'assets/icons/proposeCard/send.svg';
import s from '../subcard.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { createMessage } from './createMessage';

interface IMessage {
  name: string;
  data: string;
  text: string;
}
interface IUserName {
  object: {
    name: string;
  };
}

const testHotelierMessage = {
  name: 'HotelPlaza',
  data: '00:12 22/12/2023',
  text: 'Садитесь на метро и едьте побыстрее к нам у нас хорошо',
};

export const ChatHotelier = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [textarea, setTextarea] = useState('');
  const userName = useSelector((state: IUserName) => state.object.name);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage = createMessage({ name: userName, text: textarea.trim() });

    setMessages([newMessage, ...messages]);
    e.currentTarget.reset();

    //test - need to del
    setTimeout(() => {
      setMessages([testHotelierMessage, newMessage, ...messages]);
    }, 2000);
    //
  };

  return (
    <div className={s.chat}>
      <div className={s.chat_block}>
        {messages.length === 0 && `Чат с отельером`}
        {messages.length > 0 && (
          <ul className={s.chat_text__list}>
            {messages.map((el, id) => (
              <li className={el.name !== userName ? `${s.chat_text} ${s.chat_text_accent}` : s.chat_text} key={id}>
                <span className={s.chat_text_username}>{el.name} </span>
                <span>{el.data}:</span>
                <span className={s.chat_text_message}>{el.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <form className={s.chat_message_container} onSubmit={handleSubmit}>
        <textarea
          className={s.chat_message}
          required
          value={textarea}
          name="message"
          rows={4}
          minLength={2}
          maxLength={5000}
          onChange={e => {
            setTextarea(e.currentTarget.value);
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();

              if (textarea.trim().length > 2) {
                const newMessage = createMessage({ name: userName, text: textarea });
                setMessages([newMessage, ...messages]);
                e.currentTarget.form?.reset();
                setTextarea('');

                //test - need to del
                setTimeout(() => {
                  setMessages([testHotelierMessage, newMessage, ...messages]);
                }, 2000);

                //
              }
            }
          }}
        />
        <button className={s.chat_btn_send} type="submit">
          <img src={sendIcon} className={s.chat_icon} alt="send message" />
        </button>
      </form>
    </div>
  );
};
