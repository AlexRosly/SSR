import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Images from '../Images/Images';
// import LinkArrow from 'assets/icons/common/linkArrow.svg';

import s from './Video.module.scss';
//https://www.youtube.com/embed/4JiF7quBZ3c?autoplay=1&cc_load_policy=3&end=10&fs=0&loop=1&modestbranding=1&playsinline=1&start=5&playlist=eoGdSempEuQ
function Video({ videoLink }) {
  const inputEl = useRef(null);

  // const onButtonClick = () => {
  //   // `current` указывает на смонтированный элемент `input`
  //   inputEl.current.focus();
  // };

  // const handleHover = () => {
  //   console.log('this is hover');
  // };

  // useEffect(() => {
  //   inputEl.current.addEventListener('hover', handleHover);
  // }, []);

  return (
    <>
      <div className={s.videoContainer}>
        <NavLink className={s.link} ref={inputEl}>
          {/* <img src={LinkArrow} className={s.linkArrow} /> */}
          <iframe
            width="100"
            height="100"
            src="https://www.youtube.com/embed/6g4fv2LIa20?modestbranding=1&autoplay=0&mute=1&iv_load_policy=3&controls=0&fs=0&showinfo=0;"
            title="YouTube video player"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </NavLink>
        <Images />

        {/* <iframe
          className={s.videoFrame}
          ref={inputEl}
          id="ytplayer"
          type="text/html"
          src={videoLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe> */}
      </div>

      <div id="player"></div>
    </>
  );
}

export default Video;

// заглушка https://i.ibb.co/nfGwMww/Rectangle-96.jpg
