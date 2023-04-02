import { useState, useEffect } from 'react';
import s from '../../HoteliersProposeCard.module.scss';

interface IProps {
  video: string;
  title: string;
}

export const VideoPreview = ({ video, title }: IProps) => {
  const defaultStyle = `${s.video__overlay} ${s.loading}`;
  const [videoClassList, setVideoClassList] = useState(defaultStyle);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setVideoClassList(s.video__overlay);
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={s.card__video}>
      <div className={videoClassList}></div>
      <iframe
        width="107"
        height="107"
        src={
          video + '?rel=0&controls=0&showinfo=0&modestbranding=1&mute=1&autoplay=1&loop=1&playlist=' + video.slice(-11)
        }
        title={title}
        allowFullScreen
        loading="lazy"
        frameBorder="0"
      />
    </div>
  );
};
